import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "./NewHero.css";
import profileImage from "../../images/Joe Destefano.png";

const NewHero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="new-hero">
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-title">
            Hi I'm Joe
            <span className="title-role">
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "Building Digital Experiences",
                  "Crafting Clean Code",
                  "Turning Ideas into Reality",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="typed-text"
              />
            </span>
          </h1>
          <p className="hero-description">
            Crafting digital experiences with modern web technologies.
            Specialized in building scalable, user-centric applications.
          </p>
          <div className="hero-cta-group">
            <button
              onClick={() => scrollToSection("projects")}
              className="cta-primary"
            >
              View Projects <FaArrowRight className="arrow-icon" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cta-secondary"
            >
              Contact Me <FaEnvelope />
            </button>
          </div>
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-content">
          <div className="glowing-hex">
            <div className="hero-image-container">
              <img
                src={profileImage}
                alt="Joe Destefano"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
