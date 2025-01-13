import "../styles/Portfolio.scss";
import AboutSection from "./About";
import MainSection from "./Main";
import SkillsSection from "./Skills";

export default function Portfolio() {
  return (
    <main className="main-container">
      <MainSection />
      <AboutSection />
      <SkillsSection />
    </main>
  );
}
