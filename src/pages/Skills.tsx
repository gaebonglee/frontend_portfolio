import { useState, useEffect, useRef } from "react";
import DetailCards from "components/skills/DetailCards";
import TitleCards from "components/skills/TitleCards";
import { CardTitle } from "data/CardsText";
import "../styles/Skills.scss";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof CardTitle>("library");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section--skillsHome">
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
