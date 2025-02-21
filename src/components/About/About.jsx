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
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="title-text">Crafting Digital Experiences</h1>
        </motion.div>
        <div className="about-content">
          <div className="about-grid">
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.img 
                src={portfolioImage} 
                alt="Joe Destefano" 
                className="about-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <motion.a 
                href={joeResume} 
                download="Joe_Destefano_Resume.pdf" 
                className="download-resume"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFileDownload /> Download Resume
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="about-info"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="about-tabs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {["about", "goals", "why"].map((tab, index) => (
                  <motion.button
                    key={tab}
                    className={`tab-button ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab === "about" ? "About Me" : 
                     tab === "goals" ? "Goals" : 
                     "Why Choose Me"}
                  </motion.button>
                ))}
              </motion.div>

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
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      About Me
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      Hi, I'm Joe Destefano, a passionate Full Stack Developer with a
                      love for creating innovative web solutions. My journey in web
                      development has equipped me with a strong foundation in both
                      frontend and backend technologies.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      I specialize in building responsive, user-friendly applications
                      using modern technologies like React, Node.js, and various
                      databases. My approach combines technical expertise with creative
                      problem-solving to deliver efficient and scalable solutions.
                    </motion.p>
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
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      My Goals
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      My primary goal is to continue growing as a developer while creating
                      meaningful applications that solve real-world problems. I aim to:
                    </motion.p>
                    <motion.ul 
                      className="goals-list"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {[
                        "Master modern web technologies and best practices",
                        "Contribute to innovative projects that push boundaries",
                        "Collaborate with diverse teams to build impactful solutions",
                        "Stay current with emerging technologies and trends"
                      ].map((goal, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        >
                          {goal}
                        </motion.li>
                      ))}
                    </motion.ul>
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
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Why Choose Me
                    </motion.h2>
                    <motion.ul 
                      className="why-choose-list"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {[
                        { title: "Technical Expertise", desc: "Proficient in modern web technologies and best practices" },
                        { title: "Problem Solver", desc: "Creative approach to challenges with efficient solutions" },
                        { title: "Continuous Learner", desc: "Always staying updated with the latest industry trends" },
                        { title: "Team Player", desc: "Excellent communication and collaboration skills" },
                        { title: "Attention to Detail", desc: "Commitment to writing clean, maintainable code" }
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        >
                          <strong>{item.title}:</strong> {item.desc}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
