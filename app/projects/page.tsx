import content from "../content/content";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="flex justify-center my-4 laptop:my-8">
      <div className="w-[90%] laptop:w-[75%]">
        <h1>Projects</h1>
        <p>
          A list of my completed and in-progress projects — click on any card to
          learn more.
        </p>
        <div className="laptop:grid laptop:grid-cols-3 laptop:gap-6 my-5">
          {content.projects.map((proj, index) => (
            <ProjectCard {...proj} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
