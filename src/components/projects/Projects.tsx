import "../../styles/components/projects/Projects.scss";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";

export default function Projects() {
  useScrollAnimations(".cloumn", ".cloumn--item-img img");

  return (
    <section className="section--projectsHome">
      <div className="padding-global is-full-height">
        <div className="intro"></div>
        <div className="cloumns">
          {[...Array(3)].map((_, colIndex) => (
            <div className="cloumn" key={colIndex}>
              {[...Array(3)].map((_, itemIndex) => (
                <figure className="cloumn--item" key={itemIndex}>
                  <div className="cloumn--item-imgwrap">
                    <img
                      src="/images/project/TMP.png"
                      alt="Project"
                      className="cloumn--item-img"
                    />
                  </div>
                </figure>
              ))}
            </div>
          ))}
        </div>
        <div className="outro"></div>
      </div>
    </section>
  );
}
