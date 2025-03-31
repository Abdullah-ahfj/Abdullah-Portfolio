import React, { useRef } from "react";
import { EDUCATION, COURSES } from "../constants";
import { FaUniversity, FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, ease: "easeOut", duration: 1.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Opposite direction animations
const degreeVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};

const courseVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="pb-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2
        className="my-10 text-center text-4xl font-bold"
        variants={cardVariants}
      >
        Education & Courses
      </motion.h2>

      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Education Section */}
        <div>
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-6 w-full rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105"
              variants={cardVariants}
            >
              <motion.h3
                className="text-2xl font-semibold text-stone-800 flex items-center gap-2"
                variants={degreeVariants}
              >
                <FaUniversity className="text-stone-500" /> {edu.degree}
              </motion.h3>
              <p className="text-stone-500 mt-1">{edu.institution}</p>
              <p className="text-stone-400 mt-2 flex items-center gap-2">
                <FaCalendarAlt /> {edu.duration}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Courses Section */}
        <div>
          {COURSES.map((course, index) => (
            <motion.div
              key={index}
              className="mb-6 w-full rounded-2xl bg-gray-100 p-6 shadow-lg transition-transform duration-300 hover:scale-105"
              variants={cardVariants}
            >
              <motion.h3
                className="text-xl font-semibold text-stone-800 flex items-center gap-2"
                variants={courseVariants}
              >
                <FaBookOpen className="text-stone-500" /> {course.title}
              </motion.h3>
              <p className="text-stone-500 mt-1">{course.provider}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
