import Icons from "../components/Icons";

export default function Home() {
  return (
    <div>
      <div className="ABOUT text-lg">
        <h1 className="mb-2">About Me</h1>
        <p>
          Hi! I&apos;m Dessy, a 3rd year student studying computer science and
          biology at Northeastern University in Boston. I&apos;m currently
          working as a software development intern and love the possibilities
          within computer science.
        </p>
      </div>

      <br />

      <div className="SKILLS text-lg">
        <h3 className="text-[#ac3a4a] text-xl">Skills</h3>
        <ul>
          <li>
            <strong>Languages:</strong> Java, JavaScript, Python, C#, SQL,
            TypeScript, HTML, CSS, R
          </li>
          <li>
            <strong>Frameworks and Software:</strong> React, Next.js, MongoDB,
            Firebase, Docker, Git
          </li>
          <li>
            <strong>Other:</strong> Technical writing, teaching
          </li>
        </ul>
      </div>

      <br />

      <div className="flex flex-col gap-4">
        <h3 className="text-[#ac3a4a] text-xl">Academic Interests</h3>
        <p>
          I couldn&apos;t choose between computer science and biology, so I
          stuck with both! I think the natural world is fascinating and
          engineered in such a cool way. On the flip side, getting to engineer
          my own software is an exciting exercise in creativity and
          problem-solving. Ultimately, I like solving puzzles and figuring out
          how things work, and both of these fields give me the chance to do
          that!
        </p>
        <p>
          I&apos;m especially interested in the ways these fields overlap.
          Software is being used to power so much in biological and medical
          research, allow us to uncover and diagnose things more effectively
          than ever before. In turn, software is also able to learn from the
          natural world. After all, the entire field of artificial intelligence
          is working to replicate human thought patterns that nature has already
          engineered :)
        </p>
      </div>
      <br />

      <h3 className="text-[#ac3a4a] text-xl">Fun Corner</h3>
      {/* <p>nesting doll theory?</p> */}

      <br />

      <h3 className="text-[#ac3a4a] text-xl mb-2">Connect with me</h3>
      <div className="flex gap-4">
        <Icons color="black" size="3em" />
      </div>
    </div>
  );
}
