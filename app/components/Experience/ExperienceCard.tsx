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
    <div className="EXPERIENCE-CARD flex-col bg-offwhite rounded-lg drop-shadow-md py-3 px-4 ">
      <div
        className="EXPERIENCE-CARD-HEADER cursor-pointer flex tablet:flex-row tablet:flex-wrap mobile:flex-col tablet:items-center items-start justify-between"
        onClick={toggleOpen}
      >
        <div className="EXPERIENCE-CARD-POSITION flex flex-wrap pr-4 items-end">
          <div className="font-bold text-md tablet:text-lg pr-1">
            {experience.position}
          </div>
          <div className="text-[#B21654] font-bold text-md tablet:text-lg">
            <span className="text-black font-normal pr-1">at</span>
            {experience.company}
          </div>
        </div>

        <div className="EXPERIENCE-CARD-TIME-PLACE flex justify-between gap-4 items-center w-full tablet:w-auto">
          <p>{experience.location}</p>
          <div className="laptop:bg-gray-300 laptop:w-px laptop:h-5"></div>
          <div>{experience.date}</div>
          <div className=" mt-1 tablet:mt-0">
            {open ? <CloseIcon /> : <ExpandIcon />}
          </div>
        </div>
      </div>

      {/* DROPDOWN-CONTENT */}
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

            {/* <img src={experience.image} alt={experience.company} /> */}
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
