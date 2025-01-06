/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Work = () => {
  const projects = [
    {
      title: "Portfolio Chatbot",
      description: "This is the chatbot you can ask anything about me.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2019/01/16/20/52/chatbot-3936760_1280.jpg",
      link: "https://portfolio-chat-bot.vercel.app/",
    },
    {
      title: "AI Assitant App",
      description:
        "This project is made by usinh latest react js and using AI pi key",
      imgUrl:
        "https://images.prismic.io/turing/652ec640fbd9a45bcec819fd_AI_Powered_Virtual_Assistant_c6d268785b.webp?auto=format,compress",
      link: "https://ai-app-swart-zeta.vercel.app/",
    },
    {
      title: "Python Auth App",
      description:
        "This project is made in Flask framework and using JWT for authentication.",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7XllW88Ts4Wq8b2hJ1p5uXVkTLKh5TbaMw&s",
      link: "https://flask-portfolio-ten.vercel.app//",
    },
    {
      title: "Digital E-commerce App",
      description: "Made project by using latest react js",
      imgUrl:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2016-11/15/full/1479216270-9932.jpg?im=FeatureCrop,size=(803,452)",
      link: "https://digital-ecommerce-frontend.vercel.app/",
    },
    {
      title: "AI image generator app",
      description:
        "This project is made in React and using AI to generate prompt images",
      imgUrl:
        "https://image.pollinations.ai/prompt/Generate%20image%20of%20bear%20bathing%20in%20pond?width=512&height=512&seed=45&model=flux",
      link: "https://image-generator-frontend-plum.vercel.app/",
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
              These are my personal projects on web development
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
