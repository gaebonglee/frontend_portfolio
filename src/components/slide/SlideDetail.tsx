import "../../styles/components/slide/SlideDetail.scss";
import { ProjectType } from "data/Project";

interface SlideDetailProps {
  project: ProjectType | null;
  onClose: () => void;
}

export default function SlideDetail({ project, onClose }: SlideDetailProps) {
  if (!project) return null; // 선택된 프로젝트가 없으면 아무것도 렌더링하지 않음

  return (
    <div className="slide-detail-overlay" onClick={onClose}>
      <div
        className="slide-detail-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>{project.title}</h2>
        <p>{project.subTitle}</p>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
      </div>
    </div>
  );
}
