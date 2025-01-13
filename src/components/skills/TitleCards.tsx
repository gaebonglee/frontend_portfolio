import "../../styles/components/skills/TitleCards.scss";
import { CardTitle } from "data/CardsText";

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
  activeCategory: keyof typeof CardTitle;
  setActiveCategory: React.Dispatch<
    React.SetStateAction<keyof typeof CardTitle>
  >;
}) {
  return (
    <div className="title-card-container">
      <div className="title-cards">
        {Object.entries(CardTitle).map(([key, value]) => (
          <TitleCard
            key={key}
            title={value[0]}
            isActive={activeCategory === key}
            onClick={() => setActiveCategory(key as keyof typeof CardTitle)}
          />
        ))}
      </div>
    </div>
  );
}
