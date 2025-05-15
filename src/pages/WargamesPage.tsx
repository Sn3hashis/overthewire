import React from 'react';
import { wargames } from '../data/wargames';
import WargameCard from '../components/WargameCard';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Users } from 'lucide-react';

interface WargamesPageProps {
  darkMode: boolean;
}

const WargamesPage: React.FC<WargamesPageProps> = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={`min-h-screen pt-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-100 text-primary-800 mb-6">
            <Shield className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">Choose Your Challenge</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500">
            Security Wargames
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Select a wargame that matches your skill level. Each game focuses on different security concepts,
            providing hands-on experience in a controlled environment.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <BookOpen className="w-8 h-8 text-primary-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Learn by Doing</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Hands-on challenges teach you security concepts through practical application.
            </p>
          </div>
          
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <Shield className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Practice in a controlled environment designed for learning and experimentation.
            </p>
          </div>
          
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <Users className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Join a community of learners and share knowledge as you progress.
            </p>
          </div>
        </motion.div>
        
        <div className="space-y-16">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="inline-block w-2 h-8 bg-green-500 rounded-full mr-4"></span>
              Beginner Wargames
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wargames
                .filter(game => game.difficulty === 'Beginner')
                .map(game => (
                  <WargameCard key={game.id} wargame={game} darkMode={darkMode} />
                ))
              }
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="inline-block w-2 h-8 bg-yellow-500 rounded-full mr-4"></span>
              Intermediate Wargames
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wargames
                .filter(game => game.difficulty === 'Intermediate')
                .map(game => (
                  <WargameCard key={game.id} wargame={game} darkMode={darkMode} />
                ))
              }
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="inline-block w-2 h-8 bg-red-500 rounded-full mr-4"></span>
              Advanced Wargames
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wargames
                .filter(game => game.difficulty === 'Advanced')
                .map(game => (
                  <WargameCard key={game.id} wargame={game} darkMode={darkMode} />
                ))
              }
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WargamesPage;