import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/MoviesFlixCaseStudy.css";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const MoviesFlixCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="case-study"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="header-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            MoviesFlix-Hub
          </motion.h1>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Explore. Discover. Enjoy.
          </motion.p>
        </div>
      </motion.header>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          id="overview"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Project Overview</h2>
          <p>
            MoviesFlix-Hub is a dynamic, React-based client-side application
            designed for movie enthusiasts. This single-page application offers
            a seamless user experience for browsing, searching, and managing
            favorite movies, along with user profile management capabilities.
          </p>
        </motion.section>

        <motion.section
          id="challenge"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Challenge</h2>
          <p>
            Create a responsive, user-friendly platform that integrates with a
            RESTful API backend, provides robust user authentication, and offers
            an intuitive interface for movie exploration and personal list
            management.
          </p>
        </motion.section>

        <motion.section
          id="solution"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Solution</h2>
          <ul id="tech-stack" className="tech-icons">
            {[
              "React with React Bootstrap",
              "Express.js and Node.js",
              "MongoDB",
              "Passport.js",
              "Parcel",
            ].map((tech, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`icon-${tech.split(" ")[0].toLowerCase()}`}></i>
                {tech}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="features"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Key Features</h2>
          <motion.div className="feature-grid">
            {[
              "User registration and authentication",
              "Movie browsing and search",
              "Detailed movie information",
              "Favorite movie list management",
              "User profile management",
              "Responsive design",
              "Genre-based filtering",
              "Form validation",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-box"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="process"
          variants={itemVariants}
          className="animated-section"
        >
          <h2 style={{ marginBottom: "5rem" }}>Development Process</h2>
          <div className="process-container">
            {["Planning", "Design", "Development", "Testing", "Deployment"].map(
              (step, index) => (
                <motion.div
                  key={index}
                  className="process-step"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="circle">{index + 1}</div>
                  <h3>{step}</h3>
                </motion.div>
              )
            )}
          </div>
        </motion.section>

        <motion.section
          id="results"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Results</h2>
          <p>
            MoviesFlix-Hub successfully delivers a feature-rich, user-friendly
            platform for movie enthusiasts. The application's responsive design
            ensures a consistent experience across devices, while the intuitive
            interface allows users to easily navigate, search, and manage their
            movie preferences.
          </p>
        </motion.section>
      </motion.main>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/" state={{ scrollTo: "projects" }} className="back-link">
          Back to Projects
        </Link>
      </motion.div>
    </motion.div>
  );
};
