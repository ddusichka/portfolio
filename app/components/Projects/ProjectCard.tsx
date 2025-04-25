import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = (
  proj: {
    name: string;
    path: string;
    dates: string;
    shortDescription: string;
    cardPhoto: string;
    skills: string[];
  },
  key: number
) => {
  return (
    <Link href={`/projects/${proj.path}`} key={key}>
      <div className="flex flex-col bg-offwhite rounded-lg p-4 h-full justify-between hover:scale-[1.05] transition-transform duration-200 ease-in-out hover:bg-gray-100">
        <h1 className="text-xl mb-2">{proj.name}</h1>
        <div className="flex justify-around">
          <Image src={proj.cardPhoto} alt="project" width={300} height={200} />
        </div>
        <div className="self-end">
          <p className="mt-2">{proj.shortDescription}</p>
          <div className="flex gap-2 mt-2">
            {proj.skills.map((s) => (
              <p
                className="bg-slate-200 px-2 laptop:px-4 rounded-md text-sm py-[2px]"
                key={s}
              >
                {s}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
