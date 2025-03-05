import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiBook } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./ProjectSection.css";
import clothonic from "../../images/clothonic.png";
import MoviesFlix from "../../images/Movies.png";
import MeetApp from "../../images/MeetApp.png";
import Sovereign from "../../images/Sovereign.png";
import Remake from "../../images/remake.png";
import clothonicAPI from "../../images/Ecom API.png";
import moviesFlixAPI from "../../images/MoviesFlix-Hub API.png";

const ProjectSection = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".project-card");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    const projectsElement = projectsRef.current;
    if (projectsElement) {
      projectsElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (projectsElement) {
        projectsElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Clothonic",
      description:
        "Clothonic is a cutting-edge e-commerce store dedicated to delivering a seamless and enjoyable shopping experience for fashion enthusiasts of all ages. Our mission is to be the premier destination for high-quality, stylish clothing for the entire family.",
      image: clothonic,
      techStack: ["React", "Tailwind", "Node.js", "MongoDB"],
      liveLink: "https://www.clothonic.store/",
      githubLink: "https://github.com/JDestefano11/Ecommerce-application.git",
      caseStudyLink: "/case-studies/trend-hive",
    },
    {
      id: 2,
      title: "Sovereign Realty",
      description:
        "Sovereign Realty is an online platform where users can explore our completed real estate projects, browse detailed information, and schedule property viewings. Whether you're looking for inspiration or ready to make your next move, Sovereign Realty offers a seamless way to connect with our properties.",
      image: Sovereign,
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://real-estate-website-nrw6.onrender.com/",
      githubLink: "https://github.com/JDestefano11/sovereign-realty.git",
      caseStudyLink: "#",
      caseStudyComingSoon: true,
    },
    {
      id: 3,
      title: "MoviesFlix",
      description:
        "MoviesFlix is a dynamic web application that allows users to explore and discover movies. Built with modern web technologies, it offers a sleek interface for browsing movies, viewing details, and managing favorites. Features include user authentication, personalized watchlists, and real-time search.",
      image: MoviesFlix,
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://moviesflix-hub.netlify.app/login",
      githubLink: "https://github.com/JDestefano11/MoviesFlix-Hub.git",
      caseStudyLink: "/case-studies/movies-flix",
    },
    {
      id: 4,
      title: "Meet App",
      description:
        "Meet App is a serverless, progressive web application built with React using a test-driven development approach. It uses the Google Calendar API to fetch upcoming events and allows users to search for events by city, with features for offline functionality and detailed analytics.",
      image: MeetApp,
      techStack: ["React", "AWS", "Google API", "Jest"],
      liveLink: "https://jdestefano11.github.io/meet-app/",
      githubLink: "https://github.com/JDestefano11/meet-app.git",
      caseStudyLink: "/case-studies/meet-app",
    },
    {
      id: 5,
      title: "DragonFlix",
      description:
        "DragonFlix is a modern remake of the MoviesFlix platform, featuring an enhanced user interface and improved functionality. This version includes advanced filtering, responsive design, and a more intuitive user experience, while maintaining the core features that made the original successful.",
      image: Remake,
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://myflix-remake.onrender.com/",
      githubLink: "https://github.com/JDestefano11/MoviesFlix-Remake-React.git",
      caseStudyLink: "/case-studies/movies-flix",
    },
    {
      id: 6,
      title: "MoviesFlix API",
      description:
        "The backend REST API powering the MoviesFlix platform. Built with Node.js and Express, it provides endpoints for user authentication, movie management, and favorites handling. Features include JWT authentication, password hashing, and MongoDB integration for data persistence.",
      image: moviesFlixAPI,
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "https://moviesflix-hub-api.onrender.com/",
      githubLink: "https://github.com/JDestefano11/MoviesFlix-Hub-API.git",
      caseStudyLink: "#",
      caseStudyComingSoon: true,
    },
    {
      id: 7,
      title: "Clothonic API",
      description:
        "A robust REST API backend for the Clothonic e-commerce platform. Built with Node.js and Express, it handles product management, user authentication, cart operations, and order processing. Includes features like Stripe payment integration, JWT authentication, and comprehensive inventory management.",
      image: clothonicAPI,
      techStack: ["Node.js", "Express", "MongoDB", "Stripe"],
      liveLink: "https://clothonic-api.onrender.com/",
      githubLink: "https://github.com/JDestefano11/Clothonic-API.git",
      caseStudyLink: "#",
      caseStudyComingSoon: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="title-text">Featured Projects</h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="project-card"
            >
              <div className="card-inner">
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="tech-stack">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link view-code"
                    >
                      <FiGithub /> View Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-demo"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                    {project.caseStudyLink && (
                      <Link
                        to={project.caseStudyLink}
                        className={`project-link case-study-link ${
                          project.caseStudyComingSoon ? "coming-soon" : ""
                        }`}
                        onClick={
                          project.caseStudyComingSoon
                            ? (e) => e.preventDefault()
                            : undefined
                        }
                      >
                        <FiBook /> {project.caseStudyComingSoon ? "Coming Soon" : "Case Study"}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
