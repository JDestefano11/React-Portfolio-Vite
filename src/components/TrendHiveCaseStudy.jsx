import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/TrendHiveCaseStudy.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
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
            Trend Hive
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
          <p>
            Trend Hive is a cutting-edge e-commerce platform designed to provide
            a seamless shopping experience for fashion enthusiasts of all ages.
            Our mission is to be the premier destination for high-quality,
            stylish clothing for the entire family, offering a curated selection
            of the latest trends and timeless classics.
          </p>
        </motion.section>

        <motion.section
          id="challenge"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Challenge</h2>
          <p>
            The primary challenge was developing a dynamic cart system capable
            of handling complex user interactions, including adding and updating
            items in various sizes and quantities. Ensuring accurate reflection
            of item quantities and facilitating easy removal without affecting
            other items proved to be particularly demanding.
          </p>
        </motion.section>

        <motion.section
          id="solution"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Solution</h2>
          <p>
            We implemented a robust solution by restructuring the cart data
            management logic and introducing specialized functions for quantity
            updates and item removal. This approach involved:
          </p>
          <ul>
            <li>Dynamic cart data construction using React's useEffect hook</li>
            <li>
              Precise handling of quantity changes through a dedicated function
            </li>
            <li>Efficient item removal process maintaining cart integrity</li>
          </ul>
        </motion.section>

        <motion.section
          id="tech-stack"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Technology Stack</h2>
          <ul className="tech-list">
            <li>React with React Bootstrap</li>
            <li>Express.js and Node.js</li>
            <li>MongoDB</li>
            <li>Passport.js</li>
            <li>Parcel</li>
          </ul>
        </motion.section>

        <motion.section
          id="features"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>User Authentication and Authorization</li>
            <li>Product Catalog with Search and Filter Functionality</li>
            <li>Shopping Cart Management</li>
            <li>Secure Checkout Process</li>
            <li>Order Tracking</li>
            <li>User Reviews and Ratings</li>
            <li>Admin Panel</li>
            <li>Payment Integration</li>
          </ul>
        </motion.section>

        <motion.section
          id="process"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Development Process</h2>
          <ol className="process-list">
            <li>
              <h3>Planning and Setup</h3>
              <p>
                Established project structure with React, implemented navigation
                using react-router-dom, and set up global state management with
                Context API. Initialized version control with Git and planned
                core features.
              </p>
            </li>
            <li>
              <h3>UI/UX Design</h3>
              <p>
                Designed reusable components (Navbar, Footer, Product Cards)
                using Tailwind CSS for a responsive, mobile-first experience.
              </p>
            </li>
            <li>
              <h3>Frontend Development</h3>
              <p>
                Implemented routing and state management. Integrated product and
                category data using local files or mock data.
              </p>
            </li>
            <li>
              <h3>Cart and Checkout Implementation</h3>
              <p>
                Developed cart functionality within the Context file and created
                a checkout flow for seamless user experience.
              </p>
            </li>
            <li>
              <h3>Testing and Deployment</h3>
              <p>
                Conducted thorough debugging and deployed the frontend to
                Netlify/Vercel for optimal scalability.
              </p>
            </li>
          </ol>
        </motion.section>

        <motion.section
          id="results"
          variants={itemVariants}
          className="animated-section"
        >
          <h2>Results</h2>
          <p>
            Trend Hive has successfully launched as a comprehensive e-commerce
            solution, featuring:
          </p>
          <ul>
            <li>
              A dynamic cart management system ensuring data integrity and user
              satisfaction
            </li>
            <li>
              A smooth, responsive review carousel enhancing the browsing
              experience
            </li>
            <li>
              Secure authentication, an extensive product catalog, and efficient
              checkout processes
            </li>
            <li>
              Optimized development process resulting in timely delivery and
              high-quality output
            </li>
            <li>Scalable deployment facilitating efficient performance</li>
          </ul>
          <p>
            These achievements have positioned Trend Hive as a leading choice
            for family apparel shopping.
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
