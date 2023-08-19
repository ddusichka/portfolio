import React from "react";
import ProjectPage from "@/app/components/Projects/ProjectPage";
import content from "@/app/content/content";

const Project = ({ params }: { params: { id: string } }) => {
  const project = content.projects.find((i) => i.path === params.id);
  // Check if the project is found before rendering ProjectPage
  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectPage {...project} />;
};

export default Project;
