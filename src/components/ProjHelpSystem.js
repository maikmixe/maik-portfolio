import React from 'react';
import { motion } from 'framer-motion';

// import helpSystemPdf from "../assets/CSE360_HelpSystem.pdf";

// Hero Section
function HeroSection() {
  return (
    <section className="text-center py-16">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Article Help System
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        The Article Help System is a role-based platform designed to support students, instructors, and administrators with tailored resources and functionalities. It ensures secure account management, streamlined content organization, and real-time assistance.
      </motion.p>
    </section>
  );
}

// Features Section
function FeatureCard({ title, description, index }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Role-Based Access Control',
      description: 'Securely manage access levels and permissions for students, instructors, and administrators using encrypted authentication.',
    },
    {
      title: 'Dynamic Content Management',
      description: 'Enable CRUD operations for help articles and advanced filtering mechanisms tailored to user roles.',
    },
    {
      title: 'Comprehensive Testing',
      description: 'Ensure reliability with rigorous testing using JUnit and manual validation, refining backup, restore, and search functionalities.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Leverage a layered system design for efficient scalability and content organization, catering to dynamic user needs.',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-semibold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

// Languages Used Section
function LanguagesSection() {
  const technologies = [
    {
      language: 'Java',
      usage: 'Used for backend article management, including CRUD operations and secure data handling.',
    },
    {
      language: 'JavaFX',
      usage: 'Facilitated the development of a dynamic and user-friendly graphical user interface for role-based access and interactions.',
    },
    {
      language: 'SQL',
      usage: 'Implemented robust data storage solutions and enabled efficient querying for help articles and user management.',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-semibold text-center mb-12">Languages Used</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-2">{tech.language}</h3>
            <p className="text-gray-400">{tech.usage}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// // PDF Viewer Section
// function PdfViewerSection() {
//   return (
//     <section className="py-16 bg-gray-700 text-white text-center mb-12">
//       <h2 className="text-4xl font-semibold mb-6">Project Documentation</h2>
//       <iframe
//         src={helpSystemPdf}
//         className="w-full h-96 border-0 rounded-lg"
//         title="Project Documentation"
//       ></iframe>
//     </section>
//   );
// }

// Call-to-Action Section
function CallToActionSection() {
  return (
    <section className="py-16 bg-gray-800 rounded-lg text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Want to Learn More?
      </motion.h2>
      <motion.p
        className="text-lg text-gray-400 max-w-xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Feel free to reach out to me on my contact form to check out the project documentation or source code.
      </motion.p>
    </section>
  );
}

// Main Project1 Component
function Project1() {
  return (
    <div>
      <div className="mt-16 bg-gray-900 text-white min-h-screen p-8">
        <HeroSection />
        <FeaturesSection />
        <LanguagesSection />
        {/* <PdfViewerSection /> */}
        <CallToActionSection />
      </div>
    </div>
  );
}

export default Project1;
