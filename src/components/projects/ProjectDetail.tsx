import { ProjectType } from "data/Project";
import "../../styles/components/projects/ProjectsDetail.scss";

interface ProjectDetailProps {
  project: ProjectType;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="section--project-detail-Home">
      <div className="padding-global is-full-height">
        <div className="detail-content">
          <div className="detail-content--info">
            <div className="title-wrap">
              <div className="title">{project.title}</div>
              <div className="subTitle">{project.subTitle}</div>
            </div>
            <div className="content-labels-wrap">
              <div className="content-label">
                <p className="info-label">기여도</p>
                <a>{project.contribution}</a>
              </div>
              <div className="content-label">
                <p className="info-label">타입</p>
                <a>{project.period}</a>
              </div>
              <div className="content-label">
                <p className="info-label">제작기간</p>
                <a>{project.period}</a>
              </div>
              <div className="content-label">
                <p className="info-label">라이브러리</p>
                <a>{project.library}</a>
              </div>
              <div className="content-label">
                <p className="info-label">프레임워크</p>
                <a>{project.framework}</a>
              </div>
            </div>

            <div className="description">
              <ul>
                <li>{project.description}</li>
              </ul>
            </div>

            <div className="link-wrap">
              <a href={project.projectLink}>Demo</a>
              <a href={project.githubLink}>Source</a>
            </div>
          </div>
          <div className="detail-content--img">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </div>
    </section>
  );
}
