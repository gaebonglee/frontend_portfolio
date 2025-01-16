import ProjectSlide from "components/slide/ProjectSlide";
import "../styles/pages/Slide.scss";

export default function SlideSection() {
  return (
    <section className="section--slide-Home">
      <div className="padding-global is-full-height">
        <div className="intro">
          <h1>PROJECTS</h1>
        </div>
        <ProjectSlide />
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
