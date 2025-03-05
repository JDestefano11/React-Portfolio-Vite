import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import joeResume from "../../images/Joe Destefano Web Developer Resume.pdf";
import "./About.css";
import portfolioImage from "../../images/Joe Portfolio Pic.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "goals", label: "Goals" },
    { id: "why", label: "Why Choose Me" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h1 className="title-text">Crafting Digital Experiences</h1>
        </motion.div>
        <div className="about-content">
          <div className="about-grid">
            <motion.div
              className="about-image-container"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.div
                style={{
                  opacity: isImageLoaded ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <motion.img
                  src={portfolioImage}
                  alt="Joe Destefano"
                  className="about-image"
                  onLoad={() => setIsImageLoaded(true)}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                />
              </motion.div>
              <motion.a
                href={joeResume}
                download="Joe_Destefano_Resume.pdf"
                className="download-resume"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFileDownload />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="about-info"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.div
                className="about-tabs"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {tabs.map(({ id, label }, index) => (
                  <motion.button
                    key={id}
                    className={`tab-button ${activeTab === id ? "active" : ""}`}
                    onClick={() => setActiveTab(id)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {label}
                  </motion.button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                    className="tab-content"
                  >
                    <motion.h2 variants={itemVariants}>About Me</motion.h2>
                    <motion.p variants={itemVariants}>
                      I'm a passionate Full Stack Developer with a strong focus
                      on building engaging, scalable, and user-centric web
                      applications. With experience in modern JavaScript
                      frameworks like React and expertise in backend
                      development, I bridge the gap between intuitive design and
                      powerful functionality. I thrive in Agile environments,
                      embracing collaboration and continuous learning to stay
                      ahead in the ever-evolving tech industry. Whether it's
                      optimizing performance, crafting seamless UI experiences,
                      or solving complex problems, I'm dedicated to delivering
                      innovative digital solutions
                    </motion.p>
                  </motion.div>
                )}

                {activeTab === "goals" && (
                  <motion.div
                    key="goals"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                    className="tab-content"
                  >
                    <motion.h2 variants={itemVariants}>My Goals</motion.h2>
                    <motion.p variants={itemVariants}>
                      My goal is to grow as a developer while creating
                      impactful, high-quality web applications. I strive to:
                    </motion.p>
                    <motion.ul
                      className="goals-list"
                      variants={containerVariants}
                    >
                      {[
                        "Build scalable, efficient, and accessible solutions",
                        "Continuously master new technologies and frameworks",
                        "Deliver seamless user experiences through optimized UI/UX",
                        "Collaborate with like-minded professionals and contribute to open-source projects",
                        "Develop leadership skills to mentor and guide future developers",
                      ].map((goal, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          whileHover={{ x: 10, transition: { duration: 0.2 } }}
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
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                    className="tab-content"
                  >
                    <motion.h2 variants={itemVariants}>Why Choose Me</motion.h2>
                    <motion.p variants={itemVariants}>
                      A dedicated developer focused on delivering high-quality
                      solutions.
                    </motion.p>
                    <motion.ul
                      className="why-choose-list"
                      variants={containerVariants}
                    >
                      {[
                        " Full-Stack Expertise: Proficient in React, Node.js, and RESTful APIs, ensuring seamless front-to-back-end integration.",
                        " Problem Solver: Strong analytical skills to tackle complex challenges and optimize performance.",
                        " Detail-Oriented & User-Focused: Passionate about writing clean, maintainable code that enhances user experiences.",
                        " Agile & Team-Oriented: Experienced in Agile methodologies, thriving in collaborative environments.",
                        " Passion for Growth: Committed to continuous learning, staying updated on the latest tech trends.",
                      ].map((reason, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          whileHover={{ x: 10, transition: { duration: 0.2 } }}
                        >
                          {reason}
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
