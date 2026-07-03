"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfPreview({ file }: { file: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const resize = () => {
      if (!wrapperRef.current) return;

      const width = wrapperRef.current.getBoundingClientRect().width;

      console.log("Wrapper width:", width);

      // leave a little padding
      setPageWidth(width - 24);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-full overflow-auto"
    >
      {pageWidth > 0 && (
        <Document file={file}>
          <Page
            pageNumber={1}
            width={pageWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      )}
    </div>
  );
}