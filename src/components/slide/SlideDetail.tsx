import { motion, AnimatePresence } from "framer-motion";
import "../../styles/components/slide/SlideDetail.scss";
import { ProjectType } from "data/Project";

interface SlideDetailProps {
  project: ProjectType | null;
  onClose: () => void;
}

export default function SlideDetail({ project, onClose }: SlideDetailProps) {
  if (!project) return null; 

  return (
    <AnimatePresence>
      <motion.div
        className="project-detail"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        />
        <div className="project-detail-content">
          <h2>{project.title}</h2>
          <p>{project.subTitle}</p>
          <p>{project.description}</p>
        </div>
        <button onClick={onClose} className="close-btn">
          닫기
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
