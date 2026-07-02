import { getAssessmentForCourse } from "@/lib/assessment/questions";
import { getPassedAssessmentAttemptForCourse } from "@/lib/assessment/attempts";

type SupabaseClientLike = {
  from: (table: string) => any;
};

export async function hasPassedRequiredAssessment(
  supabase: SupabaseClientLike,
  userId: string,
  courseId: string,
) {
  const assessment = await getAssessmentForCourse(supabase, courseId);

  if (!assessment) {
    return false;
  }

  const passedAttempt = await getPassedAssessmentAttemptForCourse(
    supabase,
    userId,
    courseId,
  );

  return Boolean(passedAttempt);
}
