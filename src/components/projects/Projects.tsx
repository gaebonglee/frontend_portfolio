import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/components/projects/Projects.scss";
import ProjectDetail from "./ProjectDetail";
import { projects } from "data/Project";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (container && wrapper) {
      let sections = gsap.utils.toArray(".project-item");

      gsap.to(wrapper, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=" + container.offsetWidth * sections.length,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="section--projects-Home">
      <div className="padding-global is-full-height">
        <div className="intro">
          <h1>PROJECTS</h1>
        </div>
        <div
          ref={wrapperRef}
          className="project-detail--horizontal-scroll"
          style={{ width: `${100 * projects.length}vw` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <ProjectDetail project={project} />
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
