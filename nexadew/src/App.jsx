import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import AboutUs from "./components/About/About";
import Projects from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onLogoClick={() => scrollToSection(homeRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      <div ref={homeRef}>
        <Home />
      </div>
      <div>
        <AboutUs />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
