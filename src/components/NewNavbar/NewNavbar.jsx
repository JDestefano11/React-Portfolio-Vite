import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./NewNavbar.css";

const NewNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="header-logo" onClick={() => handleNavigation("home")}>
          <h1 className="logo-text">Joe Destefano</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="header-nav">
          {navLinks.map((link) =>
            location.pathname === "/" ? (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ) : (
              <button
                key={link.to}
                onClick={() => handleNavigation(link.to)}
                className="nav-item"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* Social Links */}
        <div className="header-social">
          <a
            href="https://github.com/JDestefano11"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joeadestefano/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/JoeDestefa56981"
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <IoClose />
          ) : (
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <nav className="mobile-nav">
            {navLinks.map((link) =>
              location.pathname === "/" ? (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="mobile-nav-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <button
                  key={link.to}
                  onClick={() => handleNavigation(link.to)}
                  className="mobile-nav-item"
                >
                  {link.label}
                </button>
              )
            )}
            <div className="mobile-social">
              <a
                href="https://github.com/JDestefano11"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-item"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joeadestefano/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-item"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/JoeDestefa56981"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-item"
              >
                <FaTwitter />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NewNavbar;
