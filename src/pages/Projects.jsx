import ProjectICard from "../components/ProjectICard";
import projects from "../helpers/projects";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectsList">
        {projects.map((project) => (
          <ProjectICard
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            codeUrl={project.codeUrl}
            viewUrl={project.viewUrl}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
}
