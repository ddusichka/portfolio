"use client";
import React, { useState } from "react";
import {
  MdExpandMore as ExpandIcon,
  MdExpandLess as CloseIcon,
} from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

const ExperienceCard = (experience: {
  position: string;
  company: string;
  location: string;
  image: string;
  date: string;
  linkText: string;
  linkURL: string;
  bullets: string[];
  showMore: boolean;
  details?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleSeeMore = () => {
    setSeeMore((prevSeeMore) => !prevSeeMore);
  };

  return (
    <div className="flex-col bg-offwhite rounded-lg drop-shadow-md py-3 px-4 ">
      <div
        className="cursor-pointer flex tablet:flex-row tablet:flex-wrap mobile:flex-col tablet:items-center items-start justify-between"
        onClick={toggleOpen}
      >
        <div className="flex-1 flex flex-col justify-center">
          <div className="font-bold text-md tablet:text-lg pr-2">
            <p className="whitespace-normal">
              {experience.position}{" "}
              <span className="text-black font-normal pr-1">at</span>
              <span className="text-[#B21654] font-bold text-md tablet:text-xl">
                {experience.company}
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-4 items-center w-full tablet:w-auto">
          <div className="flex gap-2">
            <p>{experience.location}</p>
            <div className="bg-gray-300 w-px h-5"></div>
            <div>{experience.date}</div>
          </div>
          <div className="mt-1 tablet:mt-0">
            {open ? <CloseIcon /> : <ExpandIcon />}
          </div>
        </div>
      </div>

      <div
        className={
          open ? "experience-details-open" : "experience-details-closed"
        }
      >
        <div className="EXPERIENCE-DETAILS pt-4 mt-2 border-t border-grey">
          <div className="flex">
            <ul className="list-disc ml-2 pl-4 marker:text-grey">
              {experience.bullets.map((bullet, index) => {
                return (
                  <li className="pr-4" key={index}>
                    <p className="ml-2">{bullet}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {seeMore && experience.details}

          <div className="EXPERIENCE-BUTTONS text-black text-md pt-4 pb-1">
            {experience.showMore && (
              <button className="main-button mr-4" onClick={toggleSeeMore}>
                {seeMore ? "See less" : "See more"}
              </button>
            )}
            <button className="outline-button">
              <Link href={experience.linkURL} target="_blank">
                <div className="flex items-center gap-2">
                  {experience.linkText}
                  <AiOutlineLink />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
