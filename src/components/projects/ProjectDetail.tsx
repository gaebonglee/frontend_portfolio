import { ProjectType, projects } from "data/Project";
import "../../styles/components/projects/ProjectsDetail.scss";

export default function ProjectsDetail() {
  return (
    <>
      {projects.map((project: ProjectType) => (
        <div className="porjects-wrap">
          <div className="img-wrap">
            <img src={project.image} />
          </div>
          <div className="project-wrap-content">
            <div className="project-wrap-content--info">
              <div className="myWork-wrap">
                <div className={`myWork ${project.design ? "true" : "false"}`}>
                  <a>Design</a>
                </div>
                <div className={`myWork ${project.design ? "true" : "false"}`}>
                  <a>FrontEnd</a>
                </div>
                <div className={`myWork ${project.design ? "true" : "false"}`}>
                  <a>BackEnd</a>
                </div>
              </div>
              <div className="title-wrap">
                <div className="title">{project.title}</div>
                <div className="subTitle">{project.subTitle}</div>
              </div>
              <div className="description">
                <div className="description-title">주요 내용</div>
                <p>{project.description}</p>
              </div>
              <div className="period-wrap">
                <h4>Period</h4>
                <a>{project.period}</a>
              </div>
              <div className="tech-wrap">
                <h4>Tech</h4>
                <a>{project.tech}</a>
              </div>
              <div className="link-wrap">
                <a href={project.projectLink}>Demo</a>
                <a href={project.githubLink}>Source</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
