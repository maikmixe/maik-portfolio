import React from 'react';
import { motion } from 'framer-motion';

// Hero Section
function HeroSection() {
  return (
    <section className="text-center py-16">
      <motion.h1
        className="text-3xl font-semibold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        EPICS (Engineering Projects in Community Service) 
        <h1 className="mt-4 text-6xl font-bold">South Africa Animal Preservation</h1>

      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        A collaborative effort to implement preservation initiatives in South African National Parks, leveraging technology to support real-time location tracking and data management.
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
      title: 'Community Collaboration',
      description: 'Corresponded with a community partner to implement preservation initiatives in South African National Parks.',
    },
    {
      title: 'Team Management',
      description: 'Consulted with a team of eight to upload location data from a Raspberry Pi into a central dashboard.',
    },
    {
      title: 'Backend Integration',
      description: 'Contributed to coding and debugging backend integration, ensuring seamless data flow and communication.',
    },
    {
      title: 'Framework Evaluation',
      description: 'Evaluated and tested frameworks to optimize performance and scalability for the application.',
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
      language: 'Python',
      usage: 'Used for writing and debugging scripts for the Raspberry Pi Pico to support data collection.',
    },
    {
      language: 'SQL',
      usage: 'Implemented a MySQL database for managing real-time location tracking data.',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-semibold text-center mb-12">Languages I Worked With</h2>
      <div className="flex space-x-20 justify-center">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 w-[350px] h-[170px] flex flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-2 mt-4">{tech.language}</h3>
            <p className="text-gray-400 ml-4 mr-4 mb-4 text-center">{tech.usage}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

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
          Feel free to reach out to me on my contact form with any questions.
        </motion.p>
      </section>
    );
}

// Main Project Component
function AfricaAnimalPreservation() {
  return (
    <div>
      <div className="mt-16 bg-gray-900 text-white min-h-screen p-8">
        <HeroSection />
        <FeaturesSection />
        <LanguagesSection />
        <CallToActionSection />
      </div>
    </div>
  );
}

export default AfricaAnimalPreservation;
