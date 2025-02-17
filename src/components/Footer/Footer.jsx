import React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
import "./Footer.css";
import resume from "../../images/Joe Destefano Web Developer Resume.pdf";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavigation = (to) => {
    if (!isHomePage) {
      navigate(`/#${to}`);
      setTimeout(() => {
        const element = document.getElementById(to);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const NavLink = ({ to, children }) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          offset={-100}
          className="nav-link"
          spy={true}
          activeClass="active"
        >
          {children}
        </ScrollLink>
      );
    }
    return (
      <div
        onClick={() => handleNavigation(to)}
        className="nav-link"
        style={{ cursor: "pointer" }}
      >
        {children}
      </div>
    );
  };

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
              {isHomePage ? (
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="footer-btn primary"
                  spy={true}
                >
                  <span>Let's Talk</span>
                  <FaArrowRight />
                </ScrollLink>
              ) : (
                <div
                  onClick={() => handleNavigation("contact")}
                  className="footer-btn primary"
                  style={{ cursor: "pointer" }}
                >
                  <span>Let's Talk</span>
                  <FaArrowRight />
                </div>
              )}
              <a
                href={resume}
                download="Joe_Resume.pdf"
                className="footer-btn secondary"
              >
                <FaDownload />
                <span>Resume</span>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="nav-group">
              <h4>Navigation</h4>
              <NavLink to="home">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="projects">Projects</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
          </div>

          <div className="footer-connect">
            <div className="connect-container">
              <h4>Connect</h4>
              <div className="connect-info">
                <div className="info-item">
                  <FaEnvelope />
                  <span>joedestefano.webdev@gmail.com</span>
                </div>
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>New York, NY</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/JDestefano11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/joeadestefano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/JoeDestefa56981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
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
