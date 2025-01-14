import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import TrendHiveCaseStudy from "./components/TrendHiveCaseStudy/TrendHiveCaseStudy";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <ProjectSection />
      <Contact />
    </>
  );
};

export default App;
