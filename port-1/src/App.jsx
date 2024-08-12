/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechStacks from "./components/TechStacks";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <TechStacks />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
