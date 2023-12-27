import Icons from "../components/Icons";
import Skill from "../components/About/Skill";
import content from "../content/content";

export default function Home() {
  return (
    <div>
      <div className="ABOUT text-lg flex flex-col gap-2">
        <h1 className="my-2">About Me</h1>
        <p>
          Hi! I&apos;m Dessy, a 3rd year student studying computer science and
          biology at Northeastern University in Boston. I&apos;ll be starting as
          a software engineering co-op at HubSpot in January and especially
          enjoy backend development. I&apos;m passionate about engineering
          efficient and user-friendly applications and am always looking to
          expand my software toolkit and contribute to meaningful projects.
        </p>
        <p>
          On campus, I&apos;m a developer for Generate, Northeastern&apos;s
          student-led product development studio, and I also love to write and
          edit for the university&apos;s science magazine, NU Sci. Outside of
          that, I&apos;m interested in all kinds of puzzles, crocheting, and
          yoga.
        </p>
      </div>

      <br />

      <div className="SKILLS text-lg">
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

      <br />

      <h3 className="text-2xl mb-4">Connect with me</h3>
      <div className="flex gap-8">
        <Icons color="purple" size="3em" />
      </div>

      <br />
      <br />

      <div className="flex flex-col tablet:flex-row justify-between gap-4">
        <div className="flex flex-col items-center">
          <img src="london.png" alt="London" className="object-cover w-full" />
          <p className="text-center text-gray-600">Me in London, July 2022</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="ollie.png" alt="Ollie" className="object-cover w-full" />
          <p className="text-center text-gray-600">My cat Ollie</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="bg.jpeg" alt="Bulgaria" className="object-cover w-full" />
          <p className="text-center text-gray-600">
            Velingrad, Bulgaria from my summer 2023 trip
          </p>
        </div>
      </div>

      <br />
    </div>
  );
}
