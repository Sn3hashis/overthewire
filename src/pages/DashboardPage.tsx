import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  Clock, 
  BarChart2, 
  Award, 
  Star,
  BookOpen,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { wargames } from '../data/wargames';

interface DashboardPageProps {
  darkMode: boolean;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ darkMode }) => {
  const navigate = useNavigate();

  // Mock user progress data - in a real app, this would come from a backend
  const userProgress = {
    completedLevels: 12,
    totalTime: '24h 35m',
    currentStreak: 5,
    totalPoints: 1250,
    recentAchievements: [
      { id: 1, name: 'First Blood', description: 'Complete your first level', icon: Trophy },
      { id: 2, name: 'Quick Learner', description: 'Complete 5 levels in a day', icon: Target },
      { id: 3, name: 'Persistent', description: '5 day streak', icon: Clock },
    ],
    inProgress: [
      { id: 'bandit', level: 12, progress: 75 },
      { id: 'natas', level: 3, progress: 30 },
      { id: 'leviathan', level: 1, progress: 20 },
    ]
  };

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
        {/* Welcome Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Hacker!</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Track your progress and keep pushing your security skills forward.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Completed Levels', value: userProgress.completedLevels, icon: CheckCircle, color: 'text-green-500' },
            { label: 'Total Time', value: userProgress.totalTime, icon: Clock, color: 'text-blue-500' },
            { label: 'Current Streak', value: `${userProgress.currentStreak} days`, icon: Target, color: 'text-purple-500' },
            { label: 'Total Points', value: userProgress.totalPoints, icon: Star, color: 'text-yellow-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Games in Progress */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Games in Progress</h2>
            <div className="space-y-4">
              {userProgress.inProgress.map((game) => {
                const wargame = wargames.find(w => w.id === game.id);
                return (
                  <motion.div
                    key={game.id}
                    whileHover={{ scale: 1.01 }}
                    className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} cursor-pointer`}
                    onClick={() => navigate(`/wargames/${game.id}/level/${game.level}`)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <BookOpen className="w-6 h-6 text-primary-500 mr-3" />
                        <h3 className="text-lg font-semibold">{wargame?.name}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        wargame?.difficulty === 'Beginner' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : wargame?.difficulty === 'Intermediate'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        Level {game.level}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{game.progress}%</span>
                      </div>
                      <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className="h-full rounded-full bg-primary-500"
                          style={{ width: `${game.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="flex items-center text-primary-500 hover:text-primary-600 transition-colors">
                        <span className="mr-2">Continue</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="space-y-6">
                {userProgress.recentAchievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start">
                    <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mr-4`}>
                      <achievement.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{achievement.name}</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Chart */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Activity Overview</h2>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <BarChart2 className="w-6 h-6 text-primary-500" />
                  <select className={`text-sm ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} rounded-lg px-3 py-1`}>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                  </select>
                </div>
                <div className="h-48 flex items-end justify-between">
                  {[40, 65, 25, 85, 30, 45, 60].map((height, index) => (
                    <div key={index} className="w-8">
                      <div 
                        className="bg-primary-500 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <span key={index}>{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;