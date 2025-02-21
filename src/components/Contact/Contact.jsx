import React, { useState, useMemo, useCallback, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// Lazy load icons to improve initial load speed
const FaRocket = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaRocket }))
);

const FaClock = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaClock }))
);

const FaEnvelope = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaEnvelope }))
);

const FaGithub = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaGithub }))
);

const FaLinkedin = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaLinkedin }))
);

const FaCode = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaCode }))
);

const FaBrain = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaBrain }))
);

const FaHandshake = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaHandshake }))
);

const FaChartLine = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaChartLine }))
);

const FaHeadset = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaHeadset }))
);

const HiSparkles = React.lazy(() =>
  import("react-icons/hi").then((module) => ({ default: module.HiSparkles }))
);

const BiNetworkChart = React.lazy(() =>
  import("react-icons/bi").then((module) => ({
    default: module.BiNetworkChart,
  }))
);

const Contact = () => {
  emailjs.init("KWFeCFvWMANpOAmY6");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactReason: "",
    message: "",
  });

  const reasons = useMemo(
    () => [
      {
        icon: <FaCode />,
        title: "Custom Development",
        text: "Need a unique web solution? Let's build something extraordinary together.",
      },
      {
        icon: <FaBrain />,
        title: "Technical Consultation",
        text: "Get expert insights on your project architecture and tech stack.",
      },
      {
        icon: <FaHandshake />,
        title: "Collaboration",
        text: "Looking for a skilled developer for your team? Let's connect.",
      },
    ],
    []
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const templateParams = {
        to_email: "joedestefano.webdev@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        contact_reason: formData.contactReason,
        message: formData.message,
      };
      emailjs
        .send(
          "service_qyxnlyt",
          "template_naz502g",
          templateParams,
          "KWFeCFvWMANpOAmY6"
        )
        .then(() => {
          setFormData({ name: "", email: "", contactReason: "", message: "" });
          alert("Message sent successfully! I'll get back to you soon.");
        })
        .catch((error) => {
          console.error("Error sending message:", error);
          alert("Failed to send message. Please try again.");
        });
    },
    [formData]
  );

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="cyber-grid"></div>
      <div className="cosmic-overlay"></div>
      <Suspense fallback={<div>Loading network icon...</div>}>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BiNetworkChart className="network-icon" />
        </motion.div>
      </Suspense>

      <motion.div 
        className="contact-content"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="contact-header"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's Create Something Extraordinary
          </motion.h1>
          <motion.p 
            className="response-time"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Suspense fallback={<div>Loading clock icon...</div>}>
              <FaClock className="clock-icon pulse" />
            </Suspense>
            Average Response Time:{" "}
            <span className="contact-highlight">4 Hours</span>
          </motion.p>
        </motion.div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div 
              className="reason-card" 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="reason-icon"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                {reason.icon}
              </motion.div>
              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              >
                {reason.title}
              </motion.h3>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
              >
                {reason.text}
              </motion.p>
              <div className="card-glow"></div>
            </motion.div>
          ))}
        </div>

        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Ready to Transform Your Ideas into Reality?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Let's collaborate and build something amazing together!
            </motion.p>

            <motion.div 
              className="contact-stats"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div 
                className="contact-stat-item"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Suspense fallback={<div>Loading chart icon...</div>}>
                  <FaChartLine className="contact-stat-icon" />
                </Suspense>
                <div className="contact-stat-text">
                  <h3>Project Success Rate</h3>
                  <span>98%</span>
                </div>
              </motion.div>
              <motion.div 
                className="contact-stat-item"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Suspense fallback={<div>Loading headset icon...</div>}>
                  <FaHeadset className="contact-stat-icon" />
                </Suspense>
                <div className="contact-stat-text">
                  <h3>Communication</h3>
                  <span>24/7</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="social-links"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="https://github.com/JDestefano11"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Suspense fallback={<div>Loading GitHub icon...</div>}>
                  <FaGithub />
                </Suspense>
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/joeadestefano/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Suspense fallback={<div>Loading LinkedIn icon...</div>}>
                  <FaLinkedin />
                </Suspense>
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="form-group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <select
                value={formData.contactReason}
                onChange={(e) =>
                  setFormData({ ...formData, contactReason: e.target.value })
                }
                required
              >
                <option value="">Select Reason for Contact</option>
                <option value="Custom Development">Custom Development</option>
                <option value="Technical Consultation">
                  Technical Consultation
                </option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>

            <motion.div 
              className="form-group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </motion.div>

            <motion.button 
              type="submit" 
              className="submit-btn"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <span>Send Message</span>
              <Suspense fallback={<div>Loading sparkle...</div>}>
                <HiSparkles className="btn-sparkle" />
              </Suspense>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
