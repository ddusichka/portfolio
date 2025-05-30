import Icons from "../components/Icons";
import Skill from "../components/About/Skill";
import content from "../content/content";
import Link from "next/link";
import Hyperlink from "../components/Articles/Hyperlink";

export default function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col gap-2 text-lg ">
        <h1 className="my-2">About Me</h1>
        <p>
          Hi! I&apos;m Dessy, a recent Northeastern University graduate with a
          Bachelor of Science in Computer Science and Biology. I&apos;m
          currently a backend software engineer at HubSpot in Cambridge,
          Massachusetts. I&apos;m passionate about engineering efficient and
          user-friendly applications and am always looking to expand my software
          toolkit and contribute to meaningful projects.
        </p>
        <p>
          At Northeastern, I was the Editor-in-Chief of NU Sci Magazine, the
          university&apos;s student-run science magazine. Science communication
          is a huge passion of mine, and you can check out my writing{" "}
          <Hyperlink text="here!" href="/articles" /> I was also an engineer and
          tech lead at Generate, Northeastern&apos;s student-led product
          development studio, where I worked on 4 mobile and web applications
          for clients. More about these applications and my other personal
          projects can be found here!
          <Hyperlink text="here!" href="/projects" />
        </p>
        <p>
          Outside of that, I&apos;m interested in all kinds of puzzles,
          crocheting, and yoga.
        </p>
      </div>

      <div>
        <h3 className="text-2xl mb-4">Technical skills</h3>

        {/* Mobile Layout */}
        <div className="grid grid-cols-3 gap-2 tablet:hidden">
          {content.skills.concat(content.frameworks).map((s, index) => (
            <div className="flex flex-col items-center space-y-4" key={index}>
              <Skill skill={s.skill} image={s.image} />
            </div>
          ))}
        </div>

        {/* Laptop Layout */}
        <div className="hidden tablet:flex justify-between gap-8">
          {content.skills.map((s, index) => (
            <div className="flex flex-col items-center space-y-4" key={index}>
              <Skill skill={s.skill} image={s.image} />
              {content.frameworks[index] && (
                <Skill
                  skill={content.frameworks[index].skill}
                  image={content.frameworks[index].image}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl mb-4">Connect with me</h3>
        <div className="flex gap-8">
          <Icons color="purple" size="3em" />
        </div>
      </div>

      <div className="flex flex-col tablet:flex-row justify-between gap-4">
        <div className={styles.imageDiv}>
          <img src="london.png" alt="London" className={styles.image} />
          <p className={styles.caption}>Me in London, July 2022</p>
        </div>
        <div className={styles.imageDiv}>
          <img src="ollie.png" alt="Ollie" className={styles.image} />
          <p className={styles.caption}>My cat Ollie</p>
        </div>
        <div className={styles.imageDiv}>
          <img src="bg.jpeg" alt="Bulgaria" className={styles.image} />
          <p className={styles.caption}>
            Velingrad, Bulgaria from my summer 2023 trip
          </p>
        </div>
      </div>
    </div>
  );
}
const styles = {
  imageDiv: "flex flex-col items-center",
  image: "object-cover w-full",
  caption: "text-center text-gray-600",
};
