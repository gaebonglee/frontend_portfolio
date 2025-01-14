import { useRef } from "react";
import useRotateCards from "hooks/useRotateCards";
import { CardData, CardCategory } from "data/CardsText";
import "../../styles/components/skills/DetailCards.scss";

function DetailCard({
  subtitles,
  descriptions,
  rotation,
  zIndex,
}: {
  subtitles: string[];
  descriptions: string[];
  rotation: number;
  zIndex: number;
}) {
  return (
    <div
      className="detail-card"
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex: zIndex,
      }}
    >
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

  const categories = Object.keys(CardData) as CardCategory[];

  return (
    <div ref={containerRef} className="datail-card-container">
      <div className="datail-cards">
        {categories.map((category, index) => {
          const data = CardData[category];
          if (!data) return null;

          return (
            <DetailCard
              key={category}
              subtitles={data.subtitles}
              descriptions={data.descriptions}
              rotation={-12 * index} // 초기 회전 각도 설정
              zIndex={categories.length - index} // 초기 zIndex 설정
            />
          );
        })}
      </div>
    </div>
  );
}
