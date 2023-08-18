import Icons from "../components/Icons";
import Skill from "../components/Skill";
import content from "../content/content";

export default function Home() {
  return (
    <div>
      <div className="ABOUT text-lg flex flex-col gap-2">
        <h1 className="mb-2">About Me</h1>
        <p>
          Hi! I&apos;m Dessy, a 3rd year student studying computer science and
          biology at Northeastern University in Boston. I&apos;m currently
          working as a software development intern and am passionate about
          developing efficient and user-friendly applications. I&apos;m always
          looking to grow and expand my software toolkit and contribute to
          meaningful projects.
        </p>
        <p>
          On campus, I&apos;m a developer for Code4Community, Northeastern's
          charitable software collective, and I also love to write and edit for
          the university&apos;s science magazine, NU Sci.
        </p>
      </div>

      <br />

      <div className="SKILLS text-lg">
        <h3 className="text-2xl  mb-4">Languages and Frameworks</h3>
        <div className="flex justify-between gap-8">
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

      <h3 className="text-2xl mb-2">Connect with me</h3>
      <div className="flex gap-8">
        <Icons color="purple" size="3em" />
      </div>

      <br />
      <br />

      <div className="flex justify-between gap-4">
        <div className="flex flex-col items-center">
          <img src="london.jpeg" alt="London" className="object-cover w-full" />
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
