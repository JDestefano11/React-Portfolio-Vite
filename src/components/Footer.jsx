import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h2>Joe Destefano</h2>
          <p className="tagline">Web Developer</p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Explore</h2>
          <ul>
            <li>
              <Link to="/" state={{ scrollTo: "home" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "about" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "projects" }}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "contact" }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Get in Touch</h2>
          <p className="email-container">
            <FaEnvelope className="email-icon" />
            <span className="email">joedestefano.webdev@gmail.com</span>
          </p>
          <div className="social-links">
            <a
              href="https://github.com/JDestefano11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon github" />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-destefano-7a1b21283"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a
              href="https://x.com/JoeDevstefano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="social-icon twitter" />
            </a>
          </div>
        </div>
        <div className="footer-section resume">
          <div className="footer-section resume">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Joseph_Destefano_-_Front_end_Developer (1).pdf";
                link.download =
                  "/Joseph_Destefano_-_Front_end_Developer (1).pdf";
                link.click();
              }}
              className="resume-button"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
