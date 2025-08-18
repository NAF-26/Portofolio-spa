import wordImg from "../assets/word of the day.jpg";

export default function Word() {
  return (
    <section className="word" id="word">
      <div className="word-content">
        <h2 className="heading">
          Word Of <span>The Day</span>
        </h2>
        <a
          href="https://youtube.com/shorts/MFEtQXHA6e0?si=DMkJY5-UzXlmVjPa"
          className="btn"
        >
          Click Me
        </a>
      </div>
      <div className="word-img">
        <img src={wordImg} alt="Word" />
      </div>
    </section>
  );
}
