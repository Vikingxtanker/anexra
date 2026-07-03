"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfPreview({ file }: { file: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);

  const pdfPageSize = useRef({
    width: 0,
    height: 0,
  });

  // 👇 THIS IS OUTSIDE useEffect
  const updateScale = () => {
    if (!containerRef.current) return;

    const { width: pdfWidth, height: pdfHeight } = pdfPageSize.current;

    if (!pdfWidth || !pdfHeight) return;

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const scaleX = containerWidth / pdfWidth;
    const scaleY = containerHeight / pdfHeight;

    setScale(Math.min(scaleX, scaleY));
  };

  useEffect(() => {
    const observer = new ResizeObserver(updateScale);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center overflow-hidden"
    >
      <Document
        file={file}
        onLoadSuccess={async (pdf) => {
          const page = await pdf.getPage(1);

          const viewport = page.getViewport({ scale: 1 });

          pdfPageSize.current = {
            width: viewport.width,
            height: viewport.height,
          };

          updateScale();
        }}
      >
        <Page
            pageNumber={1}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}