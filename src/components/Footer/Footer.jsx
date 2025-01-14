import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="cyber-footer">
      <div className="footer-glow-top"></div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-container">
              <h3 className="footer-title">Joe Destefano</h3>
              <div className="title-accent"></div>
            </div>
            <p className="footer-tagline">Full Stack Developer</p>
            <div className="footer-cta">
              <button className="footer-btn primary">
                <span>Let's Talk</span>
                <FaArrowRight />
              </button>
              <button className="footer-btn secondary">
                <FaDownload />
                <span>Resume</span>
              </button>
            </div>
          </div>

          <div className="footer-nav">
            <div className="nav-group">
              <h4>Navigation</h4>
              <Link to="/#home" className="nav-link">
                Home
              </Link>
              <Link to="/#about" className="nav-link">
                About
              </Link>
              <Link to="/#projects" className="nav-link">
                Projects
              </Link>
              <Link to="/#contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>

          <div className="footer-connect">
            <div className="connect-container">
              <h4>Connect</h4>
              <div className="connect-info">
                <div className="info-item">
                  <FaEnvelope />
                  <span>hello@joedestefano.dev</span>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>Boston, MA</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/JDestefano11"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a href="https://linkedin.com" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" className="social-link">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span>Available for opportunities</span>
        </div>
        <div className="copyright">
          <FaCode className="code-icon" />
          <span>Built by Joe Destefano © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
