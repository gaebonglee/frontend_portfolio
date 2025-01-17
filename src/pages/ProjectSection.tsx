import Projects from "components/projects/Projects";
import "../styles/pages/ProjectsSection.scss";

export default function ProjectSection() {
  return (
    <section className="section--project-Home">
      <div className="padding-global is-full-height">
        <div className="container-large is-full-height is-center">
          <Projects />
        
        </div>
      </div>
    </section>
  );
}
