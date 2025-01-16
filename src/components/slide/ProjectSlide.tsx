import { useState } from "react";
import "../../styles/components/slide/ProjectSlide.scss";
import { ProjectType, projects } from "data/Project";
import SlideDetail from "./SlideDetail";

export default function ProjectSlide() {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <div className="proejct-slide-container">
      <div className="padding-global is-full-height">
        <div className="proejct-slides">
          {projects.map((project: ProjectType) => (
            <div
              key={project.id}
              className={`proejct-slide ${
                activeSlide === project.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveSlide(project.id)}
              onMouseLeave={() => setActiveSlide(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="proejct-slide-content">
                <div className="title-wrap">
                  <div className="num">{project.id}</div>
                  <div className="main-title">{project.title}</div>
                  <div className="sub-title">{project.subTitle}</div>
                </div>
                <div className="proejct-slide-img">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <SlideDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
