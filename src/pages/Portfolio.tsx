import "../styles/pages/Portfolio.scss";
import MainSection from "./MainSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import ProjectSlide from "components/projects/ProjectSlide";

export default function Portfolio() {
  return (
    <main className="main-container">
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
    </main>
  );
}
