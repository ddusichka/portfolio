"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import content from "./content/content";
import TypingEffect from "./components/Home/TypingDescriptions";
import ExperienceSnapshot from "./components/Experience/ExperienceSnapshot";
import ProjectFeature from "./components/Projects/TextBasedProjectFeature";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center my-4 laptop:my-8">
        <div className="w-[90%]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col tablet:flex-row">
              <div className="w-full tablet:w-1/2 tablet:mt-16 text-2xl py-4 laptop:py-8 pr-4">
                <h1 className="text-4xl tablet:text-6xl mb-4 tablet:mb-6">
                  {"Hi, I'm Dessy!"}
                </h1>
                <h3 className="text-3xl tablet:text-4xl">
                  student, developer, and{" "}
                </h3>
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
              <h2 className="text-2xl tablet:text-3xl">Recently</h2>
              <div className="mt-2 flex flex-col tablet:flex-row space-y-4 tablet:space-y-0 tablet:space-x-4">
                {content.experience.map((exp, index) => {
                  if (
                    exp.category != "Education" &&
                    exp.date.includes("2025")
                  ) {
                    return (
                      <motion.div
                        key={index}
                        className="flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.6, duration: 0.4 }}
                      >
                        <ExperienceSnapshot {...exp} />
                      </motion.div>
                    );
                  }
                  return null; // Add this to prevent implicit return of undefined
                })}
              </div>
              <div className="flex justify-end">
                <Link href="/experience">
                  <Button className="text-xl mt-4 px-6 py-6">
                    See all experiences
                  </Button>
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
                        <ProjectFeature project={proj} />
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
          {/* <ClickableDesk /> */}
        </div>
      </div>
    </div>
  );
}
