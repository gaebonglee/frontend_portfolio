import IntroSection from "../../components/IntroSection";
import "../../assets/styles/IntroPage.scss";

export default function IntroPage() {
  return (
    <div className="introPage">
      <div className="intro-expandSquare animate"></div>
      <div className="layout">
        <IntroSection />
      </div>
    </div>
  );
}
