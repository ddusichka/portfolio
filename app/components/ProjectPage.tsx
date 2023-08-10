"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageGallery from "react-image-gallery";

const ProjectPage = (proj: {
  name: string;
  emoji: string;
  path: string;
  dates: string;
  deployed: boolean;
  url: string;
  github: string;
  shortDescription: string;
  longDescription: string;
  coverPhoto: string;
  photos: string[];
  skills: string[];
  details: React.ReactNode;
  future: React.ReactNode;
}) => {
  return (
    <div className="PROJECT flex justify-center my-4 laptop:my-8">
      <div className="w-[90%] laptop:w-[75%]">
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
          <div className="flex mt-2">
            {proj.skills.map((skill, index) => (
              <div
                className="text-[#AC3A4A] font-bold text-lg mr-6 rounded-lg"
                key={index}
              >
                {skill}
              </div>
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
            <a href={proj.github} target="_blank">
              <button className="outline-button text-lg">
                See source code
              </button>
            </a>
          </div>
        </div>
        {/* Buttons to visit project */}

        <div className="mt-4">
          {proj.photos.map((photo) => {
            return <img src={photo} alt={proj.name} />;
          })}
        </div>

        <div className="mt-4 text-lg">
          <h5 className="mb-2">👩🏻‍💻 Development</h5>
          <div className="flex-col space-y-4">{proj.details}</div>
        </div>

        <div className="mt-4 text-lg">
          {proj.future != null && (
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
    </div>
  );
};

export default ProjectPage;
