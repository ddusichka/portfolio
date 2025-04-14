import React from "react";
import Link from "next/link";
import { Article, categoryColors } from "@/app/content/articles";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ArticleCard = (article: Article) => {
  return (
    <div className="group h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col tablet:flex-row">
      <Image
        src={article.cardImage || "/images/article-placeholder.jpg"}
        alt={article.title}
        width={400}
        height={300}
        className="w-full tablet:w-1/4 lg:hover:scale-110 transition-transform duration-700"
      />
      <div className="p-8 flex flex-col">
        <div className="flex justify-between">
          <h3 className="font-bold text-2xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">
            {article.title}
            {article.subtitle ? `: ${article.subtitle}` : ""}
          </h3>
        </div>
        <div className="flex flex-col tablet:flex-row justify-start tablet:justify-between first-letter:flex-wrap gap-4 mb-4 ">
          <div className="flex justify-between gap-4 py-2 items-center">
            <span className="items-center px-3 py-1 rounded-full font-medium bg-purple-100 text-purple-800">
              {article.issue}
            </span>
            <span className=" text-gray-500">{article.date}</span>
          </div>
          <p
            className={`items-center px-4 py-1 rounded-full font-medium ${
              categoryColors[article.category]
            } text-black`}
          >
            {article.category}
          </p>
        </div>
        <p>{article.summary}</p>
        <Link
          href={`/articles/${article.id}`}
          className="text-sm mt-auto font-medium text-purple-600 hover:text-purple-900 transition-colors duration-300"
        >
          <Button>Read Online</Button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
