import React from "react";
import { FaGithub } from "react-icons/fa";
import moviesFlixImage from "../images/MoviesFlix-Hub.png";

const MoviesFlixCaseStudy = () => {
  return (
    <div className="case-study-container">
      <header className="case-study-header">
        <h1>MoviesFlix-Hub Case Study</h1>
        <img
          src={moviesFlixImage}
          alt="MoviesFlix-Hub"
          className="case-study-image"
        />
      </header>

      <section className="case-study-section">
        <h2>Overview</h2>
        <p>
          MoviesFlix-Hub is a React-based client-side application designed for
          movie enthusiasts. It offers a dynamic and user-friendly interface for
          browsing and searching movies, viewing detailed information, and
          managing favorite films.
        </p>
      </section>

      <section className="case-study-section">
        <h2>Key Features</h2>
        <ul>
          <li>Browse and search for movies</li>
          <li>View detailed movie information</li>
          <li>Manage favorite movies list</li>
          <li>User profile management</li>
          <li>Responsive design for various devices</li>
        </ul>
      </section>

      <section className="case-study-section">
        <h2>Technical Details</h2>
        <p>
          Built with React, the app uses state management for efficient data
          handling. It integrates with a backend API for fetching movie data and
          managing user information.
        </p>
      </section>

      <section className="case-study-section">
        <h2>Challenges and Solutions</h2>
        <p>
          Implementing efficient state management and ensuring smooth user
          interactions were key challenges. These were addressed using React
          hooks and optimized rendering techniques.
        </p>
      </section>

      <div className="case-study-links">
        <a
          href="https://moviesflix-hub.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="case-study-link"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/JDestefano11/MoviesFlix-Hub.git"
          target="_blank"
          rel="noopener noreferrer"
          className="case-study-link"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
};

export default MoviesFlixCaseStudy;
