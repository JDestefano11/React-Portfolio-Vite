import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import About from "./components/About/About";
import TrendHiveCaseStudy from "./pages/TrendHiveCaseStudy/TrendHiveCaseStudy";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToSection />
      <Routes>
        <Route
          path="/"
          element={
            <>
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
          }
        />
        <Route path="/trendhive" element={<TrendHiveCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
