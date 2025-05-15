import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Award, BookOpen, Terminal, Code, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomePageProps {
  darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className={`min-h-screen pt-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className={`relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block p-2 px-4 rounded-full bg-primary-100 text-primary-800 mb-6"
          >
            <span className="text-sm font-semibold">Learn Cybersecurity Through Practice</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-500"
          >
            Master Security Through <br />Real-World Challenges
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Join thousands of security enthusiasts learning cybersecurity through interactive wargames. 
            Practice your skills with hands-on challenges designed for all skill levels.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/wargames')}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Start Learning
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/about')}
              className={`px-8 py-4 font-medium rounded-lg transition-all duration-300 flex items-center justify-center ${
                darkMode 
                  ? 'bg-gray-700 text-white hover:bg-gray-600' 
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              } hover:shadow-lg`}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose OverTheWire?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Learn security concepts through carefully crafted challenges
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Terminal className="w-8 h-8" />,
                title: "Hands-on Learning",
                description: "Practice real-world security concepts through interactive challenges",
                color: "text-green-500"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Progressive Difficulty",
                description: "Start with basics and advance to complex security problems",
                color: "text-blue-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Industry Relevant",
                description: "Learn skills that directly apply to cybersecurity careers",
                color: "text-purple-500"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Secure Environment",
                description: "Practice in a safe, controlled learning environment",
                color: "text-red-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Track Progress",
                description: "Monitor your advancement through different skill levels",
                color: "text-yellow-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Active Community",
                description: "Join a community of security enthusiasts and learners",
                color: "text-orange-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-750' 
                    : 'bg-white hover:bg-gray-50'
                } shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className={`${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Getting Started Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Begin your cybersecurity learning adventure in four simple steps
            </p>
          </motion.div>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                step: 1,
                title: "Choose Your Path",
                description: "Start with Bandit for basics or jump into advanced challenges"
              },
              {
                step: 2,
                title: "Connect Securely",
                description: "Use SSH to access our secure training environment"
              },
              {
                step: 3,
                title: "Solve Challenges",
                description: "Complete increasingly complex security puzzles"
              },
              {
                step: 4,
                title: "Level Up",
                description: "Progress through levels and build your skills"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg relative overflow-hidden group`}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary-500"></div>
                <div className="relative flex items-start">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 font-bold text-lg mr-4 group-hover:scale-110 transition-transform">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/wargames/bandit')}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 inline-flex items-center group"
            >
              Begin with Bandit
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;