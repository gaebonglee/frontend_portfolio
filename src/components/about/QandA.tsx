import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { QuestionTexts, AnswerTexts } from "data/AboutText";
import "../../styles/components/about/QandA.scss";

gsap.registerPlugin(ScrollTrigger);

export default function QandA() {
  const containerRef = useRef<HTMLDivElement>(null);



  return (
    <div className="container-large is-full-height2" ref={containerRef}>
      <div className="about-wrap">
        <div className="about-wrap-content">
          <div className="content-title">
            <h2>Interview</h2>
          </div>
        </div>
        <div className="about-wrap-content">
          <div className="content-question">
            <p>{QuestionTexts.greeting}</p>
          </div>
          <div className="content-answer-wrap">
            <div className="content-answer">
              {AnswerTexts.greeting.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <img src="/images/greeting.png" />
          </div>
        </div>
        <div className="about-wrap-content">
          <div className="content-question">{QuestionTexts.motivation}</div>
          <div className="content-answer-wrap">
            <div className="content-answer">{AnswerTexts.motivation}</div>
            <img src="/images/motivation.png" />
          </div>
        </div>
        <div className="about-wrap-content">
          <div className="content-question"> {QuestionTexts.vision}</div>
          <div className="content-answer-wrap">
            <div className="content-answer">
              {AnswerTexts.vision.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <img src="/images/vision.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
