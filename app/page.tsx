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
        <div className="relative">
          <img src={"/edit.png"} alt="Banner" className="w-full" />

          <div className="absolute top-0 left-0 tablet:mt-16 text-2xl p-4 laptop:p-8">
            <h1 className="text-lg tablet:text-6xl mb-4 tablet:mb-6">
              {"Hi, I'm Dessy!"}
            </h1>
            <h3 className="text-lg tablet:text-4xl">
              student, developer, and{" "}
            </h3>
            <TypingEffect />
          </div>
        </div>
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
                <div className="flex-1" key={index}>
                  <ProjectFeature
                    name={proj.name}
                    path={proj.path}
                    description={proj.shortDescription}
                    coverPhoto={proj.coverPhoto}
                    skills={proj.skills}
                    index={index}
                  />
                </div>
              );
            }
            <div className="mt-2 grid gap-4 laptop:gap-8">
              {content.projects.map((proj, index) => {
                if (proj.featured) {
                  return (
                    <div className="flex-1" key={index}>
                      {" "}
                      {/* Added flex-1 class */}
                      <ProjectFeature
                        name={proj.name}
                        path={proj.path}
                        description={proj.shortDescription}
                        coverPhoto={proj.coverPhoto}
                        skills={proj.skills}
                        index={index}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </div>;
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
