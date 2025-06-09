import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

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

      <div ref={homeRef} style={{ height: "100vh" }}>
        <Home />
      </div>

      <div ref={servicesRef} style={{ height: "100vh", paddingTop: "80px" }}>
        <h1>Services Section</h1>
      </div>

      <div ref={projectsRef} style={{ height: "100vh", paddingTop: "80px" }}>
        <h1>Projects Section</h1>
      </div>

      <div ref={contactRef} style={{ height: "100vh", paddingTop: "80px" }}>
        <h1>Contact Section</h1>
      </div>
    </>
  );
}

export default App;
