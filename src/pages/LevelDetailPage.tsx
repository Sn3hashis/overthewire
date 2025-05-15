import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { wargames } from '../data/wargames';
import { banditLevels } from '../data/banditLevels';
import TerminalCommand from '../components/TerminalCommand';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Coffee, Lightbulb } from 'lucide-react';

interface LevelDetailPageProps {
  darkMode: boolean;
}

const LevelDetailPage: React.FC<LevelDetailPageProps> = ({ darkMode }) => {
  const { gameId, levelId } = useParams<{ gameId: string; levelId: string }>();
  const navigate = useNavigate();
  
  const wargame = wargames.find(game => game.id === gameId);
  
  // For now, only Bandit has levels defined
  const levels = gameId === 'bandit' ? banditLevels : [];
  const currentLevelIndex = levels.findIndex(level => level.id === parseInt(levelId || '0'));
  const level = currentLevelIndex >= 0 ? levels[currentLevelIndex] : null;
  
  const prevLevel = currentLevelIndex > 0 ? levels[currentLevelIndex - 1] : null;
  const nextLevel = currentLevelIndex < levels.length - 1 ? levels[currentLevelIndex + 1] : null;
  
  if (!wargame || !level) {
    return (
      <div className={`min-h-screen pt-20 flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="text-center p-8 max-w-md">
          <h1 className="text-3xl font-bold mb-4">Level Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the level you're looking for.</p>
          <button 
            onClick={() => navigate(`/wargames/${gameId}`)}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to {wargame ? wargame.name : 'Wargames'}
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`min-h-screen pt-20 px-4 sm:px-6 lg:px-8 pb-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate(`/wargames/${gameId}`)}
            className={`inline-flex items-center ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to {wargame.name}
          </button>
          
          <div className="text-sm">
            Level {level.id + 1} of {wargame.levels}
          </div>
        </div>
        
        <div className={`p-8 rounded-lg shadow-md mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">{level.title}</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Challenge</h2>
            <p className="text-lg">{level.description}</p>
          </div>
          
          {level.commands && level.commands.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Useful Commands</h2>
              <div className="space-y-3">
                {level.commands.map((command, index) => (
                  <TerminalCommand 
                    key={index} 
                    command={command}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
          )}
          
          {level.hints && level.hints.length > 0 && (
            <div className={`p-6 rounded-lg mb-8 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <h2 className="text-xl font-semibold mb-3 flex items-center">
                <Lightbulb size={20} className="mr-2 text-yellow-500" />
                Hints
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                {level.hints.map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-amber-50'}`}>
            <h2 className="text-xl font-semibold mb-3 flex items-center">
              <Coffee size={20} className="mr-2 text-amber-600" />
              Need Help?
            </h2>
            <p className="mb-3">
              Stuck on this level? Remember these tips:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Read the description carefully for clues about what to do</li>
              <li>Use Linux man pages to learn more about commands</li>
              <li>Try to understand what each command does before using it</li>
              <li>Don't be afraid to experiment - that's how you learn!</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          {prevLevel ? (
            <button 
              onClick={() => navigate(`/wargames/${gameId}/level/${prevLevel.id}`)}
              className={`px-5 py-2.5 rounded-lg inline-flex items-center ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <ChevronLeft size={18} className="mr-2" />
              Previous Level
            </button>
          ) : (
            <div></div>  
          )}
          
          {nextLevel ? (
            <button 
              onClick={() => navigate(`/wargames/${gameId}/level/${nextLevel.id}`)}
              className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Next Level
              <ChevronRight size={18} className="ml-2" />
            </button>
          ) : (
            <button 
              onClick={() => navigate(`/wargames/${gameId}`)}
              className="px-5 py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors inline-flex items-center"
            >
              Complete Game
              <ArrowRight size={18} className="ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LevelDetailPage;