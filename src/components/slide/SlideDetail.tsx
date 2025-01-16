import { useEffect, useState } from "react";
import "../../styles/components/slide/SlideDetail.scss";
import { ProjectType } from "data/Project";

interface SlideDetailProps {
  project: ProjectType | null;
  onClose: () => void;
}

export default function SlideDetail({ project, onClose }: SlideDetailProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (project) {
      setScrollY(window.scrollY);
      document.documentElement.style.scrollBehavior = "smooth";
      window.scrollTo(0, scrollY);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        window.scrollTo(0, scrollY);
      }, 300);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div
      className={`slide-detail-container ${isVisible ? "visible" : ""}`}
      onClick={onClose}
    >
      <div
        className="slide-detail-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          close
        </button>
        <h2>{project.title}</h2>
        <p>{project.subTitle}</p>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
      </div>
    </div>
  );
}
