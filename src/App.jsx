import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default App;
