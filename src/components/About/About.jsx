import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import joeResume from "../../images/Joe Destefano Web Developer Resume.pdf";
import "./About.css";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaPhp,
  FaPython,
  FaAngular,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiPython,
  SiRedux,
  SiDjango,
  SiMysql,
} from "react-icons/si";
import portfolioImage from "../../images/Joe Portfolio Pic.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleSlideChange = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.offsetWidth;
    const newPosition =
      direction === "next"
        ? slideWidth * (currentSlide + 1)
        : slideWidth * (currentSlide - 1);

    slider.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });

    setCurrentSlide(direction === "next" ? 1 : 0);
  };

  const handleDotClick = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.offsetWidth;
    slider.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });

    setCurrentSlide(index);
  };

  const frontendSkills = [
    { name: "React", icon: <FaReact />, level: 90 },
    { name: "JavaScript", icon: <SiJavascript />, level: 85 },
    { name: "TypeScript", icon: <SiTypescript />, level: 80 },
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "Redux", icon: <SiRedux />, level: 85 },
    { name: "Tailwind", icon: <SiTailwindcss />, level: 90 },
    { name: "Angular", icon: <FaAngular />, level: 80 },
    { name: "Git", icon: <FaGitAlt />, level: 85 },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, level: 85 },
    { name: "Express", icon: <SiExpress />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 85 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
    { name: "Python", icon: <FaPython />, level: 85 },
    { name: "Django", icon: <SiDjango />, level: 80 },
    { name: "PHP", icon: <FaPhp />, level: 75 },
    { name: "MySQL", icon: <SiMysql />, level: 85 },
    { name: "Database Management", icon: <FaDatabase />, level: 90 },
    { name: "REST APIs", icon: <FaCode />, level: 85 },
  ];

  const gridStyles = {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    width: "100%",
  };
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-left-column">
            <div className="about-image-container">
              <div className="image-wrapper">
                <div className="geometric-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
                <img
                  src={portfolioImage}
                  alt="Joe Destefano"
                  className="profile-image"
                />
                <div className="image-overlay"></div>
              </div>
            </div>

            <motion.a
              href={joeResume}
              download
              className="resume-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload className="button-icon" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          <motion.div
            className="about-content"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <h1 className="title">
              Crafting Digital <span className="highlight">Experiences</span>
            </h1>

            <div className="tab-navigation">
              <button
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                About Me
              </button>
              <button
                className={activeTab === "bring" ? "active" : ""}
                onClick={() => setActiveTab("bring")}
              >
                What I Bring
              </button>
              <button
                className={activeTab === "skills" ? "active" : ""}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
            </div>

            <div className="tab-content">
              <AnimatePresence mode="wait">
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="about-slider-container"
                  >
                    <div className="about-slider" ref={sliderRef}>
                      <div className="about-slide">
                        <p className="description">
                          As a passionate Full Stack Developer, I blend
                          creativity with technical expertise to build immersive
                          web experiences. My journey in web development is
                          driven by a constant pursuit of innovation and
                          excellence.
                        </p>

                        <p className="description">
                          With expertise in modern web technologies and a keen
                          eye for design, I create seamless digital experiences
                          that engage and inspire.
                        </p>
                      </div>

                      <div className="about-slide">
                        <p className="description">
                          My approach combines technical precision with creative
                          problem-solving, ensuring each project not only meets
                          but exceeds expectations. I'm constantly learning and
                          adapting to new technologies.
                        </p>

                        <p className="description">
                          I believe in writing clean, maintainable code and
                          creating intuitive user experiences that make a
                          lasting impact.
                        </p>
                      </div>
                    </div>

                    <div className="slider-controls">
                      <div className="slider-dots">
                        <span
                          className={`dot ${
                            currentSlide === 0 ? "active" : ""
                          }`}
                          onClick={() => handleDotClick(0)}
                        ></span>
                        <span
                          className={`dot ${
                            currentSlide === 1 ? "active" : ""
                          }`}
                          onClick={() => handleDotClick(1)}
                        ></span>
                      </div>
                      <div className="slider-arrows">
                        <button
                          className="arrow-btn prev"
                          onClick={() => handleSlideChange("prev")}
                          disabled={currentSlide === 0}
                        >
                          ←
                        </button>
                        <button
                          className="arrow-btn next"
                          onClick={() => handleSlideChange("next")}
                          disabled={currentSlide === 1}
                        >
                          →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "bring" && (
                  <motion.div
                    key="bring"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="highlight-box"
                  >
                    <h4>What I Bring to the Table:</h4>
                    <ul>
                      <li>Full-stack expertise in modern web technologies</li>
                      <li>Creative problem-solving and innovative solutions</li>
                      <li>Strong focus on user experience and design</li>
                      <li>Agile development and continuous learning</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="skills-grid-container"
                  >
                    <div className="skills-grid" style={gridStyles}>
                      {[...frontendSkills, ...backendSkills].map(
                        (skill, index) => (
                          <motion.div
                            key={skill.name}
                            className="skill-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-info">
                              <h3>{skill.name}</h3>
                              <div className="skill-bar-bg">
                                <motion.div
                                  className="skill-bar-fill"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: 0.2 }}
                                ></motion.div>
                              </div>
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
