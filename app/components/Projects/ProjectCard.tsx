import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = (
  proj: {
    name: string;
    path: string;
    dates: string;
    deployed: boolean;
    url: string;
    github: string;
    shortDescription: string;
    longDescription: string;
    cardPhoto: string;
    coverPhoto: string;
    skills: string[];
    details: React.ReactNode /* Probably it's own React component? */;
  },
  key: number
) => {
  return (
    <Link href={`/projects/${proj.path}`} key={key}>
      <div className="flex flex-col bg-offwhite rounded-lg p-4 h-full">
        <h1 className="text-xl mb-2">{proj.name}</h1>
        <Image src={proj.cardPhoto} alt="project" width={300} height={200} />
        <p className="mt-2">{proj.shortDescription}</p>
        <div className="flex gap-2 mt-2">
          {proj.skills.map((s) => (
            <p className="bg-slate-200 px-2 laptop:px-4 rounded-md" key={s}>
              {s}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
