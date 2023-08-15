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
      <div
        className={`flex bg-offwhite rounded-lg drop-shadow-md p-4 h-full ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } gap-4`}
      >
        <div className="flex-none">
          <Image src={coverPhoto} alt="project" width={500} height={500} />
        </div>
        <div className="flex-1 ml-4 text-lg">
          <h1 className="text-3xl my-2">{name}</h1>
          <p className="text-xl my-2">{description}</p>
          <div className="flex gap-2">
            {skills.map((s) => (
              <p className="bg-slate-200 px-4 rounded-md" key={s}>
                {s}
              </p>
            ))}
          </div>
          <div className="mt-auto">
            <button className="main-button mt-10">View project</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectFeature;
