import { CardSubTitle, CardDescription } from "data/CardsText";
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
}: {
  activeCategory: keyof typeof CardSubTitle;
}) {
  return (
    <div className="datail-card-container">
      <div className="datail-cards">
        <DetailCard
          subtitles={CardSubTitle[activeCategory]}
          descriptions={CardDescription[activeCategory]}
        />
      </div>
    </div>
  );
}
