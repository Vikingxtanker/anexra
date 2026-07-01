"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PdfPreview = dynamic(() => import("@/components/pdf-preview"), {
  ssr: false,
  loading: () => (
    <p className="text-sm font-medium text-[#87565b]">
      Loading certificate preview...
    </p>
  ),
});

type CertificatePreviewDialogProps = {
  courseId: string;
  studentName: string;
  children: ReactNode;
};

export default function CertificatePreviewDialog({
  courseId,
  studentName,
  children,
}: CertificatePreviewDialogProps) {
  const [open, setOpen] = useState(false);
  const [previewObjectUrl, setPreviewObjectUrl] = useState<string | null>(null);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const encodedCourseId = encodeURIComponent(courseId);
  const previewUrl = "/api/certificate/download?courseId=" + encodedCourseId;
  const downloadUrl =
    "/api/certificate/download?courseId=" + encodedCourseId + "&download=1";

  useEffect(() => {
    if (!open) {
      return;
    }

    let objectUrl: string | null = null;
    let cancelled = false;

    // async function loadPreview() {
    //   try {
    //     const response = await fetch(previewUrl, {
    //       credentials: "same-origin",
    //       cache: "no-store",
    //     });

    //     if (!response.ok) {
    //       throw new Error("Unable to load certificate preview.");
    //     }

    //     const blob = await response.blob();

    //     if (cancelled) {
    //       return;
    //     }

    //     objectUrl = URL.createObjectURL(blob);
    //     setPreviewObjectUrl(objectUrl);
    //   } catch {
    //     if (!cancelled) {
    //       setPreviewError("Unable to load certificate preview.");
    //     }
    //   }
    // }
    async function loadPreview() {
      try {
        const response = await fetch(previewUrl, {
          credentials: "same-origin",
          cache: "no-store",
        });

        console.log("Status:", response.status);
        console.log("Content-Type:", response.headers.get("content-type"));

        const arrayBuffer = await response.arrayBuffer();

        console.log("ArrayBuffer byteLength:", arrayBuffer.byteLength);

        const blob = new Blob([arrayBuffer], {
          type: "application/pdf",
        });

        console.log("Blob size:", blob.size);

        if (blob.size === 0) {
          throw new Error("Server returned an empty PDF.");
        }

        if (cancelled) {
          return;
        }

        objectUrl = URL.createObjectURL(blob);
        setPreviewObjectUrl(objectUrl);
      } catch (error) {
        console.error(error);

        if (!cancelled) {
          setPreviewError("Unable to load certificate preview.");
        }
      }
    }

    setPreviewError(null);
    setPreviewObjectUrl(null);
    loadPreview();

    return () => {
      cancelled = true;

      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [open, previewUrl]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-5xl gap-6 bg-white p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#4c1711]">
            Certificate Preview
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-hidden rounded-xl border border-[#d8c7c9] bg-[#f4efee] p-3">
          <div className="flex aspect-[1.414/1] w-full items-center justify-center overflow-auto rounded-lg border border-[#d8c7c9] bg-white">
            {previewObjectUrl ? (
              <PdfPreview file={previewObjectUrl} />
            ) : (
              <p className="text-sm font-medium text-[#87565b]">
                {previewError ?? "Loading certificate preview..."}
              </p>
            )}
          </div>
        </div>

        <a
          href={downloadUrl}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#4c1711] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#38100d]"
        >
          Download PDF
        </a>
      </DialogContent>
    </Dialog>
  );
}
