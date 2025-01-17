import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "../../styles/components/projects/ProjectSlide.scss";
import ProjectDetail from "./ProjectDetail";
import { projects } from "data/Project";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSlide() {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".project-slide");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.offsetWidth,
          // markers: true,
        },
      });
    }, componentRef);
    return () => ctx.revert();
  });

  return (
    <section className="section--project-slides-Home">
      <div className="project-slides">
        <div className="slides-component" ref={componentRef}>
          <div className="intro">
            <h1>SCROLL DOWN</h1>
          </div>
          <div ref={sliderRef} className="container">
            <div className="project-slide scoll-down--bg">
              <h1>PROJECTS</h1>
              <div className="scroll-down">
                <div className="arrow"></div>
              </div>
            </div>
            {projects.map((project) => (
              <div key={project.id} className="project-slide">
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
      </div>
    </section>
  );
}
