import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Master Skills
          <span> Build Your Future</span>
        </h1>

        <p>
          Discover top-rated courses in
          Programming, AI, Cloud and more.
        </p>

        <div className="hero-buttons">
          <button>Explore Courses</button>
          <button className="secondary">
            Become Instructor
          </button>
        </div>
      </div>
    </section>
  );
}