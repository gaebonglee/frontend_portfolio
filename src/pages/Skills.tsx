import DetailCards from "components/skills/DetailCard";
import TitleCards from "components/skills/TitleCards";
import "../styles/Skills.scss";

export default function SkillsSection() {
  return (
    <section className="section--skillsHome">
      <div className="padding-global">
        <div className="container-large">
          <div className="card-wrap">
            <TitleCards />
            <DetailCards />
          </div>
        </div>
      </div>
    </section>
  );
}
