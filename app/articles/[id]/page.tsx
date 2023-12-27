import React from "react";
import content from "@/app/content/content";
import ArticlePage from "@/app/components/Articles/ArticlePage";

const Article = ({ params }: { params: { id: string } }) => {
  const article = content.articles.find((i) => i.id === parseInt(params.id));

  // Check if the project is found before rendering ProjectPage
  if (!article) {
    return <div>Project not found</div>;
  }

  return <ArticlePage {...article} />;
};

export default Article;
