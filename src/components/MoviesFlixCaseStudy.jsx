import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/MoviesFlixCaseStudy.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
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
          <div className="solution-grid">
            <div className="solution-item">
              <h3>Frontend Development</h3>
              <p>
                React with React Bootstrap for a responsive and interactive user
                interface
              </p>
            </div>
            <div className="solution-item">
              <h3>Backend Development</h3>
              <p>
                Express.js and Node.js for handling API requests and business
                logic
              </p>
            </div>
            <div className="solution-item">
              <h3>Database Solution</h3>
              <p>MongoDB for flexible and scalable data storage</p>
            </div>
            <div className="solution-item">
              <h3>User Authentication</h3>
              <p>
                Passport.js for secure user credential handling and session
                management
              </p>
            </div>
            <div className="solution-item">
              <h3>Build Tool</h3>
              <p>
                Parcel for streamlined development and optimized production
                builds
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="features"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Key Features</h2>
          <ul className="feature-list">
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
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          id="process"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Development Process</h2>
          <div className="process-timeline">
            {[
              {
                title: "Planning and Setup",
                details:
                  "Project setup with React and React Bootstrap, core feature definition",
              },
              {
                title: "UI/UX Design",
                details:
                  "Responsive layout design for movie browsing, search, and user profiles",
              },
              {
                title: "Frontend Development",
                details:
                  "Implementation of user interface, navigation, and state management",
              },
              {
                title: "Backend Integration",
                details:
                  "Development of RESTful API endpoints and frontend-backend connection",
              },
              {
                title: "Testing and Deployment",
                details:
                  "Usability and functionality testing, production optimization and deployment",
              },
            ].map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.details}</p>
                </div>
              </div>
            ))}
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
