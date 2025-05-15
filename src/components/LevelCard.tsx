import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Level } from '../types';
import { motion } from 'framer-motion';

interface LevelCardProps {
  level: Level;
  gameId: string;
  darkMode: boolean;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, gameId, darkMode }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-lg overflow-hidden shadow-md transition-all duration-200 ${
        darkMode 
          ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700' 
          : 'bg-white hover:bg-gray-50 border border-gray-200'
      } hover:shadow-lg cursor-pointer transform hover:-translate-y-1`}
      onClick={() => navigate(`/wargames/${gameId}/level/${level.id}`)}
    >
      <div className="p-4">
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg font-semibold mb-2"
        >
          {level.title}
        </motion.h3>
        <p className={`text-sm truncate ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {level.description.length > 100 
            ? `${level.description.substring(0, 100)}...` 
            : level.description}
        </p>
        <motion.div 
          className="mt-3 flex justify-end"
          whileHover={{ x: 5 }}
        >
          <div className="flex items-center text-primary-500 hover:text-primary-600 transition-colors">
            <span className="mr-1 text-sm font-medium">Open</span>
            <ChevronRight size={16} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LevelCard;