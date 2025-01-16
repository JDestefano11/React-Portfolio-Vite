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
  FaPython,
} from "react-icons/fa";
import { Suspense, lazy } from "react";
import "./About.css";
import resumeFile from "../../images/Front End Developer Joe Destefano Resume.pdf";

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
                  innovative and user-friendly web applications. Before
                  enrolling in the bootcamp, I was self-taught and successfully
                  built several complex websites, including a movie application,
                  a chat application, and two e-commerce stores. These projects
                  provided valuable hands-on experience and helped me refine my
                  skills in full-stack development. My continuous passion for
                  learning and creating drives me to deliver high-quality,
                  user-centric solutions that meet both client and user needs.
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
                  I enjoy exploring new technologies and staying up to date with
                  the latest trends in web development. I am also passionate
                  about collaborating on community-driven software initiatives,
                  where I can contribute to open-source projects and learn from
                  others. Outside of work, I love traveling to new places,
                  immersing myself in different cultures, and gaining fresh
                  perspectives. During my travels, I continue to code, using the
                  opportunity to work on projects and refine my skills while
                  exploring the world. Additionally, I find peace and
                  inspiration in nature, often spending time hiking and
                  exploring the outdoors to recharge and gain new insights.
                </p>
              </div>

              <div className="highlight-card">
                <h3>Goals</h3>
                <p>
                  My goal is to join a dynamic team where I can contribute to
                  innovative projects and help create impactful solutions. I am
                  eager to collaborate with talented professionals, learn from
                  their experiences, and tackle new challenges together. I am
                  committed to continuously improving my coding skills, staying
                  up to date with emerging technologies, and refining my
                  problem-solving abilities. By embracing new challenges and
                  constantly adapting, I aim to grow as a developer and make
                  meaningful contributions to the success of the team and the
                  projects I work on.
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
                    { icon: FaPython, name: "Python" },
                    { icon: FaGitAlt, name: "Git" },
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
                    { icon: FaPython, name: "Python" },
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
