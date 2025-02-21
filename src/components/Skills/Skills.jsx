import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaPhp, FaAngular } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiPostgresql, SiTypescript, SiDjango, SiMysql, SiExpress, SiRedux } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: FaReact, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 85 },
    { name: 'JavaScript', icon: SiJavascript, level: 90 },
    { name: 'Angular', icon: FaAngular, level: 80 },
    { name: 'Redux', icon: SiRedux, level: 85 },
    { name: 'CSS3', icon: BiCodeAlt, level: 90 },
    { name: 'Tailwind', icon: SiTailwindcss, level: 85 },
    { name: 'Python', icon: FaPython, level: 85 },
  ];

  const backendSkills = [
    { name: 'Django', icon: SiDjango, level: 85 },
    { name: 'MySQL', icon: SiMysql, level: 85 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
    { name: 'Express', icon: SiExpress, level: 80 },
    { name: 'Node.js', icon: FaNodeJs, level: 80 },
    { name: 'Python', icon: FaPython, level: 85 },
    { name: 'PHP', icon: FaPhp, level: 75 },
    { name: 'Database Management', icon: BsDatabase, level: 85 },
    { name: 'REST APIs', icon: BiCodeAlt, level: 90 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h1 className="title-text">Technical Expertise</h1>
        </div>

        <div className="skills-container">
          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <div className="category-header">
              <h2>Frontend Development</h2>
            </div>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, translateY: 20 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="skill-icon">
                    <skill.icon />
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <div className="skill-bar-container">
                      <motion.div 
                        className="skill-bar"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="skills-category"
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
          >
            <div className="category-header">
              <h2>Backend Development</h2>
            </div>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, translateY: 20 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="skill-icon">
                    <skill.icon />
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <div className="skill-bar-container">
                      <motion.div 
                        className="skill-bar"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
