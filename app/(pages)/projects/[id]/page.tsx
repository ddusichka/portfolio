import React from "react";
import ProjectPage from "@/app/components/Projects/ProjectPage";
import content from "@/app/content/content";

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = content.projects.find((i) => i.path === id);
  // Check if the project is found before rendering ProjectPage
  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectPage {...project} />;
}
