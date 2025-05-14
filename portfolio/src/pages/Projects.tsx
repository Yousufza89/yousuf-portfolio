import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl?: string;
  category: 'ai' | 'fullstack' | 'system' | 'algorithm';
  highlights?: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'StockSentiment-LSTM',
      description: 'Advanced stock price forecasting system using Twitter/news sentiment analysis with stacked LSTM-GRU models for real-time market predictions.',
      technologies: ['Python', 'TensorFlow/Keras', 'Pandas', 'NLP', 'LSTM', 'GRU'],
      githubUrl: 'https://github.com/Yousufza89/StockSentiment-LSTM',
      category: 'ai',
      highlights: [
        'Real-time sentiment data processing',
        'Deep learning forecasting with temporal models',
        'Focus on short-term hourly trends'
      ]
    },
    {
      title: 'Hourly Stock Forecasting',
      description: 'Predictive model for stock movement using historical features with combined LSTM and GRU architectures for enhanced accuracy.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'LSTM', 'GRU', 'Deep Learning'],
      githubUrl: 'https://github.com/Yousufza89/Hourly-Stock-Forecasting',
      category: 'ai',
      highlights: [
        'Clean data pipeline',
        'Realistic financial forecasting',
        'Combined DL models for accuracy boost'
      ]
    },
    {
      title: 'AI Maze Solver',
      description: 'Intelligent maze-solving agent implementing A* and BFS algorithms with visual path decision making and simulation capabilities.',
      technologies: ['Python', 'A* Algorithm', 'BFS', 'Heuristics', 'Pathfinding'],
      githubUrl: 'https://github.com/Yousufza89/AI-Maze-Solver',
      category: 'algorithm',
      highlights: [
        'Visualized path decisions',
        'Algorithmic thinking',
        'Simulation of intelligent movement'
      ]
    },
    {
      title: 'Banking Network Simulation',
      description: 'Comprehensive banking network simulator with core operations, transaction handling, and account management features.',
      technologies: ['C++', 'Object-Oriented Design', 'Data Structures'],
      githubUrl: 'https://github.com/Yousufza89/Banking-Network-Simulation',
      category: 'system',
      highlights: [
        'Core banking operations',
        'Transaction management',
        'Account handling'
      ]
    },
    {
      title: 'SY Fitness Club',
      description: 'Full-stack gym management system with role-based admin/member panel, real-time registration, and animated UI.',
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
      githubUrl: 'https://github.com/Yousufza89/SY-Fitness-Club',
      category: 'fullstack',
      highlights: [
        'Role-based access control',
        'Real-time registration',
        'Animated UI components'
      ]
    },
    {
      title: 'Parallel Matrix Inversion',
      description: 'High-performance matrix inversion implementation using OpenMP for parallel processing, achieving 80% faster operations.',
      technologies: ['C++', 'OpenMP', 'Parallel Computing'],
      githubUrl: 'https://github.com/Yousufza89/Parallel-Matrix-Inversion',
      category: 'algorithm',
      highlights: [
        '80% performance improvement',
        'Parallel processing',
        'Optimized algorithms'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'ai':
        return 'from-purple-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30';
      case 'fullstack':
        return 'from-green-500/20 to-teal-500/20 dark:from-green-500/30 dark:to-teal-500/30';
      case 'system':
        return 'from-orange-500/20 to-red-500/20 dark:from-orange-500/30 dark:to-red-500/30';
      case 'algorithm':
        return 'from-yellow-500/20 to-amber-500/20 dark:from-yellow-500/30 dark:to-amber-500/30';
      default:
        return 'from-gray-500/20 to-gray-600/20 dark:from-gray-500/30 dark:to-gray-600/30';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing expertise in AI, full-stack development,
            system programming, and algorithm implementation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`card group relative overflow-hidden bg-gradient-to-br ${getCategoryColor(project.category)}`}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                {project.highlights && (
                  <ul className="mb-4 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 dark:bg-black/10 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline"
                >
                  View on GitHub
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 