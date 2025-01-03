import React from 'react';
import { motion } from 'framer-motion';

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
        Nonprofit Website
      </motion.h1>
      <motion.p
        className="text-lg text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        A dynamic, multi-page website built to showcase the mission and initiatives for a nonprofit organization featuring interactive navigation and a responsive design.
      </motion.p>
    </section>
  );
}

// Features Section
function FeatureCard({ title, description, index }) {
  return (
    <motion.div
      className="bg-gray-800 w-[500px] h-[150px] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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
        title: 'Interactive Components',
        description: 'A secure and scalable donation portal and volunteer signup system to process contributions seamlessly through external integrations.',
      },
      {
        title: 'Dynamic Navigation',
        description: 'Efficient client-side routing implemented with React Router for seamless transitions.',
      },
      {
        title: 'Responsive Design',
        description: 'Ensured compatibility and user accessibility across all devices through modern responsive techniques.',
      },
    ];
  
    return (
      <section className="py-16">
        <h2 className="text-4xl font-semibold text-center mb-12">Key Features</h2>
        <div className="flex flex-col justify-center items-center gap-8">
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
      language: 'React.js',
      usage: 'Utilized for building reusable components and managing client-side navigation.',
    },
    {
      language: 'Tailwind CSS',
      usage: 'Applied utility-first CSS for efficient and responsive styling.',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-semibold text-center mb-12">Languages & Frameworks Used</h2>
      <div className="flex items-center justify-center space-x-10">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 w-80 h-40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl text-center font-bold mb-2">{tech.language}</h3>
            <p className="text-gray-400 text-center">{tech.usage}</p>
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
          Feel free to reach out to me on my contact form for any questions about this project.
        </motion.p>
      </section>
    );
}

// Main Project Component
function NonprofitWebsite() {
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

export default NonprofitWebsite;
