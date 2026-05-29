"use client";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

import { useEffect, useState, useRef } from "react";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  pdfUrl: string;
  watermark: string;
}

function WatermarkedPage({
  pageNumber,
  watermark,
}: {
  pageNumber: number;
  watermark: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  return (
    <Page
      pageNumber={pageNumber}
      width={900}
      renderTextLayer={false}
      renderAnnotationLayer={false}
      canvasRef={canvasRef}
      onRenderSuccess={() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        ctx.save();

        ctx.translate(
          canvas.width / 2,
          canvas.height / 2
        );

        ctx.rotate((-30 * Math.PI) / 180);

        ctx.font =
          "bold 40px Arial";

        ctx.fillStyle =
          "rgba(0,0,0,0.12)";

        ctx.textAlign = "center";

        ctx.fillText(
          watermark,
          0,
          0
        );

        ctx.restore();
      }}
    />
  );
}

export default function PdfViewer({
  pdfUrl,
  watermark,
}: PdfViewerProps) {
  const [numPages, setNumPages] =
    useState(0);

  useEffect(() => {
    const disableContextMenu = (
      e: MouseEvent
    ) => {
      e.preventDefault();
    };

    const disableDrag = (
      e: DragEvent
    ) => {
      e.preventDefault();
    };

    document.addEventListener(
      "contextmenu",
      disableContextMenu
    );

    document.addEventListener(
      "dragstart",
      disableDrag
    );

    return () => {
      document.removeEventListener(
        "contextmenu",
        disableContextMenu
      );

      document.removeEventListener(
        "dragstart",
        disableDrag
      );
    };
  }, []);

  return (
    <div className="bg-[#f8f8f8] p-6 select-none">
      <Document
        file={pdfUrl}
        onLoadSuccess={({ numPages }) =>
          setNumPages(numPages)
        }
        loading={
          <div className="py-20 text-center">
            Loading PDF...
          </div>
        }
      >
        {Array.from(
          { length: numPages },
          (_, index) => (
            <div
              key={index}
              className="mb-8 flex justify-center"
            >
              <WatermarkedPage
                pageNumber={index + 1}
                watermark={watermark}
                />
            </div>
          )
        )}
      </Document>
    </div>
  );
}