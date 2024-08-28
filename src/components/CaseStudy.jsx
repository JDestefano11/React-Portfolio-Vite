import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/TrendHiveCaseStudy.css";

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

export const TrendHiveCaseStudy = () => {
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
            Innovative E-commerce Solution
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
          <p></p>
        </motion.section>

        <motion.section
          id="challenge"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Challenge </h2>
          <p>
            Handling dynamic cart data when users added or updated items in
            various sizes and quantities turned out to be more challenging than
            expected. The main issue was ensuring that the cart accurately
            reflected the correct quantities for different item sizes and made
            it easy to remove items without affecting others.
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
              "User Authentication and Authorization",
              "Product Catalog with Search and Filter Functionality",
              "Shopping Cart Management",
              "Secure Checkout Process",
              "Order Tracking",
              "User Reviews and Ratings",
              "<Admin Panel",
              "Payment Integration",
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
            {[
              {
                title: "Planning and Setup",
                details:
                  "I set up the project with React, installed react-router-dom for navigation, and used Context for global state management. Version control with Git was established, and core features like product listings and user accounts were planned.",
              },
              {
                title: "UI/UX Design",
                details:
                  "I designed reusable components such as Navbar, Footer, and Product Cards using Tailwind CSS for responsiveness. Key pages were structured for a mobile-first experience.",
              },
              {
                title: "Frontend Development",
                details:
                  "I set up routing with react-router-dom and managed global state with React's Context API. Product and category data were integrated using local files or mock data.",
              },
              {
                title: "Cart and Checkout Implementation",
                details:
                  "I implemented cart functionality within the Context file and set up the checkout flow, allowing users to manage their cart and complete purchases without backend integration.",
              },
              {
                title: "Testing and Deployment",
                details:
                  "I used console.log and breakpoints for debugging, then deployed the front-end to Netlify or Vercel for scalability.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                whileHover={{ scale: 1.05 }}
              >
                <div className="circle">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.details}</p>
              </motion.div>
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
