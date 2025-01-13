import "../../styles/components/skills/TitleCards.scss";
import { CardData, CardCategory } from "data/CardsText";

function TitleCard({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`title-card ${isActive ? "active" : ""}`} onClick={onClick}>
      <p>{title}</p>
    </div>
  );
}

export default function TitleCards({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: CardCategory;
  setActiveCategory: React.Dispatch<React.SetStateAction<CardCategory>>;
}) {
  return (
    <div className="title-card-container">
      <div className="title-cards">
        {Object.entries(CardData).map(([key, value]) => (
          <TitleCard
            key={key}
            title={value.title}
            isActive={activeCategory === key}
            onClick={() => setActiveCategory(key as CardCategory)}
          />
        ))}
      </div>
    </div>
  );
}
