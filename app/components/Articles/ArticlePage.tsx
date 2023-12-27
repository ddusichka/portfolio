"use client";
import React from "react";

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
  return (
    <div className="">
      <div className="flex flex-col tablet:flex-row">
        <div className="tablet:w-4/5 tablet:mr-6">
          <h2 className="text-3xl font-bold">{proj.title}</h2>
          <h2 className="text-2xl font-semibold mb-2">{proj.subtitle}</h2>
          <p className="mb-4 text-lg">{proj.summary}</p>
          <p className="text-gray-600 font-semibold text-lg">
            Written for NU Sci {proj.issue}, {proj.date}
          </p>
        </div>

        <div className="tablet:w-1/5">
          <img
            src={proj.cardImage}
            alt={proj.title}
            className="w-full max-h-96 mb-4"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <iframe
          src={`${proj.articlepdf}/#toolbar=0&view=fitW`}
          className="w-full tablet:w-full h-screen tablet:h-[700px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ArticlePage;
