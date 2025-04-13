import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/content/projects";

interface ProjectProps {
  project: Project;
}

const ProjectFeature: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.path}`}>
      <div className="bg-offwhite rounded-lg drop-shadow-md p-4 flex flex-col h-full hover:scale-[1.05] transition-transform duration-200 ease-in-out hover:bg-gray-100">
        <h1 className="text-xl tablet:text-3xl my-2">{project.name}</h1>
        <div className="flex-grow">
          <p className="text-lg tablet:text-xl">{project.shortDescription}</p>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {project.skills.map((s) => (
            <p className="bg-slate-200 px-2 rounded-md" key={s}>
              {s}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectFeature;
