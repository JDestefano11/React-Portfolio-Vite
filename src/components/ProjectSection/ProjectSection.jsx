import React from "react";
import { FaGithub, FaRocket, FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProjectSection.css";
import TrendHive from "../../images/TrendHive.png";
import MoviesFlix from "../../images/Movies.png";
import MeetApp from "../../images/MeetApp.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="epic-card">
      <div className="card-image-container">
        <img src={project.image} alt={project.title} />
        <div className="card-overlay">
          <div className="card-description">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="card-info">
          <div className="card-title">
            <h3>{project.title}</h3>
          </div>
          <div className="card-tech">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
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
              to={`/case-study/${project.id}`}
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

const ProjectSection = () => {
  const projects = [
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
      title: "Meet App",
      image: MeetApp,
      description:
        "Meet App is a web application for discovering and tracking events. Key features include city-based filtering, toggling event details, customizing event display, offline functionality, home screen shortcuts, and visualizing event data with charts.",
      tech: ["React", "AWS", "Google API", "CSS"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "MoviesFlix-Hub",
      image: MoviesFlix,
      description:
        "MoviesFlix-Hub, my first project with React, is a movie application for browsing, searching, and managing favorite films. This project highlights my growth as a developer, showcasing skills in responsive design, seamless user experiences, and dynamic front-end development.",
      tech: ["React Native", "Firebase", "React", "CSS"],
      liveUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
