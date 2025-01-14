import MainSection from "./Main";
import AboutSection from "./About";
import UseSkills from "components/skills/UseSkills";
import Projects from "components/projects/Projects";
import "../styles/pages/Portfolio.scss";

export default function Portfolio() {
  return (
    <main className="main-container">
      <MainSection />
      <AboutSection />
      <UseSkills />
      <Projects />
    </main>
  );
}
