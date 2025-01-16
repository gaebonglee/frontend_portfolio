import MainSection from "./Main";
import AboutSection from "./About";
import UseSkills from "components/skills/UseSkills";
import Projects from "components/projects/Projects";
import "../styles/pages/Portfolio.scss";
import SlideSection from "./Slide";

export default function Portfolio() {
  return (
    <main className="main-container">
      {/* <MainSection />
      <AboutSection />
      <UseSkills />
      <Projects /> */}
      <SlideSection />
    </main>
  );
}
