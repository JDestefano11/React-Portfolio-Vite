import React from "react";
import {
  FaReact,
  FaAngular,
  FaJs,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaAws,
  FaServer,
  FaDesktop,
} from "react-icons/fa";
import { Suspense, lazy } from "react";
import "./About.css";
import profileImage from "../../images/JoeDestefano(myself).png";
import resumeFile from "../../images/Joseph-Destefano-Front End Developer.pdf";

import profileImage from "../../images/Joe Destefano.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="cyber-grid"></div>
      <div className="cosmic-overlay"></div>

      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        <div className="about-content">
          <div className="about-main">
            <div className="profile-section">
              <Suspense
                fallback={<div className="profile-image-skeleton"></div>}
              >
                <img
                  src={profileImage}
                  alt="Joe Destefano"
                  className="profile-image"
                  loading="lazy"
                />
              </Suspense>

              <div className="profile-content">
                <h2 className="glowing-text">Full Stack Developer</h2>
                <p className="bio-text">
                  I am a full-stack web developer with a passion for building
                  innovative and user-friendly web applications. Through the
                  rigorous curriculum of the CareerFoundry bootcamp, I gained a
                  strong foundation in modern technologies like React, Node.js,
                  and MongoDB. I strive to deliver high-quality solutions that
                  meet the needs of clients and users alike.
                </p>
                <a
                  href={resumeFile}
                  download="JoeDestefano_Resume.pdf"
                  className="download-resume-btn"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="highlight-cards">
              <div className="highlight-card">
                <h3>Interests</h3>
                <p>
                  Exploring new technologies, collaborating on community-driven
                  software initiatives, traveling, and nature exploration.
                </p>
              </div>

              <div className="highlight-card">
                <h3>Goals</h3>
                <p>
                  Joining a dynamic team to work on innovative projects and
                  create impactful solutions while continuously learning and
                  adapting to new challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h2 className="skills-title">Technical Arsenal</h2>

            <div className="skills-grid">
              <div className="skill-category frontend">
                <h3>Frontend</h3>
                <div className="skill-items">
                  {[
                    { icon: FaReact, name: "React" },
                    { icon: FaAngular, name: "Angular" },
                    { icon: FaJs, name: "JavaScript" },
                    { icon: FaHtml5, name: "HTML/CSS" },
                    { icon: FaDesktop, name: "Responsive Design" },
                  ].map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <skill.icon />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category backend">
                <h3>Backend</h3>
                <div className="skill-items">
                  {[
                    { icon: FaNodeJs, name: "Node.js" },
                    { icon: FaDatabase, name: "MongoDB" },
                    { icon: FaServer, name: "RESTful API" },
                    { icon: FaAws, name: "AWS" },
                    { icon: FaGitAlt, name: "Git" },
                  ].map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <skill.icon />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
