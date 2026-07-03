"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfPreview({ file }: { file: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    if (!containerRef.current) return;

    setWidth(containerRef.current.clientWidth);
  };

  useEffect(() => {
    updateWidth();

    const observer = new ResizeObserver(updateWidth);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
    >
      <Document
        file={file}
        onLoadSuccess={updateWidth}   // <-- important
      >
        {width > 0 && (
          <Page
            pageNumber={1}
            width={width}
            onRenderSuccess={updateWidth}   // <-- important
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        )}
      </Document>
    </div>
  );
}