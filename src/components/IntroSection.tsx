import { useState, useEffect } from "react";
import "../assets/styles/IntroSection.scss";
import { IntroTexts } from "../data/introText";

export default function IntroSection() {
  const [showTitle, setShowTitle] = useState(false); // 이미지와 텍스트 표시 여부
  const [showGreeting, setShowGreeting] = useState(false); // greeting 표시 여부
  const [showMotivation, setShowMotivation] = useState(false); // motivation 표시 여부
  const [showVision, setShowVision] = useState(false); // vision 표시 여부

  useEffect(() => {
    // 1.5초 후 타이틀 표시
    const titleTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 1500);

    const greetingTimeout = setTimeout(() => {
      setShowGreeting(true);
    }, 3000);

    const handleScroll = () => {
      const motivationEl = document.querySelector(".motivation");
      const visionEl = document.querySelector(".vision");

      if (
        motivationEl &&
        motivationEl.getBoundingClientRect().top <= window.innerHeight / 2
      ) {
        setShowMotivation(true);
      }

      if (
        visionEl &&
        visionEl.getBoundingClientRect().top <= window.innerHeight / 2
      ) {
        setShowVision(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(greetingTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="content-container">
      <div className={`title-wrap ${showTitle ? "show" : ""}`}>
        <img src="/images/meeeee.png" alt="me" />
        <p>Interview</p>
      </div>
      <div className="text-wrap">
        <div className={`greeting ${showGreeting ? "show" : ""}`}>
          {IntroTexts.greeting.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className={`motivation ${showMotivation ? "show" : ""}`}>
          <p>{IntroTexts.motivation}</p>
        </div>
        <div className={`vision ${showVision ? "show" : ""}`}>
          {IntroTexts.vision.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
