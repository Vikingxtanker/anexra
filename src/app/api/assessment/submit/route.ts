import { NextRequest } from "next/server";

import { createClient } from "@/lib/supabase/server";
import {
  getAssessmentQuestions,
  getOptionsForQuestions,
} from "@/lib/assessment/questions";
import {
  createAssessmentAttempt,
  getLatestAssessmentAttempt,
  saveAssessmentAnswers,
} from "@/lib/assessment/attempts";
import { calculateScore } from "@/lib/assessment/score";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const assessmentId = String(body.assessmentId ?? "");
    const courseId = String(body.courseId ?? "");
    const answers = body.answers ?? {};

    if (!assessmentId || !courseId || typeof answers !== "object") {
      return Response.json(
        { error: "Assessment, course, and answers are required." },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return Response.json({ error: "Unauthorized." }, { status: 401 });
    }

    const { data: purchase } = await supabase
      .from("course_purchases")
      .select("id")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .maybeSingle();

    if (!purchase) {
      return Response.json(
        { error: "You need course access before submitting this assessment." },
        { status: 403 },
      );
    }

    const { data: assessment } = await supabase
      .from("assessments")
      .select("*")
      .eq("id", assessmentId)
      .eq("course_id", courseId)
      .eq("is_active", true)
      .maybeSingle();

    if (!assessment) {
      return Response.json({ error: "Assessment not found." }, { status: 404 });
    }

    const previousAttempt = await getLatestAssessmentAttempt(
      supabase,
      assessmentId,
      user.id,
    );

    if (previousAttempt?.passed) {
      return Response.json(
        { error: "You have already passed this assessment." },
        { status: 409 },
      );
    }

    if (
      previousAttempt &&
      Number(previousAttempt.attempt_number) >= Number(assessment.max_attempts ?? 1)
    ) {
      return Response.json(
        { error: "Maximum assessment attempts reached." },
        { status: 409 },
      );
    }

    const questions = await getAssessmentQuestions(supabase, assessmentId);
    const questionIds: string[] = questions.map(
      (question: { id: string }) => question.id,
    );
    const submittedQuestionIds = Object.keys(answers);

    if (
      questions.length === 0 ||
      questionIds.some((questionId) => !submittedQuestionIds.includes(questionId))
    ) {
      return Response.json(
        { error: "Please answer every question before submitting." },
        { status: 400 },
      );
    }

    const options = await getOptionsForQuestions(supabase, questionIds, true);
    const validOptionIds = new Set<string>(
      options.map((option: { id: string }) => option.id),
    );

    const hasInvalidAnswer = Object.entries(answers).some(
      ([questionId, optionId]) =>
        !questionIds.includes(questionId) ||
        typeof optionId !== "string" ||
        !validOptionIds.has(optionId),
    );

    if (hasInvalidAnswer) {
      return Response.json(
        { error: "One or more submitted answers are invalid." },
        { status: 400 },
      );
    }

    const result = calculateScore({
      assessment,
      questions,
      correctOptions: options,
      answers,
    });

    const attempt = await createAssessmentAttempt({
      supabase,
      assessmentId,
      courseId,
      userId: user.id,
      attemptNumber: Number(previousAttempt?.attempt_number ?? 0) + 1,
      result,
    });

    await saveAssessmentAnswers({
      supabase,
      attemptId: attempt.id,
      answerResults: result.answerResults,
    });

    return Response.json({
      attemptId: attempt.id,
      score: result.score,
      totalMarks: result.totalMarks,
      percentage: result.percentage,
      correctCount: result.correctCount,
      wrongCount: result.wrongCount,
      passed: result.passed,
    });
  } catch (error) {
      console.error("Assessment submit error:", error);

      return Response.json(
        {
          error:
            error instanceof Error
              ? error.message
              : "Unable to submit assessment.",
          stack:
            error instanceof Error
              ? error.stack
              : null,
        },
        { status: 500 },
      );
    }
}
