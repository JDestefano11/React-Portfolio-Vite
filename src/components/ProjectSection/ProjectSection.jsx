import React, { useState } from "react";
import { FaGithub, FaRocket, FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProjectSection.css";
import TrendHive from "../../images/TrendHive.png";
import MoviesFlix from "../../images/Movies.png";
import MeetApp from "../../images/MeetApp.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="epic-card">
      <div className="card-content">
        <div className="card-image-container">
          <img src={project.image} alt={project.title} />
          <div className="card-overlay">
            <div className="card-description">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
        <div className="card-info">
          <div className="card-title">
            <h3>{project.title}</h3>
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
      title: "MoviesFlix-Hub",
      image: MoviesFlix,
      description:
        "MoviesFlix-Hub is a React-based client-side application designed for movie enthusiasts. It offers a dynamic and user-friendly interface where users can browse and search for movies, view detailed information, and manage their favorite films. The application also includes features for updating user profiles, such as changing personal details and managing favorite movie lists. With a focus on seamless user experience and responsive design, MoviesFlix-Hub provides an engaging platform for discovering and organizing movie content.",
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
