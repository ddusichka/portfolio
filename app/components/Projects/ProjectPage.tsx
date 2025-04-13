"use client";
import React from "react";
import Link from "next/link";
import { Project } from "@/app/content/projects";

const ProjectPage = (proj: Project) => {
  return (
    <div>
      <div className="laptop:flex laptop:justify-between ">
        <h1>
          {proj.emoji} {proj.name}
        </h1>
        <div className="mt-4 text-lg">
          <p>{proj.dates}</p>
        </div>
      </div>
      <p className="text-lg my-2">{proj.longDescription}</p>

      <div className="mt-2 laptop:flex gap-4 justify-between">
        <div className="flex mt-2 gap-2">
          {proj.skills.map((s) => (
            <p
              // className="bg-slate-400 text-white py-1 px-2 laptop:px-4 rounded-md"
              className="text-[#ac3a4a] font-bold text-lg underline underline-offset-4	 decoration-slate-400 mr-2"
              key={s}
            >
              {s}
            </p>
          ))}
        </div>
        <div className="mt-4 laptop:mt-0">
          {proj.deployed && (
            <a href={proj.url} target="_blank">
              <button className="main-button mr-4 text-lg">
                Try {proj.name}
              </button>
            </a>
          )}
          {proj.github && (
            <a href={proj.github} target="_blank">
              <button className="outline-button text-lg">
                See source code
              </button>
            </a>
          )}
        </div>
      </div>
      {proj.coverPhotos && (
        <div className="mt-4 flex flex-col tablet:flex-row justify-around gap-2">
          {proj.coverPhotos.map((photo) => {
            return (
              <div key={photo} className={styles.imageDiv}>
                <img
                  key={photo}
                  src={photo}
                  alt={proj.name}
                  className={styles.image}
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-4 text-lg">
        <h5 className="mb-2">👩🏻‍💻 Development</h5>
        <div className="flex-col space-y-4">{proj.details}</div>
      </div>

      <div className="mt-4 text-lg">
        {proj.future && (
          <div>
            <h5 className="mb-2">💡 Future Ideas</h5>
            <div className="flex-col space-y-4">{proj.future}</div>
          </div>
        )}
      </div>

      <Link href="/projects">
        <button className="outline-button mt-4">See all projects</button>
      </Link>
    </div>
  );
};

export default ProjectPage;

const styles = {
  imageDiv: "flex flex-col items-center",
  image: "object-cover w-full tablet:max-h-[600px]",
};
