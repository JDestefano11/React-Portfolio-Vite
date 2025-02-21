import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import "./NewHero.css";
import profileImage from "../../images/Joe Destefano.png";

const NewHero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="new-hero">
      <div className="hero-content-wrapper">
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi I'm Joe
            <motion.span 
              className="title-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "Building Digital Experiences",
                  "Crafting Clean Code",
                  "Turning Ideas into Reality",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="typed-text"
                startDelay={1200}
              />
            </motion.span>
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Crafting digital experiences with modern web technologies.
            Specialized in building scalable, user-centric applications.
          </motion.p>
          <motion.div 
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="cta-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects <FaArrowRight className="arrow-icon" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="cta-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me <FaEnvelope />
            </motion.button>
          </motion.div>
          <motion.div 
            className="stats-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects</span>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            >
              <span className="stat-number">30+</span>
              <span className="stat-label">Technologies</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual-content"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="glowing-hex">
            <div className="hero-image-container">
              <motion.img
                src={profileImage}
                alt="Joe Destefano"
                className="hero-image"
                initial={{ filter: "blur(10px) brightness(0.5) grayscale(100%)" }}
                animate={{ filter: "blur(0px) brightness(1) grayscale(100%)" }}
                whileHover={{ filter: "blur(0px) brightness(1) grayscale(0%)" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHero;
