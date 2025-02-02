import React, { useState, useEffect } from 'react';
import './About.css';
import { FaCode, FaLaptopCode, FaBrain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImage from '../../images/Joe Destefano.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const boldClaims = [
    {
      text: "I don't just code; I craft digital experiences that resonate.",
      icon: <FaCode />,
      delay: 0.2
    },
    {
      text: "I believe technology should feel human, not just functional.",
      icon: <FaLaptopCode />,
      delay: 0.4
    },
    {
      text: "I'm obsessed with turning complex problems into elegant solutions.",
      icon: <FaBrain />,
      delay: 0.6
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="background-effects"></div>
      <div className="about-container">
        <div className="top-content">
          <motion.div 
            className="text-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1 className="main-title">
              <span className="highlight-text">I'm Not Your Average</span>
              <br />
              <span className="role-text">Developer</span>
            </motion.h1>

            <motion.p 
              className="intro-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              While others see lines of code, I see opportunities to create 
              something extraordinary. My mission is to transform ideas into 
              immersive digital experiences that leave a lasting impression.
            </motion.p>
          </motion.div>

          <motion.div 
            className="visual-section"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-image-container">
              <motion.img
                src={profileImage}
                alt="Profile"
                className="profile-image"
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="claims-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {boldClaims.map((claim, index) => (
            <motion.div
              key={index}
              className="claim-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: claim.delay + 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="claim-icon">{claim.icon}</div>
              <p>{claim.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="cta-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#contact" className="connect-btn">
            Let's Create Something Amazing
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
