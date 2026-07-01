"use client";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type PdfPreviewProps = {
  file: string;
};

export default function PdfPreview({ file }: PdfPreviewProps) {
  return (
    <Document
      file={file}
      loading={
        <p className="text-sm font-medium text-[#87565b]">
          Loading certificate preview...
        </p>
      }
      error={
        <p className="text-sm font-medium text-[#87565b]">
          Unable to display certificate preview.
        </p>
      }
    >
      <Page
        pageNumber={1}
        width={820}
        renderTextLayer={false}
        renderAnnotationLayer={false}
      />
    </Document>
  );
}
