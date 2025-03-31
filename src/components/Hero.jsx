import React from "react";
import profilePic from "../assets/abdul.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.5
    }
  }
}

const childVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {opacity: 1, x:0, transition: {duration: 0.5}},
}

const Hero = () => {
  return (
    <div className="lg:mb-36 mt-5">
      {/* Flex container for responsiveness */}
      <div className="flex flex-col items-center lg:flex-row-reverse lg:items-center">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-20">
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-64 h-64 lg:w-150 lg:h-130 object-cover border-stone-900 rounded-3xl"
            initial={{x:100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 2, delay: 1.5}}
          />
        </div>

        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
         className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-5 pl-5">
          <motion.h2
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-6xl">
            Abdullah Abdul Haleem
          </motion.h2>
          <motion.span
           variants={childVariants}
           className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
            Software Engineering and Data Science student
          </motion.span>
          <motion.p
           variants={childVariants}
           className="mt-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            variants={childVariants}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full p-4 text-1xl text-stone-800 font-bold transition-transform duration-50 hover:scale-105"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
