import { useState, useMemo } from "react";
import { FaGithub, FaRocket, FaBookReader } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import "./ProjectSection.css";
import TrendHive from "../../images/TrendHive.png";
import ChatApp from "../../images/f5d3797c-7f94-491f-9084-385acf9fc856-B8l4qfms.jpg";
import MeetApp from "../../images/MeetApp.png";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const getCaseStudyPath = (id) => {
    switch (id) {
      case 1:
        return "/trendhive";
      case 2:
        return "/meetapp";
      case 3:
        return "/chatapp";
      default:
        return "/";
    }
  };

  return (
    <div className="epic-card">
      <div className="card-glow"></div>
      <div className="card-content">
        <div className="card-image-container">
          <img src={project.image} alt={project.title} />
          <div className="card-overlay">
            <div className="tech-pills">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="card-info">
          <h3 className="card-title">
            <span className="title-icon"></span>
            {project.title}
          </h3>
          <p className="card-description">{project.description}</p>
          <div className="card-actions">
            <a href={project.liveUrl} className="action-btn live">
              <FaRocket className="btn-icon" />
              View Live
            </a>
            <a href={project.codeUrl} className="action-btn code">
              <FaGithub className="btn-icon" />
              Source Code
            </a>
            <Link
              to={getCaseStudyPath(project.id)}
              className="action-btn case-study"
            >
              <FaBookReader className="btn-icon" />
              Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Trend Hive",
        image: TrendHive,
        description:
          "Trend Hive is a cutting-edge e-commerce store dedicated to delivering a seamless and enjoyable shopping experience for fashion enthusiasts of all ages. Our mission is to be the premier destination for high-quality, stylish clothing for the entire family.",
        tech: ["React", "Tailwind", "Vite", "Eslint"],
        liveUrl: "#",
        codeUrl: "#",
      },
      {
        id: 2,
        title: "Neural Network Visualizer",
        image: MeetApp,
        description:
          "The Meet App is a web application designed to help users discover and keep track of upcoming events. The app provides various features to enhance the user experience, such as filtering events by city, showing/hiding event details, specifying the number of events to display, offline usage capabilities, adding the app as a shortcut to the home screen, and displaying charts to visualize event details.",
        tech: ["React", "AWS", "Google API", "CSS"],
        liveUrl: "#",
        codeUrl: "#",
      },
      {
        id: 3,
        title: "Chat App",
        image: ChatApp,
        description:
          "A mobile chat application developed with React Native, leveraging Firebase for real-time data synchronization and user authentication. This app allows users to create accounts, join chat rooms, and send instant messages. Firebase handles user authentication, message storage, and real-time updates, ensuring seamless communication. The application features a clean, intuitive interface and robust performance on both iOS and Android platforms, providing users with a reliable and engaging messaging experience.",
        tech: ["React Native", "Firebase", "React", "CSS"],
        liveUrl: "#",
        codeUrl: "#",
      },
    ],
    []
  );

  return (
    <>
      <section className="projects-section">
        <div className="hero-grid"></div>
        <div className="cosmic-bg"></div>
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
