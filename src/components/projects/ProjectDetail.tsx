import { ProjectType } from "data/Project";
import "../../styles/components/projects/ProjectsDetail.scss";

interface ProjectDetailProps {
  project: ProjectType;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="section--project-detail-Home">
      <div className="padding-global is-full-height">
        <div className="detail-content-container">
          <div className="detail-content">
            <div className="detail-content--top">
              <div className="title-wrap">
                <div className="title">{project.title}</div>
                <div className="subTitle">{project.subTitle}</div>
              </div>
              <div className="content-info-wrap">
                <div className="content-label">
                  <p className="info-label">타입</p>
                  <a>{project.period}</a>
                </div>
                <div className="content-label">
                  <p className="info-label">사용 스킬</p>
                  <a>{project.period}</a>
                </div>
                <div className="content-label">
                  <p className="info-label">기여도</p>
                  <a>{project.period}</a>
                </div>
              </div>
            </div>
            <div className="detail-content--bottom">
              <div className="detail-content--description-wrap">
                <div className="description">
                  <p className="info-label">주요 내용</p>
                  <ul>
                    <li>{project.description}</li>
                    <li>{project.description}</li>
                    <li>{project.description}</li>
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
        </div>
      </div>
    </section>
  );
}
