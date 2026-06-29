"use client";

import type { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CertificatePreviewDialogProps = {
  courseId: string;
  courseTitle: string;
  children: ReactNode;
};

export default function CertificatePreviewDialog({
  courseId,
  courseTitle,
  children,
}: CertificatePreviewDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-3xl gap-6 bg-white p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#4c1711]">
            Certificate Preview
          </DialogTitle>
        </DialogHeader>

        <div className="rounded-xl border border-[#d8c7c9] bg-[#f4efee] p-4">
          <div className="aspect-[1.414/1] rounded-lg border-4 border-[#4c1711] bg-white p-6 shadow-sm">
            <div className="flex h-full flex-col items-center justify-center border border-[#d8c7c9] px-8 text-center">
              <p className="text-sm font-semibold tracking-[0.35em] text-[#87565b]">
                ANEXRA
              </p>

              <h3 className="mt-5 text-3xl font-bold text-[#4c1711]">
                Certificate of Completion
              </h3>

              <p className="mt-6 text-sm text-[#87565b]">
                This certificate is proudly presented for completing
              </p>

              <p className="mt-4 max-w-xl text-2xl font-semibold text-[#4c1711]">
                {courseTitle}
              </p>

              <div className="mt-10 h-px w-40 bg-[#4c1711]" />

              <p className="mt-3 text-xs text-[#87565b]">
                Authorized Signatory
              </p>
            </div>
          </div>
        </div>

        <a
          href={`/api/certificate/download?courseId=${encodeURIComponent(
            courseId,
          )}`}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#4c1711] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#38100d]"
        >
          Download PDF
        </a>
      </DialogContent>
    </Dialog>
  );
}