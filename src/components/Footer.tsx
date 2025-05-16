import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                OverTheWire
              </span>
            </div>
            <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Empowering the security community through interactive learning and practical challenges. 
              Join us in making cybersecurity education accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/OverTheWireOrg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2 rounded-full transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:info@overthewire.org" 
                className={`p-2 rounded-full transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/wargames" 
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Wargames
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/news" 
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  News
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
              Popular Games
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/wargames/bandit" 
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Bandit
                </a>
              </li>
              <li>
                <a 
                  href="/wargames/natas" 
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Natas
                </a>
              </li>
              <li>
                <a 
                  href="/wargames/leviathan" 
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Leviathan
                </a>
              </li>
              <li>
                <a 
                  href="/wargames/krypton" 
                  className={`text-sm transition-colors ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Krypton
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} OverTheWire. All rights reserved.
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-4 sm:mt-0 flex items-center`}>
              Made with <Heart size={14} className="mx-1 text-red-500" /> by the security community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;