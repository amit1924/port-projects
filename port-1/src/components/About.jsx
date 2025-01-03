/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-10 text-white h-auto" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-[#4a044e] max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center items-center"
      >
        {/* Image Section */}
        <motion.div
          className="flex justify-center sm:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <div className="w-[300px] h-full sm:w-[400px]">
            <img
              src="https://cdn.pixabay.com/photo/2022/07/17/14/35/programming-7327552_960_720.png"
              alt="About me"
              className="object-cover rounded-xl h-[300px] w-full filter grayscale hover:filter-none transition duration-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            />
          </div>
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className="sm:w-1/2 px-6 sm:px-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="text-center sm:text-left">
            <motion.h3
              className="text-4xl font-bold text-[#4a044e] mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              About <span className="text-[#a78bfa]">Me</span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              My name is Amit Kumar, and I am a fresher full-stack developer
              passionate about building interactive web applications and solving
              complex problems. I have a solid foundation in both frontend and
              backend technologies. I completed my engineering degree in
              electrical engineering, where I developed a strong interest in
              software development. Throughout my studies, I have honed my
              skills in HTML, CSS, JavaScript, and frameworks like React.
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 mt-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              I am eager to collaborate with innovative teams and contribute to
              projects that create impactful user experiences. I am constantly
              learning and adapting to new technologies to enhance my skill set
              and stay up-to-date with industry trends.
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 mt-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              I'm always open to new challenges and opportunities. Let's create
              something amazing together!
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
