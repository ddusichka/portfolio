import Link from "next/link";
import ExperienceCard from "../components/ExperienceCard";
import content from "../content/content";

export default function Experience() {
  return (
    <div className="flex justify-center my-4 laptop:my-8">
      <div className="w-[90%] laptop:w-[75%]">
        <div className="flex justify-between">
          <h1>Experience</h1>
          <button className="main-button">
            <Link
              href="https://docs.google.com/document/d/1yJ2O1Hyh2k3NJzMocFL1oOv3mLyq74pcyVgblmbMN-0/edit"
              target="_blank"
            >
              Resume
            </Link>
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {content.experience.map((exp, index) => (
            <ExperienceCard {...exp} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
