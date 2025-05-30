import Link from "next/link";
import ExperienceCard from "../components/Experience/ExperienceCard";
import content from "../content/content";

export default function Experience() {
  const academics = content.experience.filter((e) => e.category == "Education");
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
        <button className="rounded-md text-white px-4 bg-[#5e1f35] text-xl">
          <Link href="/Dessislava_Dusichka_Resume.pdf" target="_blank">
            Resume
          </Link>
        </button>
      </div>
      <div className="mt-4 space-y-4">
        <h3 className={styles.header}>Education</h3>
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
