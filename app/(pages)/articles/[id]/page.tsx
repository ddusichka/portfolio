import React from "react";
import content from "@/app/content/content";
import ArticlePage from "@/app/components/Articles/ArticlePage";

const Article = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const article = content.articles.find((i) => i.id === parseInt(params.id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticlePage {...article} />;
};

export default Article;
