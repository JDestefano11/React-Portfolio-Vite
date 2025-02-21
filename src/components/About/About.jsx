import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import joeResume from "../../images/Joe Destefano Web Developer Resume.pdf";
import "./About.css";
import portfolioImage from "../../images/Joe Portfolio Pic.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-title">
          <h1 className="title-text">Crafting Digital Experiences</h1>
        </div>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-image-container">
              <img src={portfolioImage} alt="Joe Destefano" className="about-image" />
              <a href={joeResume} download="Joe_Destefano_Resume.pdf" className="download-resume">
                <FaFileDownload /> Download Resume
              </a>
            </div>
            
            <div className="about-info">
              <div className="about-tabs">
                <button
                  className={`tab-button ${activeTab === "about" ? "active" : ""}`}
                  onClick={() => setActiveTab("about")}
                >
                  About Me
                </button>
                <button
                  className={`tab-button ${activeTab === "goals" ? "active" : ""}`}
                  onClick={() => setActiveTab("goals")}
                >
                  Goals
                </button>
                <button
                  className={`tab-button ${activeTab === "why" ? "active" : ""}`}
                  onClick={() => setActiveTab("why")}
                >
                  Why Choose Me
                </button>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="tab-content"
                  >
                    <h2>About Me</h2>
                    <p>
                      Hi, I'm Joe Destefano, a passionate Full Stack Developer with a
                      love for creating innovative web solutions. My journey in web
                      development has equipped me with a strong foundation in both
                      frontend and backend technologies.
                    </p>
                    <p>
                      I specialize in building responsive, user-friendly applications
                      using modern technologies like React, Node.js, and various
                      databases. My approach combines technical expertise with creative
                      problem-solving to deliver efficient and scalable solutions.
                    </p>
                  </motion.div>
                )}

                {activeTab === "goals" && (
                  <motion.div
                    key="goals"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="tab-content"
                  >
                    <h2>My Goals</h2>
                    <p>
                      My primary goal is to continue growing as a developer while creating
                      meaningful applications that solve real-world problems. I aim to:
                    </p>
                    <ul className="goals-list">
                      <li>Master modern web technologies and best practices</li>
                      <li>Contribute to innovative projects that push boundaries</li>
                      <li>Collaborate with diverse teams to build impactful solutions</li>
                      <li>Stay current with emerging technologies and trends</li>
                    </ul>
                  </motion.div>
                )}

                {activeTab === "why" && (
                  <motion.div
                    key="why"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="tab-content"
                  >
                    <h2>Why Choose Me</h2>
                    <ul className="why-choose-list">
                      <li>
                        <strong>Technical Expertise:</strong> Proficient in modern web technologies
                        and best practices
                      </li>
                      <li>
                        <strong>Problem Solver:</strong> Creative approach to challenges with
                        efficient solutions
                      </li>
                      <li>
                        <strong>Continuous Learner:</strong> Always staying updated with the
                        latest industry trends
                      </li>
                      <li>
                        <strong>Team Player:</strong> Excellent communication and collaboration
                        skills
                      </li>
                      <li>
                        <strong>Attention to Detail:</strong> Commitment to writing clean,
                        maintainable code
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
