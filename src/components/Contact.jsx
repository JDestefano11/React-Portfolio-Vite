import React, { useRef } from "react";
import "../styles/Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const waveVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        type: "spring",
        damping: 15,
        stiffness: 70,
      },
    },
  };

  return (
    <div id="contact" ref={ref} className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          {[
            "Contact Information",
            "Email: joedestefano.webdev@gmail.com",
            "Phone: 732-865-6856",
            "Want me on your team?",
          ].map((text, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={waveVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {index === 0 ? (
                <h2 className="contact-info-title">{text}</h2>
              ) : index === 3 ? (
                <h3>{text}</h3>
              ) : (
                <p>{text}</p>
              )}
            </motion.div>
          ))}
          <motion.p
            custom={4}
            variants={waveVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            I am currently seeking opportunities in the state of New Jersey and
            am open to relocation as needed. Additionally, I am available for
            remote and freelance work. I ensure prompt responses within 48
            business hours.
          </motion.p>
          <motion.p
            custom={5}
            variants={waveVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Time Zone: Eastern Standard Time (EST)
          </motion.p>
          <motion.div
            className="social-links"
            custom={6}
            variants={waveVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.a
              href="https://github.com/JDestefano11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="icon github" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/joseph-destefano-7a1b21283"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="icon linkedin" />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="contact-content"
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h1 className="contact-title">Contact Me</h1>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <motion.button
                type="submit"
                className="cta-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
