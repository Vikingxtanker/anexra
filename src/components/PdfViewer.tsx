"use client";

import {
  useEffect,
  useState,
  useRef,
} from "react";

import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  pdfUrl: string;
  watermark: string;
}

function WatermarkedPage({
  pageNumber,
  watermark,
  width,
}: {
  pageNumber: number;
  watermark: string;
  width: number;
}) {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  return (
    <Page
      pageNumber={pageNumber}
      width={width}
      renderTextLayer={false}
      renderAnnotationLayer={false}
      canvasRef={canvasRef}
      onRenderSuccess={() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx =
          canvas.getContext("2d");

        if (!ctx) return;

        const fontSize =
          canvas.width < 500
            ? 16
            : 36;

        ctx.save();

        ctx.translate(
          canvas.width / 2,
          canvas.height / 2
        );

        ctx.rotate(
          (-30 * Math.PI) / 180
        );

        ctx.font = `bold ${fontSize}px Arial`;

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

  const [pageWidth, setPageWidth] =
    useState(900);

  const containerRef =
    useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current)
        return;

      const width =
        containerRef.current
          .clientWidth - 32;

      setPageWidth(
        Math.min(width, 900)
      );
    };

    updateWidth();

    window.addEventListener(
      "resize",
      updateWidth
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateWidth
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        w-full
        bg-[#f8f8f8]
        p-2
        sm:p-4
        md:p-6
        select-none
      "
    >
      <Document
        file={pdfUrl}
        onLoadSuccess={({
          numPages,
        }) =>
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
              className="
                mb-8
                flex
                justify-center
              "
            >
              <WatermarkedPage
                pageNumber={
                  index + 1
                }
                watermark={
                  watermark
                }
                width={pageWidth}
              />
            </div>
          )
        )}
      </Document>
    </div>
  );
}