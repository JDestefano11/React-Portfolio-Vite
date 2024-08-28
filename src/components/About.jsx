import React from "react";
import { motion } from "framer-motion";
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
  FaCloudDownloadAlt,
  FaGit,
} from "react-icons/fa";
import "../styles/About.css";
import Joe from "../images/JoePic.png";
import Code from "../images/Coding.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const About = () => {
  return (
    <motion.section
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div className="about-header" variants={itemVariants}>
        <img src={Joe} alt="Joe Destefano" className="profile-image" />
        <div className="header-content">
          <h1 className="name">Joe Destefano</h1>
          <h2 className="title">Full-Stack Web Developer</h2>
        </div>
      </motion.div>

      <motion.div className="about-content" variants={itemVariants}>
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="description">
            Hello, and welcome to my portfolio! I am a full-stack web developer
            with a passion for building innovative and user-friendly web
            applications. Through the rigorous curriculum of the CareerFoundry
            bootcamp, I gained a strong foundation in modern technologies like
            React, Node.js, and MongoDB. I strive to deliver high-quality
            solutions that meet the needs of clients and users alike.
          </p>
        </div>
      </motion.div>

      <motion.div className="interests-goals" variants={itemVariants}>
        <div className="interests">
          <h2 className="section-title">Interests</h2>
          <p className="description">
            In my free time, I am always exploring new technologies to keep up
            with the latest industry trends. I find joy in collaborating on
            community-driven software initiatives and pushing the boundaries of
            what's possible in the digital world. Outside of tech, I have a deep
            passion for traveling and nature exploration.
          </p>
        </div>
        <div className="goals">
          <h2 className="section-title">Goals</h2>
          <p className="description">
            I am eager to join a dynamic team where I can work on innovative
            projects and further develop my skills as a developer. My primary
            goal is to leverage my expertise in technology to create impactful
            solutions that make a difference. I am committed to continuously
            learning and adapting to new challenges in the ever-evolving tech
            industry.
          </p>
        </div>
        <motion.img
          src={Code}
          alt="Coding Setup"
          className="coding-image"
          variants={itemVariants}
        />
      </motion.div>

      <motion.h2 className="section-title skills-title" variants={itemVariants}>
        Skills
      </motion.h2>
      <motion.div className="skill-grid" variants={containerVariants}>
        <motion.div className="skill-box" variants={itemVariants}>
          <h4>Front-end</h4>
          <ul>
            {[
              { icon: FaReact, text: "React" },
              { icon: FaAngular, text: "Angular" },
              { icon: FaJs, text: "JavaScript" },
              { icon: FaHtml5, text: "HTML/CSS" },
              { icon: FaDesktop, text: "Responsive Design" },
              { icon: FaCloudDownloadAlt, text: "API Integration" },
              { icon: FaGit, text: "Git" },
            ].map((skill, index) => (
              <motion.li key={index} variants={itemVariants}>
                <skill.icon /> {skill.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="skill-box" variants={itemVariants}>
          <h4>Back-end</h4>
          <ul>
            {[
              { icon: FaNodeJs, text: "Node.js" },
              { icon: FaDatabase, text: "MongoDB" },
              { icon: FaGitAlt, text: "Git" },
              { icon: FaAws, text: "AWS" },
              { icon: FaServer, text: "RESTful API" },
            ].map((skill, index) => (
              <motion.li key={index} variants={itemVariants}>
                <skill.icon /> {skill.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
