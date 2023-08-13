import Image from "next/image";
import content from "./content/content";
import TypingEffect from "./components/TypingDescriptions";
import ExperienceSnapshot from "./components/ExperienceSnapshot";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="flex justify-center my-4 laptop:my-8">
      <div className="w-[90%] laptop:w-[75%]">
        <div className="flex justify-between">
          <div className="mt-16 text-2xl">
            <h1 className="text-6xl mb-6">{"Hi, I'm Dessy!"}</h1>
            <h3 className="text-3xl">student, developer, and </h3>
            <TypingEffect />
          </div>

          <Image src="/dessy.jpeg" alt="logo" width={300} height={300} />
        </div>

        <div>
          <h2 className="text-xl">Currently...</h2>
          <div className="mt-2 grid grid-rows-3 gap-4 laptop:grid-rows-1 laptop:grid-cols-3 laptop:gap-8">
            {content.experience.map((exp, index) => {
              if (exp.date.includes("Present")) {
                return <ExperienceSnapshot {...exp} key={index} />;
              }
            })}
          </div>
          <Link href="/experience">
            <button className="outline-button mt-4 float-right">
              See all experiences
            </button>
          </Link>
        </div>

        <div>
          <h2 className="mt-10 text-xl">Featured Projects</h2>
          <div className="mt-2 grid grid-rows-3 gap-4 laptop:grid-rows-1 laptop:grid-cols-3 laptop:gap-8">
            {content.projects.map((proj, index) => {
              if (proj.featured) {
                return <ProjectCard {...proj} key={index} />;
              }
            })}
          </div>
          <Link href="/projects">
            <button className="outline-button mt-4 float-right">
              See all projects
            </button>
          </Link>
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
    </div>
  );
}
