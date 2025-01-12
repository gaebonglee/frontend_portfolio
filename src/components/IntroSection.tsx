import { useState, useEffect, useRef } from "react";
import "../assets/styles/IntroSection.scss";
import { QuestionTexts, AnswerTexts } from "../data/introText";

export default function IntroSection() {
  const [showTitle, setShowTitle] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    greeting: false,
    motivation: false,
    vision: false,
  });

  const greetingRef = useRef<HTMLDivElement | null>(null);
  const motivationRef = useRef<HTMLDivElement | null>(null);
  const visionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 1500);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id; // id로 구분
            setVisibleSections((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    if (greetingRef.current) observer.observe(greetingRef.current);
    if (motivationRef.current) observer.observe(motivationRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (greetingRef.current) observer.unobserve(greetingRef.current);
      if (motivationRef.current) observer.unobserve(motivationRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);

  return (
    <div className="content-container">
      <div className={`title-wrap ${showTitle ? "show" : ""}`}>
        <img src="/images/meeeee.png" alt="me" />
        <p>Interview</p>
      </div>
      <div className="text-wrap">
        <div
          id="greeting"
          className={`greeting ${visibleSections.greeting ? "show" : ""}`}
          ref={greetingRef}
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
          className={`motivation ${visibleSections.motivation ? "show" : ""}`}
          ref={motivationRef}
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
          className={`vision ${visibleSections.vision ? "show" : ""}`}
          ref={visionRef}
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
