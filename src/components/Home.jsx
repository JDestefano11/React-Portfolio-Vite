import { React } from "react";
import { Projects } from "./Projects";
import { ContactPage } from "./Contact";
import { About } from "./About";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <About />
      <Projects />
      <ContactPage />
      <Footer />
    </div>
  );
};
