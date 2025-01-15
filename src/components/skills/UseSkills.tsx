import React, { useEffect } from "react";
import { CardData } from "data/SkillCard";
import "../../styles/components/skills/UseSkills.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UseSkills() {
  useEffect(() => {
    const cards = [
      { id: "#card-1", endTranslateX: -200, rotate: 45 },
      { id: "#card-2", endTranslateX: -1700, rotate: -35 },
      { id: "#card-3", endTranslateX: -1400, rotate: 25 },
      { id: "#card-4", endTranslateX: -1900, rotate: -35 },
      { id: "#card-5", endTranslateX: -1600, rotate: 30 },
      { id: "#card-6", endTranslateX: -1800, rotate: -45 },
      { id: "#card-7", endTranslateX: -1500, rotate: 50 },
    ];

    ScrollTrigger.create({
      trigger: ".wrapper",
      start: "top top",
      end: "+=900vh",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(".wrapper", {
          x: `${-350 * self.progress}vw`,
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });

    cards.forEach((card) => {
      const target = document.querySelector(card.id);

      ScrollTrigger.create({
        trigger: card.id,
        start: "top top",
        end: "+=1200vh",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(target, {
            x: `${card.endTranslateX * self.progress}px`,
            rotate: `${card.rotate * self.progress * 5}`, // 회전 효과
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="section--useSkills-Home">
      <div className="useSkills-container">
        <div className="wrapper">
          <h1>Experience With</h1>
          <div className="skill-cards">
            {CardData.map((card) => (
              <div key={card.id} id={`card-${card.id}`} className="skill-card">
                <img
                  src={card.image}
                  alt={card.skillName}
                  className="skill-card-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
