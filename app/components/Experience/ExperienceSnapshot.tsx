import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExperienceSnapshot = (experience: {
  position: string;
  shortPosition?: string;
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
  return (
    <Link href="/experience">
      <div className="flex bg-offwhite rounded-lg drop-shadow-md py-3 px-4 h-full hover:scale-[1.05] transition-transform duration-200 ease-in-out hover:bg-gray-100">
        <div className="flex-1 flex flex-col justify-center">
          <div className="font-bold text-lg tablet:text-xl pr-12 tablet:pr-4">
            <p className="whitespace-normal">
              {experience.shortPosition ?? experience.position}{" "}
              <span className="text-black font-normal pr-1">at</span>
            </p>
            <span className="text-[#B21654] font-bold text-md tablet:text-xl">
              {experience.company}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={experience.image}
            alt={experience.company}
            width={70}
            height={100}
          />
        </div>
      </div>
    </Link>
  );
};

export default ExperienceSnapshot;
