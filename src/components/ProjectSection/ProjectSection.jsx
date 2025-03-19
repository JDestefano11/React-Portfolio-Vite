import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
import comingSoon from "../../images/coming-soon.svg";

const ProjectSection = () => {
  const [filter, setFilter] = useState("all");
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true, amount: 0.1 });

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
      featured: true,
    },
    {
      id: 2,
      title: "Sovereign Realty(Work In Progress)",
      description:
        "Sovereign Realty is an online platform where users can explore our completed real estate projects, browse detailed information, and schedule property viewings. Whether you're looking for inspiration or ready to make your next move, Sovereign Realty offers a seamless way to connect with our properties.",
      image: Sovereign,
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://real-estate-website-nrw6.onrender.com/",
      githubLink: "https://github.com/JDestefano11/sovereign-realty.git",
      caseStudyLink: "#",
      caseStudyComingSoon: true,
      featured: true,
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
      featured: true,
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
      featured: false,
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
      featured: false,
    },
    {
      id: 6,
      title: "MoviesFlix API",
      description:
        "The backend REST API powering the MoviesFlix platform. Built with Node.js and Express, it provides endpoints for user authentication, movie management, and favorites handling. Features include JWT authentication, password hashing, and MongoDB integration for data persistence.",
      image: moviesFlixAPI,
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "https://moviesflix-hub-api.onrender.com/",
      githubLink: "https://github.com/JDestefano11/MoviesFlix-hub-api.git",
      caseStudyLink: "#",
      caseStudyComingSoon: true,
      featured: false,
    },
    {
      id: 7,
      title: "Clothonic API",
      description:
        "A robust REST API backend for the Clothonic e-commerce platform. Built with Node.js and Express, it handles product management, user authentication, cart operations, and order processing. Includes features like Stripe payment integration, JWT authentication, and comprehensive inventory management.",
      image: clothonicAPI,
      techStack: ["Node.js", "Express", "MongoDB", "Stripe"],
      liveLink: "https://clothonic-api.onrender.com/",
      githubLink: "",
      caseStudyLink: "#",
      caseStudyComingSoon: true,
      featured: false,
    },
    {
      id: 8,
      title: "StriveFitness Labs(Work In Progress)",
      description:
        "A comprehensive fitness platform combining workout tracking, nutrition planning, and community features. Offers personalized workout routines, progress analytics, and wearable device integration. The app includes a clean, intuitive interface designed for both beginners and fitness enthusiasts.",
      image: comingSoon,
      techStack: ["React Native", "Firebase", "Redux", "Node.js"],
      liveLink: "https://strivefitness-labs.vercel.app/",
      githubLink: "https://github.com/JDestefano11/strivefitness-labs",
      caseStudyLink: "#",
      caseStudyComingSoon: true,
      featured: true,
    },
    {
      id: 9,
      title: "Car Showcase Application(Work In Progress)",
      description:
        "A modern car showcase platform with advanced filtering, detailed specifications, and interactive 3D models. Users can explore various car models with a sleek interface and immersive experience. Features include comprehensive search functionality, comparison tools, and responsive design.",
      image: comingSoon,
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
      liveLink: "https://car-showcase-nextjs.vercel.app/",
      githubLink: "https://github.com/JDestefano11/car-showcase",
      caseStudyLink: "#",
      caseStudyComingSoon: true,
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const filteredProjects =
    filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects;

  return (
    <section className="projects-section" id="projects" ref={projectsRef}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 className="title-text">Featured Projects</h2>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Projects
            </button>
            <button
              className={`filter-btn ${filter === "featured" ? "active" : ""}`}
              onClick={() => setFilter("featured")}
            >
              Featured
            </button>
          </div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="project-card"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                      href={project.githubLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-link view-code ${
                        !project.githubLink ? "disabled" : ""
                      }`}
                      onClick={
                        !project.githubLink
                          ? (e) => e.preventDefault()
                          : undefined
                      }
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
                    <Link
                      to={project.caseStudyLink || "#"}
                      className={`project-link case-study-link ${
                        project.caseStudyComingSoon ? "coming-soon" : ""
                      }`}
                      onClick={
                        project.caseStudyComingSoon
                          ? (e) => e.preventDefault()
                          : undefined
                      }
                    >
                      <FiBook />{" "}
                      {project.caseStudyComingSoon
                        ? "Coming Soon"
                        : "Case Study"}
                    </Link>
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
