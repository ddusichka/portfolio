import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleCard = (
  article: {
    title: string;
    subtitle: string;
    issue: string;
    id: number;
    date: string;
    summary: string;
    cardImage: string;
    articlepdf: string;
  },
  key: number
) => {
  return (
    <Link href={`/articles/${article.id}`} key={key}>
      <div className="flex flex-col bg-offwhite rounded-lg p-4 hover:scale-[1.05] transition-transform duration-200 ease-in-out hover:bg-gray-100">
        <h1 className="text-xl mb-2">{article.issue}</h1>
        <Image src={article.cardImage} alt="project" width={800} height={400} />
      </div>
    </Link>
  );
};

export default ArticleCard;
