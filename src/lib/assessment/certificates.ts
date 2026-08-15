import { getAssessmentForCourse } from "@/lib/assessment/questions";
import { getPassedAssessmentAttemptForCourse } from "@/lib/assessment/attempts";
import type { SupabaseClient } from "@supabase/supabase-js";

export async function hasPassedRequiredAssessment(
  supabase: SupabaseClient,
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
