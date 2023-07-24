import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectPage = (proj: {
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
  details: React.ReactNode;
}) => {
  return (
    <div className="PROJECT flex justify-center my-4 laptop:my-8">
      <div className="w-[90%] laptop:w-[75%]">
        <h1>{proj.name}</h1>
        <p className="text-lg">{proj.longDescription}</p>
        {/* Skills section, incorporate dates too*/}
        {/* Buttons to visit project */}
        <div className="mt-4">
          {proj.deployed && (
            <a href={proj.url}>
              <button className="main-button mr-4">Try {proj.name}</button>
            </a>
          )}
          <a href={proj.github}>
            <button className="outline-button">See source code</button>
          </a>
        </div>
        {/* Sliding Gallery of Photos */}
        <div className="mt-4 w-[800px] h-[400px] relative">
          <Image src="/chatterbox.png" alt="project" fill />
        </div>
        <div className="mt-4 text-lg">
          <h5>Development</h5>
          <div className="flex-col space-y-4">{proj.details}</div>
        </div>
        <Link href="/projects">
          <button className="outline-button mt-4">See all projects</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
