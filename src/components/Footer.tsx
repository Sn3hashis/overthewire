import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">OverTheWire</h3>
            <p className="text-sm mb-4">
              Learn cybersecurity the fun way! OverTheWire community offers wargames to help you learn and practice security concepts.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/OverTheWireOrg" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:info@overthewire.org" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/wargames" className="hover:text-blue-500 transition-colors">Wargames</a></li>
              <li><a href="/about" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="/news" className="hover:text-blue-500 transition-colors">News</a></li>
              <li><a href="/contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Wargames</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/wargames/bandit" className="hover:text-blue-500 transition-colors">Bandit</a></li>
              <li><a href="/wargames/natas" className="hover:text-blue-500 transition-colors">Natas</a></li>
              <li><a href="/wargames/leviathan" className="hover:text-blue-500 transition-colors">Leviathan</a></li>
              <li><a href="/wargames/krypton" className="hover:text-blue-500 transition-colors">Krypton</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} OverTheWire. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-4 sm:mt-0 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by the security community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;