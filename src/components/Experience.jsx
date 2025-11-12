import React, { useRef } from "react";
import { EXPERIENCE } from "../constants";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, ease: "easeOut", duration: 1.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 relative"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-white"
        variants={cardVariants}
      >
        Experience
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-stone-400 via-stone-200 to-transparent opacity-30 hidden md:block" />

        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative md:pl-20"
            >
              {/* Glowing icon */}
              <div className="absolute left-2 md:left-6 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-stone-300 to-stone-600 flex items-center justify-center shadow-md shadow-stone-400/50">
                <FaBriefcase className="text-black text-sm" />
              </div>

              {/* Experience card */}
              <div className="bg-gradient-to-br from-white/10 via-stone-800/20 to-black/30 backdrop-blur-lg border border-stone-700/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-semibold text-stone-100 flex items-center gap-3">
                  {exp.role}
                </h3>
                <p className="text-stone-400 text-sm mb-2">{exp.company}</p>

                <p className="flex items-center gap-2 text-stone-500 text-sm mb-4">
                  <FaCalendarAlt className="text-stone-400" /> {exp.duration}
                </p>

                <ul className="list-disc ml-6 space-y-2 text-stone-300 text-sm leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
