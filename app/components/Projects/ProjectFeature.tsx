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
        className={`flex flex-col tablet:flex-row bg-offwhite rounded-lg drop-shadow-md p-4 ${
          index % 2 === 0 ? "tablet:flex-row" : "tablet:flex-row-reverse"
        } gap-4 flex-1`}
      >
        <div className="flex-none">
          <Image src={coverPhoto} alt="project" width={500} height={400} />
        </div>
        <div className="flex-1 ml-4 text-lg">
          <h1 className="text-xl tablet:text-3xl my-2">{name}</h1>
          <p className="text-lg tablet:text-xl my-6">{description}</p>
          <div className="flex gap-2 mt-6">
            {skills.map((s) => (
              <p className="bg-slate-200 px-2 laptop:px-4 rounded-md" key={s}>
                {s}
              </p>
            ))}
          </div>
          <div className="my-4 laptop:mt-8">
            <button className="main-button">View project</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectFeature;
