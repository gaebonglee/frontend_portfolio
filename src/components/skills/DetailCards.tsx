import { useEffect } from "react";
import { CardSubTitle, CardDescription } from "data/CardsText";
import "../../styles/components/skills/DetailCards.scss";

function DetailCard({
  category,
  subtitles,
  descriptions,
}: {
  category: string;
  subtitles: string[];
  descriptions: string[];
}) {
  return (
    <div className={`detail-card ${category}`}>
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

export default function DetailCards() {
  useEffect(() => {
    const cards = document.querySelectorAll(
      ".detail-card"
    ) as NodeListOf<HTMLElement>;

    const rotateCards = () => {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains("active")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          const rotateAngle = angle - index * 10;
          card.style.transform = `rotate(${rotateAngle}deg)`;
          card.style.zIndex = `${cards.length - index}`;
        }
      });
    };

    rotateCards();
  }, []);

  const categories = Object.keys(
    CardSubTitle
  ) as (keyof typeof CardDescription)[];

  return (
    <div className="datail-card-container">
      <div className="datail-cards">
        {categories.map((category) => (
          <DetailCard
            key={category}
            category={category}
            subtitles={CardSubTitle[category]}
            descriptions={CardDescription[category]}
          />
        ))}
      </div>
    </div>
  );
}

//   useEffect(() => {
//   const cards = document.querySelectorAll(
//     ".detail-card"
//   ) as NodeListOf<HTMLElement>;

//   const rotateCards = () => {
//     let angle = 0;
//     cards.forEach((card, index) => {
//       if (card.classList.contains("active")) {
//         card.style.transform = `translateY(-120vh) rotate(-48deg)`;
//       } else {
//         const rotateAngle = angle - index * 10;
//         card.style.transform = `rotate(${rotateAngle}deg)`;
//         card.style.zIndex = `${cards.length - index}`;
//       }
//     });
//   };

//   rotateCards();
// }, []);
