import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Element, scroller } from "react-scroll";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ContactPage } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { MoviesFlixCaseStudy } from "./components/MoviesFlixCaseStudy";
import { MeetAppCaseStudy } from "./components/MeetAppCaseStudy";
import { TrendHiveCaseStudy } from "./components/TrendHiveCaseStudy";

const AppContent = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Element name="home">
                  <Hero />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="projects">
                  <Projects />
                </Element>
                <Element name="contact">
                  <ContactPage />
                </Element>
              </>
            }
          />
          <Route
            path="/moviesflix-case-study"
            element={<MoviesFlixCaseStudy />}
          />
          <Route path="/meetapp-case-study" element={<MeetAppCaseStudy />} />
          <Route path="/TrendHive" element={<TrendHiveCaseStudy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
