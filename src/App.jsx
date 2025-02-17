import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import About from "./components/About/About";
import TrendHiveCaseStudy from "./pages/TrendHiveCaseStudy/TrendHiveCaseStudy";
import MeetAppCaseStudy from "./pages/MeetAppCaseStudy/MeetAppCaseStudy";
import MoviesFlixCaseStudy from "./pages/MoviesFlixCaseStudy/MoviesFlixCaseStudy";
import Footer from "./components/Footer/Footer";
import NewNavbar from "./components/NewNavbar/NewNavbar";

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
      <NewNavbar />
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
              <div id="footer">
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/trendhive" element={<TrendHiveCaseStudy />} />
        <Route path="/meetapp" element={<MeetAppCaseStudy />} />
        <Route path="/moviesflix" element={<MoviesFlixCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
