import { useState } from "react";
import "../assets/styles/Main.scss";

export default function Main() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="layout">
      <div className="squre">
        <div className={`content ${isClicked ? "animate" : ""} `}>
          <div className="title">
            <div className={`top ${isClicked ? "move-left" : ""}`}>
              FrontEnd
            </div>
            <div className={`bottom ${isClicked ? "move-right" : ""}`}>
              Developer
            </div>
          </div>
          <div
            className={`click--here ${isClicked ? "fade-out" : ""}`}
            onClick={handleClick}
          >
            click here
          </div>
          <a className={`name ${isClicked ? "fade-out" : ""}`}>Lee ga young</a>
        </div>
      </div>
    </div>
  );
}
