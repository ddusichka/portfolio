import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  name: string;
  path: string;
  description: string;
  coverPhoto: string;
  skills: string[];
  index: number;
}

const ProjectFeature: React.FC<ProjectProps> = ({
  name,
  path,
  description,
  coverPhoto,
  skills,
  index,
}) => {
  return (
    <Link href={`/projects/${path}`}>
      <div className="bg-offwhite rounded-lg drop-shadow-md p-4 flex flex-col h-full">
        <h1 className="text-xl tablet:text-3xl my-2">{name}</h1>
        <div className="flex-grow">
          <p className="text-lg tablet:text-xl">{description}</p>
        </div>
        <div className="flex gap-2 mt-4">
          {skills.map((s) => (
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
