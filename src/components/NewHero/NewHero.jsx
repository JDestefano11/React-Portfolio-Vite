import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from 'react-typed';
import "./NewHero.css";

const profileImage = "/src/images/Joe Destefano.png";

const NewHero = () => {
  return (
    <section className="new-hero">
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Joseph</span>
            <span className="title-role">
              <ReactTyped
                strings={[
                  'Full Stack Developer',
                  'React Specialist',
                  'UI/UX Enthusiast',
                  'Problem Solver'
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
            <button className="cta-primary">
              View Projects <FaArrowRight className="arrow-icon" />
            </button>
            <button className="cta-secondary">
              Contact Me <FaEnvelope />
            </button>
          </div>
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-content">
          <div className="glowing-hex">
            <img src={profileImage} alt="Joseph" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
};

export default NewHero;
