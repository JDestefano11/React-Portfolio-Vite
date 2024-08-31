import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/MeetAppCaseStudy.css";

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

export const MeetAppCaseStudy = () => {
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
            Meet App
          </motion.h1>
          <motion.p
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Discover and manage events effortlessly.
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
            The Meet App is a web application designed to help users discover
            and keep track of upcoming events. The app provides various features
            to enhance the user experience, such as filtering events by city,
            showing/hiding event details, specifying the number of events to
            display, offline usage capabilities, adding the app as a shortcut to
            the home screen, and displaying charts to visualize event details.
          </p>
        </motion.section>

        <motion.section
          id="challenge"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Challenge</h2>
          <p>
            Create a user-friendly platform for event discovery and management,
            leveraging modern web technologies and practices.
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
              "React",
              "Recharts",
              "Workbox",
              "Jest",
              "React Testing Library",
              "Service Workers",
              "HTML/CSS",
              "JavaScript (ES6+)",
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
              "Filter events by city",
              "Show/hide event details",
              "Specify number of events to display",
              "Offline usage capabilities",
              "Add app as shortcut to home screen",
              "Display charts to visualize event details",
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
            The Meet App successfully delivers a user-friendly platform for
            event discovery and management. The application's responsive design
            ensures a consistent experience across devices, while the intuitive
            interface allows users to easily navigate, search, and manage their
            event preferences.
          </p>
        </motion.section>

        <motion.section
          id="service-worker-challenges"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Service Worker Challenges and Solutions</h2>
          <h3>1. Service Worker Registration and Updates</h3>
          <p>
            <strong>Challenge:</strong> Ensuring that the service worker is
            correctly registered and updated can be tricky. Users might not get
            the latest updates immediately because the service worker controls
            when to update the cache.
          </p>
          <p>
            <strong>Solution:</strong>
          </p>
          <p>
            <strong>Registration:</strong> We ensured the service worker is
            registered correctly in production environments. The{" "}
            <code>src/serviceWorkerRegistration.js</code> file handles this by
            checking the environment and registering the service worker
            accordingly.
          </p>
          <p>
            <strong>Updates:</strong> We implemented a mechanism to notify users
            about new updates. The <code>registerValidSW</code> function in{" "}
            <code>src/serviceWorkerRegistration.js</code> logs a message when
            new content is available and will be used once all tabs are closed.
            We enhanced this by showing a notification or a prompt to the user.
          </p>
          <h3>2. Offline Support</h3>
          <p>
            <strong>Challenge:</strong> Providing a seamless offline experience,
            especially for dynamic content that cannot be precached.
          </p>
          <p>
            <strong>Solution:</strong>
          </p>
          <p>
            <strong>Fallbacks:</strong> We implemented fallbacks for dynamic
            content. For example, we cache API responses and serve them when the
            network is unavailable.
          </p>
          <p>
            <strong>Notifications:</strong> We notify users when they are
            offline and provide a way to retry failed requests once the
            connection is restored.
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
