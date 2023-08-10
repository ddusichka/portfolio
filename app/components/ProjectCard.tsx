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
    coverPhoto: string;
    skills: string[];
    details: React.ReactNode /* Probably it's own React component? */;
  },
  key: number
) => {
  return (
    <Link href={`/projects/${proj.path}`} key={key}>
      <div className="flex flex-col bg-gray-100 rounded-lg p-4 h-full">
        <Image src={proj.coverPhoto} alt="project" width={300} height={200} />
        <h1 className="text-lg mt-2">{proj.name}</h1>
        <p>{proj.shortDescription}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
