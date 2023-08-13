import Icons from "../components/Icons";

export default function Home() {
  return (
    <div className="flex justify-center my-4 laptop:my-8">
      <div className="w-[90%] laptop:w-[75%]">
        <h1>About Me</h1>
        <p>
          Hi! I&apos;m Dessy, a 3rd year student at Northeastern University
          studying computer science and biology.
        </p>

        <p>
          I&apos;m originally from Lawrenceville, New Jersey and am currently
          studying in Boston, MA.
        </p>

        <h3 className="text-lg">Connect with me</h3>
        <div className="flex gap-4">
          <Icons color="black" size="3em" />
        </div>
      </div>
    </div>
  );
}
