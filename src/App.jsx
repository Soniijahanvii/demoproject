import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#171d32] text-white min-h-screen w-full">
      {/* Navbar */}
      <Navbar />

      <div className="bg-[#171d32]" id="Home">
        <Home />
      </div>
      {/* Sections */}
      <div className="p-8 bg-[#171d32]" id="about">
        <About />
      </div>
      <div className="p-8 bg-[#171d32]" id="projects">
        <Project />
      </div>

      <div className="p-8 bg-[#171d32]" id="experience">
        <Experience />
      </div>

      <div className="p-8 bg-[#171d32]" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
