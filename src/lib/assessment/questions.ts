type SupabaseClientLike = {
  from: (table: string) => any;
};

export async function getAssessmentForCourse(
  supabase: SupabaseClientLike,
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
  supabase: SupabaseClientLike,
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

  return data.map((question: any) => ({
    ...question,
    question: question.question ?? question.question_text ?? question.title ?? "",
  }));
}

export async function getOptionsForQuestions(
  supabase: SupabaseClientLike,
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

  return data;
}

export function attachOptionsToQuestions(questions: any[], options: any[]) {
  return questions.map((question) => ({
    ...question,
    options: options.filter((option) => option.question_id === question.id),
  }));
}
