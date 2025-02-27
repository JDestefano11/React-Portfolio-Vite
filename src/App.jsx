import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "./components/About/About";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Contact from "./components/Contact/Contact";
import MeetAppCaseStudy from "./pages/MeetAppCaseStudy/MeetAppCaseStudy";
import MoviesFlixCaseStudy from "./pages/MoviesFlixCaseStudy/MoviesFlixCaseStudy";
import TrendHiveCaseStudy from "./pages/TrendHiveCaseStudy/TrendHiveCaseStudy";
import Footer from "./components/Footer/Footer";
import NewNavbar from "./components/NewNavbar/NewNavbar";
import NewHero from "./components/NewHero/NewHero";
import Skills from "./components/Skills/Skills";

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
                <NewHero />
              </div>
              <div id="about">
                <About />
                <Skills />
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
        <Route path="/case-studies/meet-app" element={<MeetAppCaseStudy />} />
        <Route
          path="/case-studies/movies-flix"
          element={<MoviesFlixCaseStudy />}
        />
        <Route
          path="/case-studies/trend-hive"
          element={<TrendHiveCaseStudy />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
// Test
