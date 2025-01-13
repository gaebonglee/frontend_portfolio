import { useState, useEffect } from "react";
import useScrollState from "hooks/useScrollState";
import DetailCards from "components/skills/DetailCards";
import TitleCards from "components/skills/TitleCards";
import { CardData, CardCategory } from "data/CardsText";
import "../styles/Skills.scss";

export default function SkillsSection() {
  const itemKeys = Object.keys(CardData) as CardCategory[];
  const { containerRef, scrollState } = useScrollState(itemKeys);

  const [activeCategory, setActiveCategory] = useState<CardCategory>(
    Object.keys(CardData)[0] as CardCategory
  );

  useEffect(() => {
    if (itemKeys.includes(scrollState)) {
      setActiveCategory(scrollState);
    } else {
      setActiveCategory(itemKeys[0]);
    }
  }, [scrollState, itemKeys]);

  return (
    <section className="section--skillsHome" ref={containerRef}>
      <div className="section-skills">
        <div className="padding-global is-full-height">
          <div className="container-large is-full-height2">
            <div className="card-wrap">
              <TitleCards
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
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
