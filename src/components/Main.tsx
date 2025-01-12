import "../assets/styles/Main.scss";
import { useScroll } from "../hooks/useScroll";

export default function Main() {
  const scrollPosition = useScroll();

  const maxScroll = 500;
  const progress = Math.min(scrollPosition / maxScroll, 1);

  return (
    <div className="main-container">
      <div className="background-squre">
        <div className="content-wrap">
          <div className="title">
            <div className="top">FrontEnd</div>
            <div className="bottom">Developer</div>
          </div>
          <div className="click--here">scroll</div>
          <div className="name">Lee ga young</div>
        </div>
      </div>
    </div>
  );
}
