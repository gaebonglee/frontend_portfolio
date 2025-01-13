import { useState } from "react";
import DetailCards from "components/skills/DetailCards";
import TitleCards from "components/skills/TitleCards";
import { CardTitle } from "data/CardsText"
import "../styles/Skills.scss";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof CardTitle>("library");

  return (
    <section className="section--skillsHome">
      <div className="padding-global">
        <div className="sticky-area">
          <div className="container-large">
            <div className="card-wrap">
              <TitleCards
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <DetailCards activeCategory={activeCategory} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
