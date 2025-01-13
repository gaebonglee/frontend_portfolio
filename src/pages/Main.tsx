import { useEffect, useRef } from "react";
import gsap from "gsap";
// style
import "../styles/Main.scss";

export default function MainSection() {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const lines = textRef.current?.querySelectorAll(".line");
    const description = textRef.current?.querySelector(".is-absolute p");

    if (lines && description) {
      gsap.set(lines, { y: 170 });
      gsap.set(description, { y: 100 });

      const timeline = gsap.timeline();

      timeline
        .to(lines[0], { y: 0, duration: 1.2, ease: "power3.out" })
        .to(lines[1], { y: 0, duration: 1.5, ease: "power3.out" }, "-=0.9")
        .to(description, { y: 0, duration: 1.5, ease: "power3.out" }, "-=0.9");
    }
  }, []);
  return (
    <section className="section--mainHome">
      <div className="padding-global is-full-height">
        <div className="container-large is-full-height is-center">
          <div className="side--info"></div>
          <div className="mainHome--textWrap" ref={textRef}>
            <div className="overflow-hidden">
              <h1 className="h1-display">
                <div className="line">GA YOUNG</div>
              </h1>
            </div>
            <div className="overflow-hidden is-absolute">
              <p>FRONTEND DEVELOPER</p>
            </div>
            <div className="overflow-hidden">
              <h1 className="h1-display">
                <div className="line">PORTFOLIO</div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
