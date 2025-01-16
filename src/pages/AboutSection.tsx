// style
import QandA from "components/about/QandA";
import "../styles/pages/About.scss";

export default function AboutSection() {
  return (
    <section className="section--about-Home">
      <div className="section_about">
        <div className="padding-global is-full-height">
          <QandA />
        </div>
      </div>
    </section>
  );
}
