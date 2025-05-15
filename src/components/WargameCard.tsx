import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wargame } from '../types';
import { Shield, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface WargameCardProps {
  wargame: Wargame;
  darkMode: boolean;
}

const WargameCard: React.FC<WargameCardProps> = ({ wargame, darkMode }) => {
  const navigate = useNavigate();
  
  const getBadgeColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700' 
          : 'bg-white hover:bg-gray-50 border border-gray-200'
      } hover:shadow-xl cursor-pointer transform hover:-translate-y-1`}
      onClick={() => navigate(`/wargames/${wargame.id}`)}
    >
      <div className="relative h-40 overflow-hidden">
        <motion.img 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={wargame.thumbnail} 
          alt={wargame.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold mb-2"
          >
            {wargame.name}
          </motion.h3>
          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getBadgeColor(wargame.difficulty)}`}>
            {wargame.difficulty}
          </span>
        </div>
        <p className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {wargame.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield size={16} className="text-primary-500 mr-1" />
            <span className="text-sm">{wargame.levels} Levels</span>
          </div>
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
          >
            <span className="mr-1 text-sm font-medium">Start</span>
            <ChevronRight size={16} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WargameCard;