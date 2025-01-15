import MainSection from "./Main";
import AboutSection from "./About";
import UseSkills from "components/skills/UseSkills";
import Projects from "components/projects/Projects";
import "../styles/pages/Portfolio.scss";
import ProjectDetail from "@components/projects/ProjectDetail";
import Test from "@components/projects/test";

export default function Portfolio() {
  return (
    <main className="main-container">
      {/* <MainSection />
      <AboutSection />
      <UseSkills />
      <Projects /> */}
      <Test/>
    </main>
  );
}
