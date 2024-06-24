"use client";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type PDFFile = string | File | null;

const maxWidth = 800;
const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const ArticlePage = (proj: {
  title: string;
  subtitle: string;
  issue: string;
  id: number;
  date: string;
  summary: string;
  cardImage: string;
  articlepdf: string;
}) => {
  const [numPages, setNumPages] = useState<number>();

  // const onResize = useCallback<ResizeObserverCallback>((entries) => {
  //   const [entry] = entries;

  //   if (entry) {
  //     setContainerWidth(entry.contentRect.width);
  //   }
  // }, []);

  // useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <div className="flex justify-center">
      <div
        className="w-full"
        style={{
          maxWidth: window.innerWidth >= 768 ? `${maxWidth}px` : "100%",
        }}
      >
        {" "}
        <div className="flex flex-col tablet:flex-row mb-4">
          <div className="tablet:w-4/5 tablet:mr-12">
            <h2>{proj.title}</h2>
            <h3>{proj.subtitle}</h3>
            <p className="mt-2 mb-4 text-lg">{proj.summary}</p>
            <p className="text-gray-600 font-semibold text-lg mb-2">
              Written for NU Sci {proj.issue}, {proj.date}
            </p>
          </div>

          <div className="tablet:w-1/3">
            <img src={proj.cardImage} alt={proj.title} className="w-full" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Document
            file={proj.articlepdf}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={
                  window.screen.width
                    ? Math.min(window.screen.width, maxWidth)
                    : maxWidth
                }
              />
            ))}
          </Document>
          {/* <iframe
          src={`${proj.articlepdf}/#toolbar=0&view=fitW`}
          className="w-full tablet:w-full h-screen tablet:h-[700px]"
        ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
