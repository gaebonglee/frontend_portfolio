import { useState, useEffect } from "react";
import "../assets/styles/IntroSection.scss";
import ScrollEvent from "../ScrollEvent";

export default function IntroSection() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true);
    }, 1500);
  });

  return (
    <div className="content-container">
      <div className={`title-wrap ${showTitle ? "show" : ""}`}>
        <img src="/images/meeeee.png" alt="me" />
        <p>Interview</p>
      </div>
      {/* <ScrollEvent /> */}
    </div>
  );
}
