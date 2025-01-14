import React, { useState, Suspense, useLayoutEffect } from "react";
import "./TrendHiveCaseStudy.css";

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

export const TrendHiveCaseStudy = () => {
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
        "TrendHive is a cutting-edge e-commerce store dedicated to delivering a seamless shopping experience. We offer a curated selection of trendy and timeless clothing for the whole family. The goal was to create an intuitive and dynamic platform with real-time shopping cart updates and smooth user navigation.",
    },
    {
      id: 2,
      title: "Challenge",
      icon: <HiLightningBolt />,
      description:
        "Handling dynamic cart data when updating items, sizes, and quantities turned out to be challenging. The cart needed to reflect changes instantly without disrupting the user experience. A key challenge was ensuring the correct cart updates and removal of items when changes were made.",
    },
    {
      id: 3,
      title: "Solution",
      icon: <BiBrain />,
      description:
        "We restructured the cart logic in the useEffect hook and implemented functions for updating quantities and removing items. Additionally, we used real-time updates for the shopping cart and dynamically fetched product data from the server, ensuring smooth user interactions and accurate cart reflections.",
    },
    {
      id: 4,
      title: "Key Features",
      icon: <HiKey />,
      description:
        "TrendHive includes a comprehensive set of features: \n- User Authentication \n- Product Catalog with categories \n- Shopping Cart Management \n- Secure Checkout with payment integration \n- Order Tracking \n- User Reviews \n- Admin Panel for managing products \n- Responsive design across all devices",
    },
    {
      id: 5,
      title: "Development Process",
      icon: <BiCodeAlt />,
      description:
        "The development process was broken down into key steps: \n- Planning and Setup \n- UI/UX Design focused on simplicity and speed \n- Frontend Development with React and Redux for state management \n- Cart and Checkout Implementation for seamless transactions \n- Testing and Deployment, ensuring performance across devices",
    },
    {
      id: 6,
      title: "Results",
      icon: <HiSparkles />,
      description:
        "TrendHive now offers a smooth, dynamic cart system, responsive UI, and a full-featured checkout process. The platform's performance has improved, and user engagement has increased due to an intuitive interface and seamless shopping experience.",
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <Suspense fallback={<div>Loading...</div>}>
          <HiSparkles className="timeline-spark-icon" />
        </Suspense>
        <h1>TrendHive Journey</h1>
        <div className="timeline-subtitle">E-commerce Evolution</div>
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
                <div className="timeline-modal-icon">{activeSection.icon}</div>
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
  );
};

export default TrendHiveCaseStudy;
