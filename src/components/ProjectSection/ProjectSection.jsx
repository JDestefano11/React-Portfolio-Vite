import React, { useState } from "react";
import { FaGithub, FaRocket, FaBookReader } from "react-icons/fa";
import { MdFlip, MdOpenInNew } from 'react-icons/md';
import { BiCodeAlt } from 'react-icons/bi';
import { Link } from "react-router-dom";
import "./ProjectSection.css";
import TrendHive from "../../images/TrendHive.png";
import MoviesFlix from "../../images/Movies.png";
import MeetApp from "../../images/MeetApp.png";

const ProjectCard = ({ project, isActive, onClick }) => {
  return (
    <div 
      className={`project-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="flip-indicator">
        <MdFlip className="flip-icon" />
        <span>Flip Card</span>
      </div>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-header">
            <h3>{project.title}</h3>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="card-preview">
            <div className="preview-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="preview-content">
              <p className="preview-description">
                {project.description.slice(0, 100)}...
              </p>
              <div className="preview-actions">
                <button className="action-button">
                  <BiCodeAlt />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card-back">
          <div className="project-content">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a 
                href={project.liveUrl} 
                className="project-link live"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaRocket />
                <span>Live Demo</span>
                <MdOpenInNew className="external-link-icon" />
              </a>
              <a 
                href={project.codeUrl} 
                className="project-link code"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
                <span>View Code</span>
                <MdOpenInNew className="external-link-icon" />
              </a>
              <Link 
                to={`/case-study/${project.id}`} 
                className="project-link case-study"
                onClick={(e) => e.stopPropagation()}
              >
                <FaBookReader />
                <span>Case Study</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(null);

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

  const handleProjectClick = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Featured Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
