import { QuestionTexts, AnswerTexts } from "data/AboutText";

QuestionTexts;
export default function QandA() {
  return (
    <div className="container-large is-full-height2">
      <div className="about-wrap">
        <div className="about-wrap-content">
          <div className="content-title">
            <h2>Interview</h2>
            <img />
          </div>
        </div>
        <div className="about-wrap-content">
          <div className="content-question">
            <p>{QuestionTexts.greeting}</p>
          </div>
          <div className="content-answer">
            {AnswerTexts.greeting.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <div className="about-wrap-content">
          <div className="content-question">{QuestionTexts.motivation}</div>
          <div className="content-answer">{AnswerTexts.motivation}</div>
        </div>
        <div className="about-wrap-content">
          <div className="content-question"> {QuestionTexts.vision}</div>
          <div className="content-answer">
            {AnswerTexts.vision.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
