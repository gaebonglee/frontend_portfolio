import "../../styles/components/projects/Projects.scss";
import ProjectDetail from "./ProjectDetail";
import { projects } from "data/Project";

export default function Projects() {
  return (
    <section className="section--projects-Home">
      <div className="padding-global is-full-height">
        <div className="intro">
          <h1>PROJECTS</h1>
        </div>
        {projects.map((project) => (
          <ProjectDetail key={project.id} project={project} />
        ))}
        <div className="outro">
          <div className="text-wrap">
            <h3>THANK YOU</h3>
            <p>Made by @geabonglee</p>
            <div className="link-github">
              <a href="https://github.com/gaebonglee">Git Hub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
