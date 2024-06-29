"use client";
import React, { useState } from "react";

const maxWidth = 800;

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

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[100%] tablet:max-w-[800px]">
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
          <iframe
            src={`${proj.articlepdf}/#toolbar=0&view=fitW`}
            className="w-full h-screen tablet:h-[700px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
