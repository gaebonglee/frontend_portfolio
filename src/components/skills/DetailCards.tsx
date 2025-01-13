import { useRef } from "react";
import useRotateCards from "hooks/useRotateCards";
import { CardData, CardCategory } from "data/CardsText";
import "../../styles/components/skills/DetailCards.scss";

function DetailCard({
  subtitles,
  descriptions,
}: {
  subtitles: string[];
  descriptions: string[];
}) {
  return (
    <div className="detail-card">
      {subtitles.map((subTitle, index) => (
        <div key={index} className="card-item">
          <div className="subTitle">
            <p>{subTitle}</p>
          </div>
          <div className="card-Description">
            <p>{descriptions[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DetailCards({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: CardCategory;
  setActiveCategory: React.Dispatch<React.SetStateAction<CardCategory>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useRotateCards(containerRef, setActiveCategory);

  const data = CardData[activeCategory];
  if (!data) return null;

  const { subtitles, descriptions } = data;

  return (
    <div ref={containerRef} className="datail-card-container">
      <div className="datail-cards">
        <DetailCard subtitles={subtitles} descriptions={descriptions} />
      </div>
    </div>
  );
}
