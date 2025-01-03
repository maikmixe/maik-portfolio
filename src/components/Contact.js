import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Bubble animation properties
  const bubbleAnimation = {
    float: {
      y: [0, -20, 20, 0], // Float up and down
      transition: { duration: 4, repeat: Infinity, repeatType: 'reverse' },
    },
  };

  // Generate random star positions
  const generateStars = (count) => {
    return [...Array(count)].map((_, index) => (
      <div
        key={index}
        className="star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      ></div>
    ));
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gray-800 text-white overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        {generateStars(50)}
      </div>

      {/* Title */}
      <motion.h1
        className="text-6xl font-bold font-nanum tracking-wide relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      {/* Bubble Container */}
      <div className="relative w-full h-96 flex justify-center items-center z-10">
        {/* Email Bubble
        <motion.div
          className="absolute flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full shadow-lg text-center transform hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
          variants={bubbleAnimation}
          animate="float"
          style={{ top: '10%', left: '25%' }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </motion.div> */}

        {/* LinkedIn Bubble */}
        <motion.div
          className="absolute flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full shadow-lg text-center transform hover:bg-gray-600 hover:scale-105 transition-transform duration-300"
          variants={bubbleAnimation}
          animate="float"
          style={{ top: '40%', right: '30%' }}
        >
          <a
            href="https://www.linkedin.com/in/miriam-izdi-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin className="text-3xl" />
          </a>
        </motion.div>

        {/* Contact Form Bubble */}
        <motion.div
          onClick={toggleDropdown}
          className="absolute flex items-center justify-center w-20 h-20 bg-gray-700 rounded-full shadow-lg text-center transform hover:bg-gray-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
          variants={bubbleAnimation}
          animate="float"
          style={{ bottom: '15%', left: '40%' }}
        >
          <span className="text-sm">Form</span>
        </motion.div>

        {/* Decorative Bubbles */}
        <motion.div
          className="absolute w-16 h-16 bg-gray-600 rounded-full shadow-md opacity-50"
          variants={bubbleAnimation}
          animate="float"
          style={{ top: '20%', right: '20%' }}
        ></motion.div>
        <motion.div
          className="absolute w-12 h-12 bg-gray-500 rounded-full shadow-md opacity-40"
          variants={bubbleAnimation}
          animate="float"
          style={{ bottom: '20%', right: '10%' }}
        ></motion.div>
        <motion.div
          className="absolute w-16 h-16 bg-gray-600 rounded-full shadow-md opacity-50"
          variants={bubbleAnimation}
          animate="float"
          style={{ top: '30%', left: '15%' }}
        ></motion.div>
        <motion.div
          className="absolute w-20 h-20 bg-gray-700 rounded-full shadow-lg opacity-50"
          variants={bubbleAnimation}
          animate="float"
          style={{ top: '50%', left: '5%' }}
        ></motion.div>
        <motion.div
          className="absolute w-14 h-14 bg-gray-600 rounded-full shadow-md opacity-40"
          variants={bubbleAnimation}
          animate="float"
          style={{ bottom: '10%', right: '40%' }}
        ></motion.div>
        <motion.div
          className="absolute w-10 h-10 bg-gray-500 rounded-full shadow-md opacity-30"
          variants={bubbleAnimation}
          animate="float"
          style={{ top: '60%', left: '60%' }}
        ></motion.div>
      </div>

      {/* Dropdown Contact Form */}
      <AnimatePresence>
        {dropdownVisible && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-90 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-3/4 bg-gray-700 p-8 rounded-lg shadow-lg">
              <button
                onClick={toggleDropdown}
                className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-500"
              >
                Close
              </button>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfyD1M4Vay_bly3Fd73VNp80BqY7Tct02gH0363FvDJkDh4_Q/viewform?embedded=true"
                width="100%"
                height="400"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Form"
                className="rounded-lg shadow-lg border border-gray-600"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Star Styling */}
      <style jsx>{`
        .star {
          position: absolute;
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, white 50%, transparent 50%);
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
          animation: twinkle 3s infinite ease-in-out;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}

function Contact() {
  return (
    <div>
      <ContactSection />
    </div>
  );
}

export default Contact;
