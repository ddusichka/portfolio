"use client";
import React from "react";
import { pdfjs, Document, Page } from "react-pdf";

const ProjectPage = (proj: {
  title: string;
  subtitle: string;
  issue: string;
  id: number;
  date: string;
  summary: string;
  cardImage: string;
  articlepdf: string;
}) => {
  return (
    <div className="">
      <h1>{proj.issue}</h1>
      {/* <h3>
        {proj.title}: {proj.subtitle}
      </h3> */}
      <p>{proj.summary}</p>
      <div className="flex flex-col items-center">
        <iframe
          src={`${proj.articlepdf}/#toolbar=0&view=fitW`}
          className="w-full tablet:w-full h-screen tablet:h-[700px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectPage;
