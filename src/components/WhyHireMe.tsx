import React from 'react';
import { motion } from 'framer-motion';

const WhyHireMe: React.FC = () => {
  const valueProps = [
    {
      title: 'AI & ML Expertise',
      description: 'Deep knowledge in LSTM, GRU, and neural networks for real-world applications',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Full-Stack Development',
      description: 'Proficient in both frontend and backend technologies for scalable solutions',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Problem Solver',
      description: 'Strong analytical skills and experience in complex system design',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const badges = [
    { name: 'AI/ML', color: 'bg-purple-500' },
    { name: 'Deep Learning', color: 'bg-blue-500' },
    { name: 'Full-Stack', color: 'bg-green-500' },
    { name: 'Problem Solver', color: 'bg-yellow-500' },
    { name: 'Team Player', color: 'bg-red-500' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Hire Me?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Combining technical expertise with a passion for innovation to deliver
            exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="text-primary-light dark:text-primary-dark mb-4">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{prop.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {badges.map((badge, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`${badge.color} text-white px-4 py-2 rounded-full text-sm font-medium`}
            >
              {badge.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe; 