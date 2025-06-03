import React from "react";
import content from "@/app/content/content";
import ArticlePage from "@/app/components/Articles/ArticlePage";

export default async function Article({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = content.articles.find((i) => i.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticlePage {...article} />;
}
