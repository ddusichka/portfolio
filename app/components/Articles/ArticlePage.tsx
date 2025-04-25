"use client";
import React from "react";
import Image from "next/image";
import { Article, categoryColors } from "@/app/content/articles";

const ArticlePage = (article: Article) => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[100%] tablet:max-w-[800px]">
        <div className="flex flex-col tablet:flex-row mb-4">
          <div className="tablet:w-4/5 tablet:mr-12">
            <h2>{article.title}</h2>
            <h3>{article.subtitle}</h3>
            <div className="flex flex-col tablet:flex-row justify-start tablet:justify-between text-sm tablet:text-md gap-2 tablet:gap-4 laptop:py-2 mb-2 tablet:mb-4">
              <div className="flex justify-between gap-4 items-center">
                <span className="items-center px-3 py-1 rounded-full font-medium bg-purple-100 text-purple-800">
                  {article.issue}
                </span>
                <span className=" text-gray-500">{article.date}</span>
              </div>
              <p
                className={`w-fit px-4 py-1 rounded-md font-medium ${
                  categoryColors[article.category]
                } text-black`}
              >
                {article.category}
              </p>
            </div>
            <p className="mt-2 mb-4 text-lg">{article.summary}</p>
          </div>

          <div className="tablet:w-1/3">
            <Image
              src={article.cardImage}
              alt={article.title}
              width={200}
              height={300}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <iframe
            src={`${article.articlepdf}/#toolbar=0&view=fitW`}
            className="w-full h-screen tablet:h-[700px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
