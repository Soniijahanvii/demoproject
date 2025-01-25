import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Experience from "./components/Experience";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Herosection />
      <Experience />
      <Section1 />
      <Section2 />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
