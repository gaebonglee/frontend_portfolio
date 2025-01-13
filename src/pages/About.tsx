// style
import QandA from "components/about/QandA";
import "../styles/About.scss";

export default function AboutSection() {
  return (
    <section className="section--About">
      <div className="padding-global is-full-height">
        <QandA/>
      </div>
    </section>
  );
}
