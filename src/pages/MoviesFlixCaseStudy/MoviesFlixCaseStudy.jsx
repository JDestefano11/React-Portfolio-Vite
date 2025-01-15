import React, { useState, Suspense, useLayoutEffect } from "react";
import "./MoviesFlixCaseStudy.css";
import Footer from "../../components/Footer/Footer";

// Lazy load icons for better performance
const BiStore = React.lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiStore }))
);
const HiLightningBolt = React.lazy(() =>
  import("react-icons/hi").then((module) => ({
    default: module.HiLightningBolt,
  }))
);
const BiBrain = React.lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiBrain }))
);
const HiKey = React.lazy(() =>
  import("react-icons/hi").then((module) => ({ default: module.HiKey }))
);
const BiCodeAlt = React.lazy(() =>
  import("react-icons/bi").then((module) => ({ default: module.BiCodeAlt }))
);
const HiSparkles = React.lazy(() =>
  import("react-icons/hi").then((module) => ({ default: module.HiSparkles }))
);
const IoClose = React.lazy(() =>
  import("react-icons/io5").then((module) => ({ default: module.IoClose }))
);
const BiNetworkChart = React.lazy(() =>
  import("react-icons/bi").then((module) => ({
    default: module.BiNetworkChart,
  }))
);

export const MoviesFlixCaseStudy = () => {
  const [activeSection, setActiveSection] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const sections = [
    {
      id: 1,
      title: "Project Overview",
      icon: <BiStore />,
      description:
        "MoviesFlix-Hub is a dynamic, React-based client-side application designed for movie enthusiasts. This single-page application offers a seamless user experience for browsing, searching, and managing favorite movies, along with user profile management capabilities.",
    },
    {
      id: 2,
      title: "Challenge",
      icon: <HiLightningBolt />,
      description:
        "Create a responsive, user-friendly platform that integrates with a RESTful API backend, provides robust user authentication, and offers an intuitive interface for movie exploration and personal list management.",
    },
    {
      id: 3,
      title: "Solution",
      icon: <BiBrain />,
      description:
        "Technology Stack: \n- React with React Bootstrap \n- Express.js and Node.js \n- MongoDB \n- Passport.js \n- Parcel \n\nFrontend Development: React and React Bootstrap for responsive UI \n\nBackend Development: Express.js and Node.js for API handling \n\nDatabase Solution: MongoDB for flexible data storage \n\nUser Authentication: Passport.js for secure sessions",
    },
    {
      id: 4,
      title: "Key Features",
      icon: <HiKey />,
      description:
        "- User registration and authentication \n- Movie browsing and search \n- Detailed movie information \n- Favorite movie list management \n- User profile management \n- Responsive design \n- Genre-based filtering \n- Form validation",
    },
    {
      id: 5,
      title: "Development Process",
      icon: <BiCodeAlt />,
      description:
        "Development Steps: \n- Planning and Setup: Project initialization with React and core features definition \n- UI/UX Design: Responsive layout creation with React Bootstrap \n- Frontend Development: Implementation with React and Context API \n- Backend Integration: RESTful API development with Express.js \n- Testing and Deployment: Comprehensive testing and production optimization",
    },
    {
      id: 6,
      title: "Results",
      icon: <HiSparkles />,
      description:
        "MoviesFlix-Hub successfully delivers a feature-rich, user-friendly platform for movie enthusiasts. The application's responsive design ensures a consistent experience across devices, while the intuitive interface allows users to easily navigate, search, and manage their movie preferences.",
    },
  ];

  return (
    <>
      <div className="timeline-container">
        <div className="timeline-header">
          <Suspense fallback={<div>Loading...</div>}>
            <HiSparkles className="timeline-spark-icon" />
          </Suspense>
          <h1>MoviesFlix-Hub Journey</h1>
          <div className="timeline-subtitle">Explore. Discover. Enjoy.</div>
        </div>

        <div className="timeline">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div
                className="timeline-content"
                onClick={() => setActiveSection(section)}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <div className="timeline-icon">{section.icon}</div>
                </Suspense>
                <h3>{section.title}</h3>
                <div className="timeline-preview">Click to explore</div>
              </div>
            </div>
          ))}
        </div>

        {activeSection && (
          <div
            className="timeline-modal-overlay"
            onClick={() => setActiveSection(null)}
          >
            <div
              className="timeline-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="timeline-modal-header">
                <Suspense fallback={<div>Loading...</div>}>
                  <div className="timeline-modal-icon">
                    {activeSection.icon}
                  </div>
                </Suspense>
                <h2>{activeSection.title}</h2>
                <button
                  className="timeline-close-button"
                  onClick={() => setActiveSection(null)}
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <IoClose />
                  </Suspense>
                </button>
              </div>
              <div className="timeline-modal-body">
                {activeSection.description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        <Suspense fallback={<div>Loading...</div>}>
          <BiNetworkChart className="timeline-network-icon" />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default MoviesFlixCaseStudy;
