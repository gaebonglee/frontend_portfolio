import "../../styles/components/projects/Projects.scss";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";
import { projects } from "data/Project";
import ProjectDetail from "./ProjectDetail";

export default function Projects() {
  useScrollAnimations(".cloumn", ".cloumn--item-img img");

  return (
    <section className="section--projectsHome">
      <div className="padding-global is-full-height">
        <div className="intro">
          <h1>PROJECTS</h1>
        </div>
        <div className="cloumns">
          {[...Array(3)].map((_, colIndex) => (
            <div className="cloumn" key={colIndex}>
              {[...Array(3)].map((_, itemIndex) => (
                <figure className="cloumn--item" key={itemIndex}>
                  <div className="cloumn--item-imgwrap">
                    <div className="cloumn--item-img">
                      <img src="/images/project/TMP.png" alt="Project" />
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          ))}
        </div>
        <div className="outro">
          <div className="text-wrap">
            <h3>THANK YOU</h3>
            <p>Made by @geabonglee</p>
            <div className="link-github">
              <a href="https://github.com/gaebonglee">Git Hub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
