import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

interface PageProps {
  params: Promise<{
    slug: string;
    lessonId: string;
  }>;
}

export default async function LessonPage({
  params,
}: PageProps) {
  const { lessonId } = await params;

  const supabase = await createClient();

  const { data: lessons } = await supabase
    .from("lessons")
    .select("*")
    .limit(5);

    const { data: lesson, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("id", lessonId)
    .single();

  if (!lesson) {
    return (
        <div className="pt-32">
        <h1>Lesson Not Found</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
    );
    }

  // Convert YouTube URL to embed URL
  const videoId =
    lesson.youtube_url
      ?.match(
        /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&]+)/
      )?.[1] ?? "";

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 px-6 pb-16 bg-[#f4efee]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {lesson.title}
        </h1>

        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={lesson.title}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}