import type { AssessmentResult } from "@/lib/assessment/score";

type SupabaseClientLike = {
  from: (table: string) => any;
};

export async function getLatestAssessmentAttempt(
  supabase: SupabaseClientLike,
  assessmentId: string,
  userId: string,
) {
  const { data } = await supabase
    .from("assessment_attempts")
    .select("*")
    .eq("assessment_id", assessmentId)
    .eq("user_id", userId)
    .order("submitted_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return data ?? null;
}

export async function getPassedAssessmentAttemptForCourse(
  supabase: SupabaseClientLike,
  userId: string,
  courseId: string,
) {
  const { data: assessment } = await supabase
    .from("assessments")
    .select("id")
    .eq("course_id", courseId)
    .eq("is_active", true)
    .maybeSingle();

  if (!assessment) {
    return null;
  }

  const { data } = await supabase
    .from("assessment_attempts")
    .select("*")
    .eq("assessment_id", assessment.id)
    .eq("user_id", userId)
    .eq("passed", true)
    .order("submitted_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return data ?? null;
}

export async function createAssessmentAttempt({
  supabase,
  assessmentId,
  courseId,
  userId,
  attemptNumber,
  result,
}: {
  supabase: SupabaseClientLike;
  assessmentId: string;
  courseId: string;
  userId: string;
  attemptNumber: number;
  result: AssessmentResult;
}) {
  const { data, error } = await supabase
  .from("assessment_attempts")
  .insert({
    assessment_id: assessmentId,
    course_id: courseId,
    user_id: userId,
    attempt_number: attemptNumber,

    total_questions: result.totalQuestions,
    correct_answers: result.correctCount,
    wrong_answers: result.wrongCount,
    unanswered: 0,

    obtained_marks: result.score,
    total_marks: result.totalMarks,
    percentage: result.percentage,

    passed: result.passed,
    submitted_at: new Date().toISOString(),
  })
  .select("id")
  .single();

  if (error || !data) {
    throw new Error(error?.message ?? "Unable to save assessment attempt.");
  }

  return data;
}

export async function saveAssessmentAnswers({
  supabase,
  attemptId,
  answerResults,
}: {
  supabase: SupabaseClientLike;
  attemptId: string;
  answerResults: {
    questionId: string;
    selectedOptionId: string | null;
    correctOptionId: string | null;
    isCorrect: boolean;
  }[];
}) {
  const rows = answerResults.map((answer) => ({
    attempt_id: attemptId,
    question_id: answer.questionId,
    selected_option_id: answer.selectedOptionId,
    is_correct: answer.isCorrect,
  }));

  if (rows.length === 0) {
    return;
  }

  const { error } = await supabase.from("assessment_answers").insert(rows);

  if (error) {
    throw new Error(error.message);
  }
}
