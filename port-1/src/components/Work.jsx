/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Work = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "An online platform for buying and selling products.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2024/06/18/11/14/e-commerce-8837703_960_720.jpg",
      link: "https://digital-ecommerce-frontend.vercel.app",
    },
    {
      title: "Video Call App",
      description: "A social media platform to connect with friends.",
      imgUrl:
        "https://cdn4.vectorstock.com/i/thumb-large/07/48/isometric-concept-of-world-global-communication-vector-21060748.jpg",
      link: "https://nextjs-projects-bice-mu.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017981_960_720.png",
      link: "https://my-portfolio-website-mu-steel.vercel.app/",
    },
    {
      title: "React js Project",
      description:
        "Made project on e-commerce for filtering items and categories.",
      imgUrl:
        "https://www.a2hosting.com/blog/content/uploads/2020/07/featured-react-framework.jpg",
      link: "https://react-ecom-mu.vercel.app/",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // The animation will only trigger once
    amount: 0.2, // 20% of the section is visible before triggering
  });

  // Custom Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5, x: "-100%" }, // Start cards off-screen and small
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring", // Adds a spring effect
        stiffness: 200,
        damping: 20, // Smooth spring bounce
      },
    },
  };

  // Parallax effect by adjusting each card’s motion
  const parallaxVariants = (offset) => ({
    hidden: { opacity: 0, y: offset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  });

  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="work" ref={ref}>
      <motion.div
        className="mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Only animate when in view
      >
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span className="text-[#a78bfa]">Projects</span>
            </h2>
            <p className="text-gray-500">
              These are my latest projects for different clients
            </p>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2a2a2a] rounded-xl overflow-hidden transition-transform transform shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff2b7f,0_0_15px_#ff2b7f,0_0_30px_#ff2b7f] hover:scale-105 hover:shadow-[0_0_5px#4caf50,0_0_10px#4caf50,0_0_15px#4caf50,0_0_20px#4caf50]"
              variants={parallaxVariants((index + 1) * 50)} // Adding custom parallax offsets
            >
              <motion.img
                src={project.imgUrl}
                alt={project.title}
                className="w-full h-40 object-cover"
                variants={cardVariants} // Apply scaling + spring animation
              />
              <motion.div className="p-4" variants={cardVariants}>
                <h3 className="text-xl text-white font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Work;
