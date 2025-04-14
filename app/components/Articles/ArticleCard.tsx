import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Article, categoryColors } from "@/app/content/articles";

const ArticleCard = (article: Article) => {
  return (
    <div className="group h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col tablet:flex-row">
      <Image
        src={article.cardImage || "/images/article-placeholder.jpg"}
        alt={article.title}
        width={400}
        height={300}
        className="w-full tablet:w-1/4 tablet:hover:scale-110 transition-transform duration-700"
      />
      <div className="p-4 laptop:p-8 flex flex-col">
        <div className="flex justify-between">
          <h3 className="font-bold text-md laptop:text-2xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">
            {article.title}
            {article.subtitle ? `: ${article.subtitle}` : ""}
          </h3>
        </div>
        <div className="flex flex-col tablet:flex-row justify-start tablet:justify-between text-sm tablet:text-md gap-2 tablet:gap-4 laptop:py-2 mb-2 tablet:mb-4">
          <div className="flex justify-between gap-4 items-center">
            <span className="items-center px-3 py-1 rounded-full font-medium bg-purple-100 text-purple-800">
              {article.issue}
            </span>
            <span className=" text-gray-500">{article.date}</span>
          </div>
          <p
            className={`w-fit px-4 py-1 rounded-full font-medium ${
              categoryColors[article.category]
            } text-black`}
          >
            {article.category}
          </p>
        </div>
        <p className="line-clamp-4">{article.summary}</p>
        <Link
          href={`/articles/${article.id}`}
          className="text-sm mt-4 laptop:mt-auto font-medium text-purple-600 hover:text-purple-900 transition-colors duration-300"
        >
          <Button>Read Online</Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
