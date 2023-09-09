import Link from "next/link";
import ExperienceCard from "../components/Experience/ExperienceCard";
import content from "../content/content";

export default function Experience() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Experience</h1>
        <button className="secondary-button text-xl">
          <Link href="/Dessislava_Dusichka_Resume.pdf" target="_blank">
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
  );
}
