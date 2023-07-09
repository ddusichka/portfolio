import content from "../content/content";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="flex justify-center my-4 laptop:my-8">
      <div className="w-[90%] laptop:w-[75%]">
        <h1 className="font-bold text-2xl">Experience</h1>
        <div className="grid grid-cols-3 gap-4 my-5">
          {content.projects.map((proj, index) => (
            <ProjectCard {...proj} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
