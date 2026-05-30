"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

interface Subject {
  id: string;
  degree: string;
  year: string;
  name: string;
  slug: string;
}

export default function UploadChapterForm() {
  const supabase = createClient();

  const [subjects, setSubjects] = useState<Subject[]>([]);

  const [selectedSubjectId, setSelectedSubjectId] =
    useState("");

  const [title, setTitle] = useState("");

  const [file, setFile] = useState<File | null>(null);

  const [isFree, setIsFree] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSubjects() {
      const { data } = await supabase
        .from("subjects")
        .select("*")
        .order("degree")
        .order("year")
        .order("name");

      setSubjects(data ?? []);
    }

    loadSubjects();
  }, [supabase]);

  async function handleUpload() {
    if (
      !selectedSubjectId ||
      !title ||
      !file
    ) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const subject = subjects.find(
        (s) => s.id === selectedSubjectId
      );

      if (!subject) {
        throw new Error("Subject not found.");
      }

      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      
      // Check if chapter already exists
      const { data: existing } =
        await supabase
            .from("chapters")
            .select("id")
            .eq("subject_id", subject.id)
            .eq("slug", slug)
            .maybeSingle();

        if (existing) {
        throw new Error(
            "A chapter with this title already exists."
        );
        }

      const storagePath =
        `${subject.degree}/${subject.year}/${subject.id}/${slug}.pdf`;

      const { error: uploadError } =
        await supabase.storage
          .from("education-resources")
          .upload(
            storagePath,
            file,
            {
              upsert: false,
            }
          );

      if (uploadError) {
        throw uploadError;
      }

      const { error: insertError } =
        await supabase
          .from("chapters")
          .insert({
            subject_id: subject.id,
            title,
            slug,
            storage_path: storagePath,
            is_free: isFree,
          });

      if (insertError) {
        throw insertError;
      }

      alert("Chapter uploaded successfully!");

      setTitle("");
      setFile(null);
      setSelectedSubjectId("");
      setIsFree(true);
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Upload failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-lg
      "
    >
      <div className="space-y-6">

        {/* Subject */}
        <div>
          <label className="mb-2 block font-medium">
            Subject
          </label>

          <select
            value={selectedSubjectId}
            onChange={(e) =>
              setSelectedSubjectId(
                e.target.value
              )
            }
            className="
              w-full
              rounded-xl
              border
              p-3
            "
          >
            <option value="">
              Select Subject
            </option>

            {subjects.map((subject) => (
              <option
                key={subject.id}
                value={subject.id}
              >
                {subject.degree} •{" "}
                {subject.year} •{" "}
                {subject.name}
              </option>
            ))}
          </select>
        </div>

        {/* Chapter Title */}
        <div>
          <label className="mb-2 block font-medium">
            Chapter Title
          </label>

          <input
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="
              w-full
              rounded-xl
              border
              p-3
            "
            placeholder="Chapter 1 - History"
          />
        </div>

        {/* PDF */}
        <div>
          <label className="mb-2 block font-medium">
            PDF File
          </label>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(
                e.target.files?.[0] ??
                  null
              )
            }
          />
        </div>

        {/* Free */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={isFree}
            onChange={(e) =>
              setIsFree(
                e.target.checked
              )
            }
          />

          <span>
            Free Chapter
          </span>
        </div>

        {/* Upload */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="
            rounded-xl
            bg-[#4c1711]
            px-6
            py-3
            text-white
            transition
            hover:bg-[#3a120d]
            disabled:opacity-50
          "
        >
          {loading
            ? "Uploading..."
            : "Upload Chapter"}
        </button>

      </div>
    </div>
  );
}