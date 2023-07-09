import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = (proj: {
  name: string;
  path: string;
  dates: string;
  url: string;
  description: string;
  coverPhoto: string;
  skills: string[];
  details: string /* Probably it's own React component? */;
}) => {
  return (
    <Link href={`/projects/${proj.path}`}>
      <div className="flex flex-col bg-gray-100 rounded-lg p-4 h-full">
        <Image src={proj.coverPhoto} alt="project" width={300} height={200} />
        <h1 className="text-lg font-bold mt-2">{proj.name}</h1>
        <p>{proj.description}</p>
        <div className="flex mt-3">
          {proj.skills.map((skill, index) => (
            <div className="bg-slate-600 text-white mr-5 rounded px-3">
              Skill
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
