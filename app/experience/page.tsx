import Link from "next/link";
import ExperienceCard from "../components/Experience/ExperienceCard";
import content from "../content/content";

export default function Experience() {
  const academics = content.experience.filter((e) => e.category == "Academics");
  const campusExperiences = content.experience.filter(
    (e) => e.category == "Campus Experience"
  );
  const workExperiences = content.experience.filter(
    (e) => e.category == "Work Experience"
  );

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
        {academics.map((exp, index) => (
          <ExperienceCard {...exp} key={index} />
        ))}

        <h3 className={styles.header}>Work Experience</h3>
        {workExperiences.map((exp, index) => (
          <ExperienceCard {...exp} key={index} />
        ))}

        <h3 className={styles.header}>Campus Experience</h3>
        {campusExperiences.map((exp, index) => (
          <ExperienceCard {...exp} key={index} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  header: "",
};
