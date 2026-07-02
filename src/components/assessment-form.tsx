"use client";

import { useMemo, useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";

import { Progress } from "@/components/ui/progress";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { toast } from "sonner";

interface AssessmentOption {
  id: string;
  question_id: string;
  option_text: string;
  position: number;
}

interface AssessmentQuestion {
  id: string;
  question: string;
  explanation: string | null;
  position: number;
  options: AssessmentOption[];
}

interface Assessment {
  id: string;
  title: string;
  total_questions: number;
  total_marks: number;
  marks_per_question: number;
  passing_marks: number;
}

interface Course {
  id: string;
  slug: string;
  title: string;
}

interface AssessmentFormProps {
  userId: string;
  course: Course;
  assessment: Assessment;
  questions: AssessmentQuestion[];
}

export default function AssessmentForm({
  userId,
  course,
  assessment,
  questions,
}: AssessmentFormProps) {

  const router = useRouter();

  // --------------------------
  // Current Question
  // --------------------------

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  // --------------------------
  // Selected Answers
  // questionId -> optionId
  // --------------------------

  const [answers, setAnswers] =
    useState<Record<string, string>>({});

  // --------------------------
  // Submit Loading
  // --------------------------

  const [submitting, setSubmitting] =
    useState(false);

  // --------------------------
  // Current Question Object
  // --------------------------

  const question =
    questions[currentQuestion];

  // --------------------------
  // Progress
  // --------------------------

  const answeredCount =
    useMemo(() => {

      return Object.keys(answers).length;

    }, [answers]);

  const progress =
    Math.round(
      ((currentQuestion + 1) /
        questions.length) *
        100
    );

  // --------------------------
  // Answer Question
  // --------------------------

  function selectAnswer(
    optionId: string
  ) {

    setAnswers((prev) => ({

      ...prev,

      [question.id]: optionId,

    }));

  }

  // --------------------------
  // Previous Question
  // --------------------------

  function previousQuestion() {

    if (currentQuestion === 0)
      return;

    setCurrentQuestion(
      currentQuestion - 1
    );

  }

  // --------------------------
  // Next Question
  // --------------------------

  function nextQuestion() {

    if (
      currentQuestion ===
      questions.length - 1
    )
      return;

    setCurrentQuestion(
      currentQuestion + 1
    );

  }

  // --------------------------
  // Jump To Question
  // --------------------------

  function jumpToQuestion(
    index: number
  ) {

    setCurrentQuestion(index);

  }

  // --------------------------
  // Submit
  // (implemented in Part 3)
  // --------------------------

  async function submitAssessment() {

  if (answeredCount !== questions.length) {

    toast.error(
      `Please answer all ${questions.length} questions before submitting.`
    );

    return;
  }

  const confirmed = window.confirm(
    "Are you sure you want to submit your assessment? You won't be able to change your answers afterwards."
  );

  if (!confirmed) return;

  try {

    setSubmitting(true);

    const response = await fetch(
      "/api/assessment/submit",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          assessmentId: assessment.id,

          courseId: course.id,

          userId,

          answers,

        }),

      }
    );

    const data =
      await response.json();

    if (!response.ok) {

      throw new Error(
        data.error ??
        "Failed to submit assessment."
      );

    }

    toast.success(
      "Assessment submitted successfully!"
    );

    router.push(

      `/student/courses/${course.slug}/assessment/result?attempt=${data.attemptId}`

    );

  }

  catch (error) {

    toast.error(

      error instanceof Error
        ? error.message
        : "Something went wrong."

    );

  }

  finally {

    setSubmitting(false);

  }

}

  return (
  <div className="space-y-8">

    {/* Header */}

    <Card className="border-[#d8c7c9]">

      <CardHeader>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <h2 className="text-2xl font-bold text-[#4c1711]">
              {assessment.title}
            </h2>

            <p className="mt-1 text-[#87565b]">
              Question {currentQuestion + 1} of{" "}
              {questions.length}
            </p>

          </div>

          <div className="text-right">

            <p className="text-sm text-[#87565b]">
              Answered
            </p>

            <p className="text-2xl font-bold text-[#4c1711]">
              {answeredCount} / {questions.length}
            </p>

          </div>

        </div>

        <div className="mt-6">

          <div className="mb-2 flex justify-between text-sm text-[#87565b]">

            <span>Assessment Progress</span>

            <span>{progress}%</span>

          </div>

          <Progress
            value={progress}
            className="h-3"
          />

        </div>

      </CardHeader>

    </Card>

    {/* Question */}

    <Card className="border-[#d8c7c9] shadow-sm">

      <CardHeader>

        <h3 className="text-xl font-semibold text-[#4c1711]">

          Q{currentQuestion + 1}. {question.question}

        </h3>

      </CardHeader>

      <CardContent>

        <RadioGroup

          value={answers[question.id]}

          onValueChange={selectAnswer}

          className="space-y-4"

        >

          {question.options.map((option) => (

            <div

              key={option.id}

              className="flex items-center space-x-3 rounded-xl border border-[#d8c7c9] p-4 transition hover:border-[#87565b] hover:bg-[#faf7f6]"

            >

              <RadioGroupItem

                value={option.id}

                id={option.id}

              />

              <Label

                htmlFor={option.id}

                className="cursor-pointer text-base leading-relaxed"

              >

                {option.option_text}

              </Label>

            </div>

          ))}

        </RadioGroup>

      </CardContent>

    </Card>

    {/* Question Navigator */}

    <Card className="border-[#d8c7c9]">

      <CardHeader>

        <h3 className="text-lg font-semibold text-[#4c1711]">

          Question Navigator

        </h3>

      </CardHeader>

      <CardContent>

        <div className="grid grid-cols-5 gap-3 sm:grid-cols-8 lg:grid-cols-10">

          {questions.map((q, index) => {

            const answered =
              answers[q.id];

            const active =
              currentQuestion === index;

            return (

              <Button

                key={q.id}

                variant={
                  active
                    ? "default"
                    : "outline"
                }

                onClick={() =>
                  jumpToQuestion(index)
                }

                className={`
                  h-12

                  ${
                    active
                      ? "bg-[#4c1711] hover:bg-[#5f1d16]"
                      : answered
                      ? "border-green-600 text-green-700"
                      : ""
                  }

                `}

              >

                {index + 1}

              </Button>

            );

          })}

        </div>

      </CardContent>

    </Card>

    {/* Navigation */}

    <div className="flex items-center justify-between">

      <Button

        variant="outline"

        disabled={currentQuestion === 0}

        onClick={previousQuestion}

      >

        <ChevronLeft className="mr-2 h-4 w-4" />

        Previous

      </Button>

      {currentQuestion !==
      questions.length - 1 ? (

        <Button

          onClick={nextQuestion}

          className="bg-[#4c1711] hover:bg-[#5f1d16]"

        >

          Next

          <ChevronRight className="ml-2 h-4 w-4" />

        </Button>

      ) : (

        <Button

          onClick={submitAssessment}

          disabled={submitting}

          className="bg-green-700 hover:bg-green-800"

        >

          {submitting

            ? "Submitting..."

            : "Submit Assessment"}

        </Button>

      )}

    </div>

  </div>
);

}