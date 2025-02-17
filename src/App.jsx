import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Contact from "./components/Contact/Contact";
import MeetAppCaseStudy from "./pages/MeetAppCaseStudy/MeetAppCaseStudy";
import MoviesFlixCaseStudy from "./pages/MoviesFlixCaseStudy/MoviesFlixCaseStudy";
import Footer from "./components/Footer/Footer";
import NewNavbar from "./components/NewNavbar/NewNavbar";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
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
            </>
          }
        />
        <Route path="/meetapp" element={<MeetAppCaseStudy />} />
        <Route path="/moviesflix" element={<MoviesFlixCaseStudy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
