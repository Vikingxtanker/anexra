import type { SupabaseClient } from "@supabase/supabase-js";

type AssessmentOptionRow = {
  id: string;
  question_id: string;
  option_text: string;
  position: number;
};

type AssessmentQuestionRow = {
  id: string;
  question: string;
  explanation: string | null;
  position: number;
  options: AssessmentOptionRow[];
};

export async function getAssessmentForCourse(
  supabase: SupabaseClient,
  courseId: string,
) {
  const { data, error } = await supabase
    .from("assessments")
    .select("*")
    .eq("course_id", courseId)
    .eq("is_active", true)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function getAssessmentQuestions(
  supabase: SupabaseClient,
  assessmentId: string,
) {
  const { data, error } = await supabase
    .from("assessment_questions")
    .select("*")
    .eq("assessment_id", assessmentId)
    .order("position");

  if (error || !data) {
    return [];
  }

  return data.map((question) => ({
    ...question,
    question: question.question ?? question.question_text ?? question.title ?? "",
  }));
}

export async function getOptionsForQuestions(
  supabase: SupabaseClient,
  questionIds: string[],
  includeCorrectAnswers = false,
) {
  if (questionIds.length === 0) {
    return [];
  }

  const select = includeCorrectAnswers ? "*" : "id, question_id, option_text, position";
  const { data, error } = await supabase
    .from("assessment_options")
    .select(select)
    .in("question_id", questionIds)
    .order("position");

  if (error || !data) {
    return [];
  }

  return data as unknown as AssessmentOptionRow[];
}

export function attachOptionsToQuestions(
  questions: Array<Record<string, unknown>>,
  options: Array<Record<string, unknown>>,
) {
  return questions.map((question) => ({
    ...question,
    options: options.filter((option) => option.question_id === question.id),
  })) as AssessmentQuestionRow[];
}
