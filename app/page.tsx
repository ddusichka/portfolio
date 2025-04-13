import content from "./content/content";
import TypingEffect from "./components/Home/TypingDescriptions";
import ExperienceSnapshot from "./components/Experience/ExperienceSnapshot";
import Link from "next/link";
import Image from "next/image";
import ProjectFeature from "./components/Projects/TextBasedProjectFeature";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col tablet:flex-row">
        <div className="w-full tablet:w-1/2 tablet:mt-16 text-2xl py-4 laptop:py-8 pr-4">
          <h1 className="text-4xl tablet:text-6xl mb-4 tablet:mb-6">
            {"Hi, I'm Dessy!"}
          </h1>
          <h3 className="text-3xl tablet:text-4xl">student, developer, and </h3>
          <TypingEffect />
        </div>
        <div className="w-full tablet:w-1/2 flex justify-center tablet:justify-end">
          <Image
            src={"/profile.png"}
            alt="Banner"
            className="max-w-full"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl tablet:text-3xl">Currently</h2>
        <div className="mt-2 flex flex-col tablet:flex-row space-y-4 tablet:space-y-0 tablet:space-x-4">
          {content.experience.map((exp, index) => {
            if (exp.date.includes("Present")) {
              return (
                <div key={index} className="flex-1">
                  <ExperienceSnapshot {...exp} key={index} />
                </div>
              );
            }
          })}
        </div>
        <div className="flex justify-end">
          <Link href="/experience">
            <button className="main-button mt-4">See all experiences</button>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-2xl tablet:text-3xl">Featured projects</h2>
        <div className="mt-2 flex flex-col tablet:flex-row gap-4 laptop:gap-4">
          {content.projects.map((proj, index) => {
            if (proj.featured) {
              return (
                <div className="flex-1" key={index}>
                  <ProjectFeature
                    name={proj.name}
                    path={proj.path}
                    description={proj.shortDescription}
                    coverPhoto={proj.cardPhoto}
                    skills={proj.skills}
                    index={index}
                  />
                </div>
              );
            }
          })}
        </div>

        <div className="flex justify-end">
          <Link href="/projects">
            <button className="main-button mt-4">See all projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
