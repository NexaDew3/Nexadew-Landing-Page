import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import AboutUs from "./components/About/About";
import Projects from "./components/Project/Project";

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
      <div ref={servicesRef} >
        <Services />
      </div>

      <div ref={projectsRef}>
        <Projects/>
      </div>

      <div ref={contactRef} style={{ height: "100vh", paddingTop: "80px" }}>
        <h1>Contact Section</h1>
      </div>
    </>
  );
}

export default App;
