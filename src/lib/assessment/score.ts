export type SubmittedAnswers = Record<string, string>;

export type CorrectOption = {
  id: string;
  question_id: string;
  is_correct?: boolean | null;
  correct?: boolean | null;
};

export type ScoreQuestion = {
  id: string;
};

export type ScoreAssessment = {
  marks_per_question?: number | null;
  passing_marks?: number | null;
  pass_percentage?: number | null;
};

export function calculateScore({
  assessment,
  questions,
  correctOptions,
  answers,
}: {
  assessment: ScoreAssessment;
  questions: ScoreQuestion[];
  correctOptions: CorrectOption[];
  answers: SubmittedAnswers;
}) {
  const correctOptionByQuestion = new Map(
    correctOptions
      .filter((option) => option.is_correct === true || option.correct === true)
      .map((option) => [option.question_id, option.id]),
  );

  const marksPerQuestion = Number(assessment.marks_per_question ?? 1);
  const totalQuestions = questions.length;
  const totalMarks = totalQuestions * marksPerQuestion;
  let correctCount = 0;

  const answerResults = questions.map((question) => {
    const selectedOptionId = answers[question.id] ?? null;
    const correctOptionId = correctOptionByQuestion.get(question.id) ?? null;
    const isCorrect =
      Boolean(selectedOptionId) && selectedOptionId === correctOptionId;

    if (isCorrect) {
      correctCount += 1;
    }

    return {
      questionId: question.id,
      selectedOptionId,
      correctOptionId,
      isCorrect,
    };
  });

  const wrongCount = totalQuestions - correctCount;
  const score = correctCount * marksPerQuestion;
  const percentage =
    totalMarks === 0 ? 0 : Math.round((score / totalMarks) * 100);
  const passingMarks =
    assessment.passing_marks ??
    Math.ceil(totalMarks * (Number(assessment.pass_percentage ?? 70) / 100));

  return {
    totalQuestions,
    correctCount,
    wrongCount,
    score,
    totalMarks,
    percentage,
    passingMarks,
    passed: score >= Number(passingMarks),
    answerResults,
  };
}
