import IntroSection from "components/intro/IntroSection";
import "../../assets/styles/IntroPage.scss";
import Cardsection from "components/intro/CardSection";
import TimelineSection from "components/intro/TimelineSection";

// hook
import { useScroll } from "../../hooks/useScroll";

export default function IntroPage() {
  const scrollPosition = useScroll();
  
  return (
    <div className="intro-page">
      <IntroSection />
      <Cardsection />
      <TimelineSection />
      <div className="scroll-indicator">Scroll Position: {scrollPosition}</div>
    </div>
  );
}
