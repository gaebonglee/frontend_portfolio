import { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/components/slide/ProjectSlide.scss";
import { ProjectType, projects } from "data/Project";
import SlideDetail from "./SlideDetail";

export default function ProjectSlide() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <div className="project-slide-container">
      <div className="padding-global is-full-height">
        <motion.div
          className="project-slides"
          initial={{ opacity: 1 }}
          animate={{ opacity: selectedProject ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-slide"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-slide-content">
                <div className="title-wrap">
                  <div className="num">{project.id}</div>
                  <div className="main-title">{project.title}</div>
                  <div className="sub-title">{project.subTitle}</div>
                </div>
                <div className="project-slide-img">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <SlideDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
