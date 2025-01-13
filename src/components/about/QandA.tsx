import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { QuestionTexts, AnswerTexts } from "data/AboutText";
import "../../styles/components/about/QandA.scss";

gsap.registerPlugin(ScrollTrigger);

export default function QandA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll(
      ".about-wrap-content--info"
    );
    if (sections) {
      gsap.fromTo(
        sections,
        { opacity: 0, y: 130 }, // 초기 상태: 투명하고 아래로 이동
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.35, // 각 요소가 순차적으로 나타나도록 설정
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom 30%",
            scrub: true, // 스크롤에 따라 애니메이션 진행
          },
        }
      );
    }
  }, []);

  return (
    <div className="container-large is-full-height2" ref={containerRef}>
      <div className="about-wrap">
        <div className="about-wrap-content">
          <div className="about-wrap-content--info">
            <div className="content-title">
              <h2>Interview</h2>
            </div>
          </div>
          
        </div>
        <div className="about-wrap-content">
          <div className="about-wrap-content--info">
            <div className="content-question">
              <p>{QuestionTexts.greeting}</p>
            </div>
            <div className="content-answer-wrap">
              <div className="content-answer">
                {AnswerTexts.greeting.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
              <img src="/images/greeting.png" alt="greeting" />
            </div>
          </div>
        </div>
        <div className="about-wrap-content">
          <div className="about-wrap-content--info">
            <div className="content-question">{QuestionTexts.motivation}</div>
            <div className="content-answer-wrap">
              <div className="content-answer">{AnswerTexts.motivation}</div>
              <img src="/images/motivation.png" alt="motivation" />
            </div>
          </div>
        </div>
        <div className="about-wrap-content">
          <div className="about-wrap-content--info">
            <div className="content-question"> {QuestionTexts.vision}</div>
            <div className="content-answer-wrap">
              <div className="content-answer">
                {AnswerTexts.vision.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
              <img src="/images/vision.png" alt="vision" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
