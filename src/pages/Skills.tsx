import { useState, useEffect } from "react";
import useScrollState from "hooks/useScrollState";
import DetailCards from "components/skills/DetailCards";
import { CardData, CardCategory } from "data/CardsText";
import "../styles/Skills.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillScrollKeys = Object.keys(CardData) as CardCategory[];

export default function SkillsSection() {
  const { containerRef, scrollState } = useScrollState(skillScrollKeys);

  const [activeCategory, setActiveCategory] = useState<CardCategory>(
    Object.keys(CardData)[0] as CardCategory
  );

  useEffect(() => {
    const cardWrap = containerRef.current?.querySelector(".card-wrap");

    if (cardWrap) {
      ScrollTrigger.create({
        trigger: cardWrap,
        start: "top top", // card-wrap의 상단이 뷰포트 상단에 닿을 때 시작
        end: "+=100%", // card-wrap이 고정될 스크롤 구간
        scrub: true, // 스크롤과 동기화
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef]);

  return (
    <section className="section--skillsHome" ref={containerRef}>
      <div className="section-skills">
        <div className="padding-global is-full-height">
          <div className="container-large is-full-height2">
            <div className="card-wrap">
              <DetailCards
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
