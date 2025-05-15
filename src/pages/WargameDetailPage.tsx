import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { wargames } from '../data/wargames';
import { banditLevels } from '../data/banditLevels';
import LevelCard from '../components/LevelCard';
import { ArrowLeft, Shield, Book, Info } from 'lucide-react';

interface WargameDetailPageProps {
  darkMode: boolean;
}

const WargameDetailPage: React.FC<WargameDetailPageProps> = ({ darkMode }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const wargame = wargames.find(game => game.id === id);
  
  if (!wargame) {
    return (
      <div className={`min-h-screen pt-20 flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="text-center p-8 max-w-md">
          <h1 className="text-3xl font-bold mb-4">Wargame Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the wargame you're looking for.</p>
          <button 
            onClick={() => navigate('/wargames')}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Wargames
          </button>
        </div>
      </div>
    );
  }
  
  // For now, only Bandit has levels defined
  const levels = id === 'bandit' ? banditLevels : [];
  
  return (
    <div className={`min-h-screen pt-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/wargames')}
          className={`mb-6 inline-flex items-center ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          } transition-colors`}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Wargames
        </button>
        
        <div className={`p-8 rounded-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="mr-6 flex-shrink-0 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Shield size={32} className="text-blue-600" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{wargame.name}</h1>
              <div className="flex items-center mb-4">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mr-3 ${
                  wargame.difficulty === 'Beginner' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : wargame.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {wargame.difficulty}
                </span>
                <span className="text-sm">
                  {wargame.levels} Levels
                </span>
              </div>
              <p className="text-lg">{wargame.description}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Game Levels</h2>
            {levels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {levels.map(level => (
                  <LevelCard 
                    key={level.id} 
                    level={level} 
                    gameId={wargame.id} 
                    darkMode={darkMode} 
                  />
                ))}
              </div>
            ) : (
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <p>Levels for this wargame will be available soon. Please check back later.</p>
              </div>
            )}
          </div>
          
          <div>
            <div className={`p-6 rounded-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Info size={20} className="mr-2 text-blue-500" />
                How to Play
              </h3>
              <ol className="list-decimal list-inside space-y-3 ml-2">
                <li>Select a level to begin</li>
                <li>Read the challenge description carefully</li>
                <li>Connect to the game server using SSH</li>
                <li>Solve the challenge to find the password</li>
                <li>Use the password to access the next level</li>
              </ol>
            </div>
            
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Book size={20} className="mr-2 text-blue-500" />
                Helpful Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://linux.die.net/man/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Linux Man Pages
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.gnu.org/software/bash/manual/bash.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Bash Reference Manual
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ssh.com/ssh/command/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    SSH Command Reference
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WargameDetailPage;