import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/Hero.css";
import joeImage from "../images/Joe.png";

export const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const particles = Array.from({ length: 50 }).map((_, index) => (
    <div
      key={index}
      className="particle"
      style={{
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${10 + Math.random() * 10}s`,
      }}
    ></div>
  ));

  return (
    <section className="hero">
      <div className="particle-container">{particles}</div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="name">
            <ReactTypingEffect
              text={["Joe Destefano"]}
              speed={100}
              eraseDelay={2000}
              typingDelay={500}
              cursorRenderer={(cursor) => (
                <span className="cursor">{cursor}</span>
              )}
              displayTextRenderer={(text) => (
                <span className="typed-text">
                  {text.split("").map((char, i) => (
                    <span
                      key={i}
                      className={
                        i < 3
                          ? "primary-text"
                          : i < 6
                          ? "secondary-text"
                          : "accent-text"
                      }
                      style={{ transition: "color 0.3s ease" }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              )}
            />
          </h1>
          <h2 className="tagline">Front End Developer</h2>
          <p className="bio">
            Passionate about creating innovative web solutions that make a
            difference. Specializing in modern frameworks and clean, efficient
            code.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/JDestefano11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon github" style={{ color: "#39FF14" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/joeadestefano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="icon linkedin"
                style={{ color: "#39FF14" }}
              />
            </a>
            <a
              href="https://x.com/JoeDevstefano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="icon twitter"
                style={{ color: "#39FF14" }}
              />
            </a>
          </div>

          <div className="cta-buttons">
            <a
              href="#contact"
              className="cta-button contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              style={{
                backgroundColor: "#39FF14",
                color: "#2B2B2B",
                border: "2px solid #00FFFF",
                boxShadow: "0 0 15px rgba(57, 255, 20, 0.7)",
              }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="cta-button projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              style={{
                backgroundColor: "#2B2B2B",
                color: "#39FF14",
                border: "2px solid #00FFFF",
              }}
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={joeImage} alt="Joe Destefano" />
        </div>
      </div>
    </section>
  );
};
