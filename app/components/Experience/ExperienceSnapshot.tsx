import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExperienceSnapshot = (experience: {
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
  return (
    <Link href="/experience">
      <div className="EXPERIENCE-SNAPSHOT flex bg-offwhite rounded-lg drop-shadow-md py-3 px-4">
        <div className="flex-1 flex flex-col justify-center">
          <div className="font-bold text-lg tablet:text-xl pr-12 tablet:pr-4">
            <p className="whitespace-normal">
              {experience.position}{" "}
              <span className="text-black font-normal pr-1">at</span>
              <span className="text-[#B21654] font-bold text-md tablet:text-xl">
                {experience.company}
              </span>
            </p>
          </div>
        </div>
        <div className="flex-none">
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
