import React from 'react';
import { motion } from 'framer-motion';

function ProjectSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gray-800">
      <div className="mx-20 flex flex-col items-center justify-center h-4/5 space-y-8">
        {/* Title Section */}
        <motion.h1
          className="text-6xl font-bold font-nunito text-white text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          projects
        </motion.h1>

        {/* GitHub Button */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <a
            href="https://github.com/maikmixe?tab=repositories"
            className="inline-block bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-black hover:scale-105 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here for github
          </a>
        </motion.p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Project 1 */}
          <a href="/projhelpsystem">
            <motion.div
              className="bg-gray-900 text-white font-bold text-lg py-20 px-6 rounded-lg text-center shadow-lg hover:bg-gray-700 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Article Help System
            </motion.div>
          </a>

          {/* Project 2 */}
          <a href="/projnonprofit">
            <motion.div
              className="bg-gray-900 text-white font-bold text-lg py-20 px-6 rounded-lg text-center shadow-lg hover:bg-gray-700 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Nonprofit Website
            </motion.div>
          </a>

          {/* Project 3 */}
          <a href="/projanimalpre">
            <motion.div
              className="bg-gray-900 text-white font-bold text-lg py-20 px-6 rounded-lg text-center shadow-lg hover:bg-gray-700 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Africa Animal Preservation 
            </motion.div>
          </a>
        </div>

        
      </div>
    </section>
  );
}

function Projects() {
  return (
    <div>
      <ProjectSection />
    </div>
  );
}

export default Projects;
