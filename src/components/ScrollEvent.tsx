import { useEffect, useRef, useState } from "react";
import { QuestionTexts, AnswerTexts } from "../data/introText";
import "../assets/styles/ScrollEvent.scss";

export default function ScrollEvent() {
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPosition &&
          scrollPosition < section.offsetTop + section.clientHeight
        ) {
          setActiveSections((prev) => [...prev, index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSections]);

  return (
    <div className="scroll-container">
      <div className="text-wrap">
        <div
          id="greeting"
          className={`section greeting ${
            activeSections.includes(0) ? "active" : ""
          }`}
          ref={(el) => el && (sectionRefs.current[0] = el)}
        >
          <div className="question">
            <p>{QuestionTexts.greeting}</p>
          </div>
          <div className="answer">
            {AnswerTexts.greeting.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <div
          id="motivation"
          className={`section motivation ${
            activeSections.includes(1) ? "active" : ""
          }`}
          ref={(el) => el && (sectionRefs.current[1] = el)}
        >
          <div className="question">
            <p>{QuestionTexts.motivation}</p>
          </div>
          <div className="answer">
            <p>{AnswerTexts.motivation}</p>
          </div>
        </div>
        <div
          id="vision"
          className={`section vision ${
            activeSections.includes(2) ? "active" : ""
          }`}
          ref={(el) => el && (sectionRefs.current[2] = el)}
        >
          <div className="question">
            <p>{QuestionTexts.vision}</p>
          </div>
          <div className="answer">
            {AnswerTexts.vision.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
