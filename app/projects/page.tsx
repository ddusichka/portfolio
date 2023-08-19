import content from "../content/content";
import ProjectCard from "../components/Projects/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="grid grid-cols-1 gap-4 laptop:grid-cols-3 laptop:gap-6 my-5">
        {content.projects.map((proj, index) => (
          <ProjectCard {...proj} key={index} />
        ))}
      </div>
    </div>
  );
}
