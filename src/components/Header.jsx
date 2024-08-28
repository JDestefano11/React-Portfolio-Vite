import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/JD (2).png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setActiveSection(location.state.scrollTo);
    }
  }, [location]);

  const isActive = (section) => activeSection === section;

  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <img src={Logo} alt="Joe Destefano Logo" className="logo-image" />
        </div>
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to="/"
                  state={{ scrollTo: section }}
                  onClick={toggleMenu}
                  className={isActive(section) ? "active" : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
            <li>
              <a href="/Resume-JoeD.pdf" download="Resume-JoeD.pdf">
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
