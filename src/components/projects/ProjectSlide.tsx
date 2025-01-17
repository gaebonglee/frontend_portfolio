import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "../../styles/components/projects/ProjectSlide.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSlide() {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.offsetWidth,
          markers: true,
        },
      });
    }, componentRef);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={componentRef}>
      <div className="intro">
        <h1>PROJECTS</h1>
      </div>
      <div ref={sliderRef} className="container">
        <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
        <div className="panel purple">THREE</div>
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
  );
}
