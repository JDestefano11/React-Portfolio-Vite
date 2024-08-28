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
            Trend Hive is a cutting-edge e-commerce store dedicated to
            delivering a seamless and enjoyable shopping experience for fashion
            enthusiasts of all ages. Our mission is to be the premier
            destination for high-quality, stylish clothing for the entire
            family. We offer a curated selection that includes the latest trends
            and timeless classics, ensuring that every family member finds
            something they love.
          </p>
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
          <p>
            The solution involved restructuring the logic for managing cartData
            in the useEffect hook and implementing specific functions for
            quantity updates and item removal.
          </p>
          <div className="solution-details">
            <h3>Dynamic Cart Data Construction:</h3>
            <p>
              The useEffect hook dynamically constructs the cartData array by
              iterating through cartItems. It ensures that every item is
              correctly associated with its respective size and quantity. By
              iterating through the cartItems object, the logic filters out
              items with zero quantity to avoid displaying unnecessary entries
              in the cart.
            </p>
            <p>
              This approach ensures that the cart state is always consistent
              with the items selected by the user, updating correctly whenever
              items are added, updated, or removed.
            </p>
            <h3>Handling Quantity Changes:</h3>
            <p>
              The handleQuantityChange function ensures that any quantity
              changes (either through user input or programmatically) correctly
              update the cart context. It converts the input into a number and
              calls the updateCart function from the ShopContext.
            </p>
            <p>
              This ensures that the cart remains in sync with user actions and
              reflects the correct quantities for each item size.
            </p>
            <h3>Removing Items:</h3>
            <p>
              The removeCartItem function ensures that when an item is removed,
              the size-specific quantity is correctly handled and the cartItems
              state is updated appropriately in the context.
            </p>
            <p>
              This implementation ensures that removing an item from the cart
              removes the correct item and size combination while keeping the
              rest of the cart intact.
            </p>
          </div>
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
            The dynamic cart management system successfully tracks user
            selections and adjusts quantities, enhancing cart integrity and user
            satisfaction. The review carousel now provides a smooth and
            responsive browsing experience with adaptable display and seamless
            animations. Trend Hive features a comprehensive set of
            functionalities, including secure authentication, an extensive
            product catalog, and efficient checkout processes. The development
            process was optimized, ensuring timely delivery and high quality.
            Deployment to scalable platforms like Netlify or Vercel has
            facilitated efficient performance and established Trend Hive as a
            top choice for family apparel.
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
