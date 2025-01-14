import UseSkills from "components/skills/UseSkills";
import "../styles/pages/Portfolio.scss";
import AboutSection from "./About";
import MainSection from "./Main";

export default function Portfolio() {
  return (
    <main className="main-container">
      <MainSection />
      <AboutSection />
      <UseSkills />
    </main>
  );
}
