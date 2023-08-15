import Image from "next/image";
import content from "./content/content";
import TypingEffect from "./components/TypingDescriptions";
import ExperienceSnapshot from "./components/ExperienceSnapshot";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import ProjectFeature from "./components/ProjectFeature";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="mt-16 text-2xl">
          <h1 className="text-6xl mb-6">{"Hi, I'm Dessy!"}</h1>
          <h3 className="text-4xl">student, developer, and </h3>
          <TypingEffect />
        </div>

        <Image src="/IMG_7605.jpeg" alt="logo" width={500} height={300} />
      </div>

      <div>
        <h2 className="text-3xl">Right now</h2>
        <div className="mt-2 grid grid-rows-3 gap-4 laptop:grid-rows-1 laptop:grid-cols-3 laptop:gap-8">
          {content.experience.map((exp, index) => {
            if (exp.date.includes("Present")) {
              return <ExperienceSnapshot {...exp} key={index} />;
            }
          })}
        </div>
        <div className="flex justify-end">
          <Link href="/experience">
            <button className="outline-button mt-4 float-right">
              See all experiences
            </button>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-3xl ">Featured projects</h2>
        <div className="mt-2 grid gap-4 laptop:gap-8">
          {content.projects.map((proj, index) => {
            if (proj.featured) {
              return (
                <ProjectFeature
                  key={index}
                  name={proj.name}
                  path={proj.path}
                  description={proj.shortDescription}
                  coverPhoto={proj.coverPhoto}
                  skills={proj.skills}
                  index={index}
                />
              );
            }
            return null; // Make sure to include a return statement here for non-featured projects
          })}
        </div>
        <div className="flex justify-end">
          <Link href="/projects">
            <button className="outline-button mt-4">See all projects</button>
          </Link>
        </div>
      </div>

      {/* <div>
          <Image
            src="/succulent.png"
            alt="succulent"
            width={100}
            height={100}
          />
        </div> */}
    </div>
  );
}
