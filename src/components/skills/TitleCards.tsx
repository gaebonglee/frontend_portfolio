import "../../styles/components/skills/TitleCards.scss";
import { CardTitle } from "data/CardsText";
export default function TitleCards() {
  return (
    <div className="title-card-container">
      <div className="title-cards">
        <div className="title-card">
          <p>{CardTitle.library}</p>
        </div>
        <div className="title-card">
          <p>{CardTitle.frontend}</p>
        </div>
        <div className="title-card">
          <p>{CardTitle.backend}</p>
        </div>
        <div className="title-card">
          <p>{CardTitle.design}</p>
        </div>
        <div className="title-card">
          <p>{CardTitle.collabTools}</p>
        </div>
      </div>
    </div>
  );
}
