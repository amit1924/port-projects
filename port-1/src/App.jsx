/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TechStacks from "./components/TechStacks";

const App = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div ref={topRef}>
        <Navbar
          scrollToTop={scrollToTop}
          AiOutlineArrowUp={<AiOutlineArrowUp />}
        />
        <Hero />
      </div>
      <About />
      <Work />
      <TechStacks />
      <Contact />
      <Footer />
      <div ref={bottomRef}></div>

      {/* Scroll Down Arrow */}
      <div
        className="fixed bottom-4 left-3 transform -translate-x-1/2 z-50 cursor-pointer"
        onClick={scrollToBottom}
      >
        <AiOutlineArrowDown
          size={30}
          className="text-green-500 animate-bounce"
        />
      </div>

      {/* Scroll Up Arrow */}
      <div
        className="fixed top-4 left-3 transform -translate-x-1/2 z-50 cursor-pointer"
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp size={30} className="text-green-500 animate-bounce" />
      </div>
    </div>
  );
};

export default App;
