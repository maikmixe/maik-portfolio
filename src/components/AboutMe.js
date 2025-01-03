import '../App.css';
import React, { useEffect, useState } from "react"; // For NameSection
import Typed from "typed.js"; // For NameSection
import { motion } from "framer-motion"; // For animations

function NameSection() {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["Welcome", "to my", "Portfolio"],
      typeSpeed: 200,
      backSpeed: 80,
      backDelay: 800,
      loop: true,
    });
    return () => typed.destroy(); // Cleanup Typed.js on unmount
  }, []);

  return (
    <div className="w-full md:w-1/3 flex flex-col justify-center items-start p-8">
        <h1 className="text-7xl font-nunito hover:text-gray-300 transition duration-300">Miriam</h1>
        <h2 className="text-4xl font-nunito mt-2 hover:text-gray-300 transition duration-300">A.I.</h2>
        <h1 className="text-7xl font-nunito mb-6 hover:text-gray-300 transition duration-300">Khan</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <span id="typed-text" className="text-3xl font-nanum text-white"></span>
      </motion.div>
    </div>
  );
}

function AboutMeSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`animate-drift ${ isExpanded ? "animate-scale scale-[1.2] transition-transform duration-[800ms]" : ""} w-full mt-14 md:w-1/2 p-6 rounded-lg shadow-md bg-gradient-to-r from-gray-800 to-gray-700 text-white`}
    >

      <h2 
        className="text-xl font-semibold mb-6">
        a little bit about myself 
      </h2>
        <p 
          className="text-xxs leading-8 mb-4">
          Hello! I'm <span className="font-bold">Miriam</span>, a computer science student with a passion for designing and creating innovative and impactful software solutions. I focus on object-oriented programming and web development, with experience in Java, React, and HTML.
        </p>
        <p 
          className="text-xxs leading-8 mb-4">
          Some of the projects I’ve had the privilege to work on include <span className="font-bold">leading</span> the design and execution of a role-based help system, developing secure account management tools, and enforcing data privacy protocols. I also <span className="font-bold">designed</span> and built a website to support a nonprofit mission, leveraging React.js and Tailwind CSS. Additionally, I've co-led a community-driven initiative to integrate IoT solutions for wildlife preservation, <span className="font-bold">collaborating</span> with partners to support South African National Parks.
        </p>
        <p 
          className="text-xxs leading-8">
          When I’m not coding, I volunteer, mainly engaging in <span className="font-bold">editing</span> videos and designing event materials. Feel free to check out my projects and get in touch if you'd like to <span className="font-bold">collaborate</span>!
        </p>
  
        <div
          className={`absolute rounded-lg bg-gray-100 ${ isExpanded ? "bottom-8 right-2 w-5 h-1" : "bottom-4 right-4 w-7 h-0.5"}`}
        >
        </div>
        <div
          className={`absolute rounded-lg bg-gray-100 ${ isExpanded ? "bottom-4 right-6 w-1 h-5" : "bottom-4 right-4 w-0.5 h-7"}`}
        >
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute bottom-1 right-1 bg-gray-750 w-40 h-20 z-10 cursor-pointer"
        >
        </button>

    </div>
  );
}

function App() {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <NameSection />
      <AboutMeSection />
      {/* <div
        className="animate-float floating-item bg-white w-full p-4 mt-14"
      >
      </div> */}
    </div>
  );
}

export default App;