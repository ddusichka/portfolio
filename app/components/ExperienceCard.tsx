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
        className="EXPERIENCE-CARD-HEADER cursor-pointer flex tablet:flex-row tablet:flex-wrap mobile:flex-col tablet:items-center mobile:items-start justify-between"
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

        <div className="EXPERIENCE-CARD-TIME-PLACE flex flex-row flex-wrap gap-6 tablet:pr-10">
          <div className="flex text-black laptop:text-18 gap-2 tablet:gap-3 items-center">
            <div>{experience.location}</div>
            <div className="bg-gray-300 w-px h-4 laptop:h-5 "></div>
            <div>{experience.date}</div>
          </div>
        </div>

        <div className="EXPAND-ICON absolute flex w-full justify-end pr-8 pt-7 tablet:pt-0">
          {open ? <CloseIcon /> : <ExpandIcon />}
        </div>
      </div>

      {/* DROPDOWN-CONTENT */}
      <div
        className={
          open
            ? "overflow-hidden max-h-96 transition-[max-height] duration-150 ease-in"
            : "overflow-hidden max-h-0 transition-[all]"
        }
      >
        <div className="EXPERIENCE-DETAILS pt-4 mt-2 border-t border-grey">
          <ul className="list-disc pl-4 marker:text-grey">
            {experience.bullets.map((bullet, index) => {
              return <li key={index}>{bullet}</li>;
            })}
          </ul>

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
