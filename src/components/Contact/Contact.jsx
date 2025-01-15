import React, { useState, useMemo, useCallback, Suspense } from "react";
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
    <div className="contact-container">
      <div className="cyber-grid"></div>
      <div className="cosmic-overlay"></div>
      <Suspense fallback={<div>Loading network icon...</div>}>
        <BiNetworkChart className="network-icon" />
      </Suspense>

      <div className="contact-content">
        <div className="contact-header">
          <Suspense fallback={<div>Loading sparkle icon...</div>}>
            <HiSparkles className="spark-icon" />
          </Suspense>
          <h1>Let's Create Something Extraordinary</h1>
          <p className="response-time">
            <Suspense fallback={<div>Loading clock icon...</div>}>
              <FaClock className="clock-icon pulse" />
            </Suspense>
            Average Response Time:{" "}
            <span className="contact-highlight">4 Hours</span>
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Ready to Transform Your Ideas into Reality?</h2>
            <p>Let's collaborate and build something amazing together!</p>

            <div className="contact-stats">
              <div className="contact-stat-item">
                <Suspense fallback={<div>Loading chart icon...</div>}>
                  <FaChartLine className="contact-stat-icon" />
                </Suspense>
                <div className="contact-stat-text">
                  <h3>Project Success Rate</h3>
                  <span>98%</span>
                </div>
              </div>
              <div className="contact-stat-item">
                <Suspense fallback={<div>Loading headset icon...</div>}>
                  <FaHeadset className="contact-stat-icon" />
                </Suspense>
                <div className="contact-stat-text">
                  <h3>Communication</h3>
                  <span>24/7</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <Suspense fallback={<div>Loading GitHub icon...</div>}>
                  <FaGithub />
                </Suspense>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <Suspense fallback={<div>Loading LinkedIn icon...</div>}>
                  <FaLinkedin />
                </Suspense>
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <div className="form-highlight"></div>
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <div className="form-highlight"></div>
            </div>

            <div className="form-group">
              <select
                value={formData.contactReason}
                onChange={(e) =>
                  setFormData({ ...formData, contactReason: e.target.value })
                }
                required
              >
                <option value="">Select Reason for Contact</option>
                <option value="project">Project Collaboration</option>
                <option value="consultation">Technical Consultation</option>
                <option value="job">Job Opportunity</option>
                <option value="mentorship">Mentorship</option>
                <option value="other">Other</option>
              </select>
              <div className="form-highlight"></div>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
              <div className="form-highlight"></div>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <Suspense fallback={<div>Loading sparkle...</div>}>
                <HiSparkles className="btn-sparkle" />
              </Suspense>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
