import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./HeroSection.css";
import profileImage from "../../images/JoeDestefano(myself).png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="content-wrapper">
          <div className="text-content">
            <h1 className="hero-title">
              <span className="text-light">Hi, I'm</span>
              <TypeAnimation
                sequence={[
                  "Joe Destefano",
                  2000,
                  "A Developer",
                  1500,
                  "A Creator",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                className="highlight"
                repeat={Infinity}
              />
              <span className="text-light">Full Stack Developer</span>
            </h1>
            <p className="hero-subtitle">
              Crafting digital experiences with clean code and creative
              solutions. Specialized in building modern web applications that
              make an impact.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="cta-primary">
                View My Work
              </a>
              <a href="#contact" className="cta-secondary">
                Let's Connect
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">15+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">15+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>
            <div className="hero-social-links">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glowing-hex">
              <img src={profileImage} alt="Joe Destefano" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
