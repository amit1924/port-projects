/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div className="py-10 text-white h-auto" id="about">
      <div className="text-[#4a044e] max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center items-center">
        {/* Image Section */}
        <div className="flex justify-center sm:w-1/2">
          <div className="w-[300px] h-full sm:w-[400px]">
            <img
              src="https://cdn.pixabay.com/photo/2022/07/17/14/35/programming-7327552_960_720.png"
              alt="About me"
              className="object-cover rounded-xl h-[300px] w-full filter grayscale hover:filter-none transition duration-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="sm:w-1/2 px-6 sm:px-10">
          <div className="text-center sm:text-left">
            <h3 className="text-4xl font-bold text-[#4a044e] mb-4">
              About <span className="text-[#a78bfa]">Me</span>
            </h3>
            <p className="text-lg text-gray-300">
              I'm Amit, a passionate developer with a strong background in both
              frontend and backend development. I love creating dynamic,
              responsive, and visually appealing websites and applications.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              With a strong understanding of various technologies, I aim to
              provide solutions that not only meet client requirements but also
              exceed their expectations. My goal is to continuously learn and
              grow in the field of web development, ensuring I stay updated with
              the latest trends and technologies.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              I'm always open to new challenges and opportunities. Let's create
              something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
