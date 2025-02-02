import React, { useState, Suspense, useLayoutEffect } from "react";
import "./MeetAppCaseStudy.css";
import Footer from "../../components/Footer/Footer";
import { IoFootstepsOutline } from "react-icons/io5";

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

export const MeetAppCaseStudy = () => {
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
        "The Meet App is a web application designed to help users discover and keep track of upcoming events. The app provides various features to enhance the user experience, such as filtering events by city, showing/hiding event details, specifying the number of events to display, offline usage capabilities, adding the app as a shortcut to the home screen, and displaying charts to visualize event details.",
    },
    {
      id: 2,
      title: "Challenge",
      icon: <HiLightningBolt />,
      description:
        "Create a user-friendly platform for event discovery and management, leveraging modern web technologies and practices.",
    },
    {
      id: 3,
      title: "Solution",
      icon: <BiBrain />,
      description:
        "Tech Stack: \n- React \n- Recharts \n- Workbox \n- Jest \n- React Testing Library \n- Service Workers \n- HTML/CSS \n- JavaScript (ES6+)",
    },
    {
      id: 4,
      title: "Key Features",
      icon: <HiKey />,
      description:
        "- Filter events by city \n- Show/hide event details \n- Specify number of events to display \n- Offline usage capabilities \n- Add app as shortcut to home screen \n- Display charts to visualize event details",
    },
    {
      id: 5,
      title: "Development Process",
      icon: <BiCodeAlt />,
      description:
        "Development steps: \n- Planning \n- Design \n- Development \n- Testing \n- Deployment",
    },
    {
      id: 6,
      title: "Results",
      icon: <HiSparkles />,
      description:
        "The Meet App successfully delivers a user-friendly platform for event discovery and management. The application's responsive design ensures a consistent experience across devices, while the intuitive interface allows users to easily navigate, search, and manage their event preferences.",
    },
  ];

  return (
    <>
      <div className="timeline-container">
        <div className="timeline-header">
          <Suspense fallback={<div>Loading...</div>}></Suspense>
          <h1>Meet App Journey</h1>
          <div className="timeline-subtitle">Event Discovery Platform</div>
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

export default MeetAppCaseStudy;
