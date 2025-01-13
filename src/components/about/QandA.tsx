import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { QuestionTexts, AnswerTexts } from "data/AboutText";
import useScrollState from "hooks/useScrollState";
import "../../styles/components/about/QandA.scss";

gsap.registerPlugin(ScrollTrigger);

const questionKeys = Object.keys(QuestionTexts) as Array<
  keyof typeof QuestionTexts
>;

export default function QandA() {
  const { containerRef, scrollState } = useScrollState(questionKeys);

  useEffect(() => {
    // QandA에서만 적용할 GSAP 애니메이션
    const sections = containerRef.current?.querySelectorAll(
      ".about-wrap-content--info"
    );

    if (sections) {
      gsap.fromTo(
        sections,
        { opacity: 0, y: 130 }, // 초기 상태
        {
          opacity: 1,
          y: 0, // 최종 상태
          duration: 1,
          ease: "power3.out",
          stagger: 0.35,
          scrollTrigger: {
            trigger: containerRef.current, // 트리거로 사용할 요소
            start: "top 90%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );
    }
  }, [containerRef]);

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
        {questionKeys.map((key) => (
          <div
            key={key}
            className={`about-wrap-content ${
              scrollState === key ? "active" : ""
            }`}
          >
            <div className="about-wrap-content--info">
              <div className="content-question">
                <p>{QuestionTexts[key]}</p>
              </div>
              <div className="content-answer-wrap">
                <div className="content-answer">
                  {Array.isArray(AnswerTexts[key])
                    ? (AnswerTexts[key] as string[]).map((text, index) => (
                        <p key={index}>{text}</p>
                      ))
                    : AnswerTexts[key]}
                </div>
                <img src={`/images/${key}.png`} alt={key} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
