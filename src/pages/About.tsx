// style
import QandA from "components/about/QandA";
import "../styles/About.scss";

export default function AboutSection() {
  return (
    <section className="section--aboutHome">
      <div className="section_about">
        <div className="padding-global is-full-height">
          <QandA />
        </div>
      </div>
    </section>
  );
}
