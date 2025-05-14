import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'JavaScript', 'C++', 'Java', 'C'],
    },
    {
      category: 'AI & ML',
      items: ['TensorFlow', 'Keras', 'LSTM', 'GRU', 'NLP', 'Deep Learning'],
    },
    {
      category: 'Web Development',
      items: ['React', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Tailwind'],
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'MySQL', 'Postman', 'AWS', 'OpenMP'],
    },
    {
      category: 'Core Concepts',
      items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS', 'Parallel Computing'],
    },
  ];

  const timeline = [
    {
      title: 'Full-Stack Developer & AI Engineer',
      company: 'Basil Innovations Ltd.',
      period: 'Jan 2023 - Present',
      description: [
        'Developed AI-powered stock forecasting models using LSTM and GRU architectures',
        'Built scalable APIs with Node.js, Python, MySQL (30–50% faster operations)',
        'Implemented sentiment analysis for real-time market predictions',
        'Participated in sprint planning and maintained code documentation',
      ],
    },
    {
      title: 'BS in Computer Science',
      company: 'FAST-NUCES, Karachi',
      period: 'Expected Jun 2026',
      description: [
        'Focus on AI, Machine Learning, and Software Engineering',
        'Specialized courses in Deep Learning and Neural Networks',
        'Active participation in AI research and development projects',
      ],
    },
    {
      title: 'Matriculation',
      company: 'BVS Parsi High School',
      period: 'May 2020',
      description: [
        'Completed Matriculation with Computer Science',
        'Developed strong foundation in programming and problem-solving',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm M. Yousuf Rehan, a passionate software developer transitioning into the world of Artificial Intelligence and Deep Learning. 
            I build real-world applications using full-stack technologies and am now focused on crafting intelligent systems using LSTM, 
            GRU, and reinforcement learning techniques. I thrive on solving complex problems—from stock price forecasting to algorithmic 
            decision-making—with clean code and data-driven strategies. Currently pursuing my BS in Computer Science at FAST-NUCES, 
            I bring together backend logic, frontend interaction, and AI models in a seamless way.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <motion.div key={skillGroup.category} variants={itemVariants}>
                  <h3 className="text-lg font-semibold mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Experience & Education</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary-light dark:border-primary-dark"
                  variants={itemVariants}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-light dark:bg-primary-dark" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.company} • {item.period}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 text-sm"
                      >
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 