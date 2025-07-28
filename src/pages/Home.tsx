import React from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.3,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.5,
  //     },
  //   },
  // };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background-light to-background-dark dark:from-background-dark dark:to-background-light overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text-light dark:text-text-dark mb-4">
            M. Yousuf Rehan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Full Stack Developer & UI/UX Designer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-4">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate developer with expertise in modern web technologies
              and a keen eye for design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'UI/UX'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-light/20 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-4">
              Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Let's connect and discuss how we can work together on your next project.
            </p>
            <button className="mt-4 px-6 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-primary-dark dark:hover:bg-primary-light transition-colors">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 