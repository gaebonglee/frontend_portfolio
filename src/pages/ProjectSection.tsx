import "../styles/pages/ProjectsSection.scss";
import ProjectSlide from "components/projects/ProjectSlide";

export default function ProjectSection() {
  return (
    <section className="section--project-Home">
      <div className="container-large is-full-height is-center">
        <ProjectSlide />
      </div>
    </section>
  );
}
