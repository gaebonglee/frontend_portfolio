import { useEffect } from "react";
import { CardSubTitle, CardDescription } from "data/CardsText";
import "../../styles/components/skills/DetailCards.scss";

export default function DetailCards() {
  useEffect(() => {
    const cards = document.querySelectorAll(
      ".detail-card"
    ) as NodeListOf<HTMLElement>;
    const rotateCards = () => {
      let angle = 0;
      cards.forEach((card, index) => {
        const rotateAngle = angle - index * 10;
        card.style.transform = `rotate(${rotateAngle}deg)`;
        card.style.zIndex = `${cards.length - index}`; 
      });
    };
    rotateCards();
  }, []);

  return (
    <div className="datail-card-container">
      <div className="datail-cards">
        <div className="detail-card">
          {CardSubTitle.library.map((subTitle, index) => (
            <div key={index} className="card-item">
              <div className="subTitle">
                <p>{subTitle}</p>
              </div>
              <div className="card-Description">
                <p>{CardDescription.library[index]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="detail-card">
          {CardSubTitle.frontend.map((subTitle, index) => (
            <div key={index} className="card-item">
              <div className="subTitle">
                <p>{subTitle}</p>
              </div>
              <div className="card-Description">
                <p>{CardDescription.frontend[index]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="detail-card">
          {CardSubTitle.backend.map((subTitle, index) => (
            <div key={index} className="card-item">
              <div className="subTitle">
                <p>{subTitle}</p>
              </div>
              <div className="card-Description">
                <p>{CardDescription.backend[index]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="detail-card">
          {CardSubTitle.design.map((subTitle, index) => (
            <div key={index} className="card-item">
              <div className="subTitle">
                <p>{subTitle}</p>
              </div>
              <div className="card-Description">
                <p>{CardDescription.design[index]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="detail-card">
          {CardSubTitle.collabTools.map((subTitle, index) => (
            <div key={index} className="card-item">
              <div className="subTitle">
                <p>{subTitle}</p>
              </div>
              <div className="card-Description">
                <p>{CardDescription.collabTools[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
