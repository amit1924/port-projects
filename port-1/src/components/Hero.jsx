/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="hero">
      <div className="text-[#4a044e] max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center items-center">
        <div className="flex flex-col items-center text-center p-6  rounded-lg shadow-lg">
          <h1 className="md:text-5xl sm:text-4xl text-3xl text-white">
            Hey, I'm Amit
          </h1>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold text-white md:py-6">
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Backend Dev",
                1000,
                "Consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-[#a78bfa]">
            with experiences on many projects
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
            >
              <AiFillLinkedin className="text-[#0e76a8] hover:text-[#a78bfa] w-8 h-8 sm:w-10 sm:h-10 transition duration-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
            >
              <AiFillGithub className="text-[#333] hover:text-[#a78bfa] w-8 h-8 sm:w-10 sm:h-10 transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110"
            >
              <AiFillInstagram className="text-[#e1306c] hover:text-[#a78bfa] w-8 h-8 sm:w-10 sm:h-10 transition duration-300" />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="mt-6">
            <a
              href="/path/to/your-cv.pdf"
              download="Amit_Kumar_CV.pdf"
              className="inline-block bg-[#000000] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1d0e20] transition duration-600 hover:shadow-[0_0_15px_#a78bfa] animate-pulse shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="my-auto p-6">
          <img
            className="w-[250px] h-[150px] sm:w-[350px] sm:h-[350px] rounded-full border-4 border-[#a78bfa] shadow-lg transform transition-transform hover:scale-105"
            src="https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764524_1280.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
