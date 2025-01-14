import "../../styles/components/projects/Projects.scss";
import { ProjectType, projects } from "data/Project";
export default function Projects() {
  return (
    <section className="section--projectsHome">
      <div className="padding-global is-full-height">
        <div className="container-large is-full-height is-center">
          <div className="porjects-wrap">
            <div className="img-wrap">
              <img />
            </div>
            <div className="project-wrap-content">
              <div className="project-wrap-content--info">
                <div className="mywork-wrap">
                  <a>Design</a>
                  <a>FrontEnd</a>
                  <a>BackEnd</a>
                </div>
                <div className="title-wrap">
                  <div className="title">TMP</div>
                  <div className="subTitle">Trainer Matching Project</div>
                </div>
                <div className="description">
                  <p>
                    주요기능 설명입니다.주요기능 설명입니다.주요기능
                    설명입니다.주요기능 설명입니다.주요기능 설명입니다.주요기능
                    설명입니다.주요기능 설명입니다.주요기능 설명입니다.주요기능
                    설명입니다.주요기능 설명입니다.주요기능 설명입니다.주요기능
                    설명입니다.주요기능 설명입니다.주요기능 설명입니다. 주요기능
                    설명입니다.주요기능 설명입니다.주요기능 설명입니다.주요기능
                    설명입니다.주요기능 설명입니다.주요기능 설명입니다.주요기능
                    설명입니다.주요기능 설명입니다.주요기능 설명입니다.주요기능
                    설명입니다.주요기능 설명입니다.주요기능 설명입니다.주요기능
                    설명입니다.주요기능 설명입니다.
                  </p>
                </div>
                <div className="period-wrap">
                  <h4>Period</h4>
                  <a>2024.04.01 ~ 2024.05.17</a>
                </div>
                <div className="tech-wrap">
                  <h4>Tech</h4>
                  <a>React, Scss, JavaScript, axios, MySQL</a>
                </div>
                <div className="link-wrap">
                  <div className="demo">Demo</div>
                  <div className="source">Source</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
