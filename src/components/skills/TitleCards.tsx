import "../../styles/components/skills/TitleCards.scss";
import { CardTitle } from "data/CardsText";
import { useState } from "react";

function TitleCard({ title, isActive }: { title: string; isActive: boolean }) {
  return (
    <div className={`title-card ${isActive ? "active" : ""}`}>
      <p>{title}</p>
    </div>
  );
}

export default function TitleCards() {
  const [activeCard, setActiveCard] = useState("library");

  return (
    <div className="title-card-container">
      <div className="title-cards">
        {Object.entries(CardTitle).map(([key, value]) => (
          <div
            key={key}
            onClick={() => {
              setActiveCard(key);
            }}
          >
            <TitleCard title={value[0]} isActive={activeCard === key} />
          </div>
        ))}
      </div>
    </div>
  );
}
