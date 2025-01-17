import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/components/projects/Projects.scss";
import ProjectDetail from "./ProjectDetail";
import { projects } from "data/Project";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".project-item");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.offsetWidth,
          markers: true,
        },
      });
    }, slideContainerRef);
    return () => ctx.revert();
  });

  return (
    <section className="section--projects-Home" ref={slideContainerRef}>
      <div className="padding-global is-full-height">
        <div className="intro">
          <h1>PROJECTS</h1>
        </div>
        <div className="continue-scroll" ref={sliderRef}>
          <div className="des">
            <div>
              scroll down
              <div className="scroll-down">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
}
