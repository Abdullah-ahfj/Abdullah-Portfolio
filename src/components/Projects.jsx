import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut", 
      duration: 1.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className='pb-12 px-4'
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h2
        className='my-10 text-center text-4xl font-bold'
        variants={cardVariants}
      >
        Projects
      </motion.h2>
      
      <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className='w-full max-w-md rounded-2xl p-6 shadow-lg bg-gray-800 text-white transition-transform duration-300 hover:scale-105'
            variants={cardVariants}
          >
            <h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
            <p className='text-stone-300 mb-4'>{project.description}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className='px-3 py-1 text-sm font-medium bg-stone-700 rounded-full'>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-amber-400 hover:underline flex items-center gap-1'
            >
              View Project <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
