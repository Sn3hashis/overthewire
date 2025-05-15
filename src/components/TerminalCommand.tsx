import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TerminalCommandProps {
  command: string;
  darkMode: boolean;
}

const TerminalCommand: React.FC<TerminalCommandProps> = ({ command, darkMode }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center rounded-md overflow-hidden my-2 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-100'
      } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
    >
      <pre className={`px-4 py-3 font-mono text-sm flex-grow overflow-x-auto ${
        darkMode ? 'text-green-400' : 'text-gray-800'
      }`}>
        <motion.code
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          $ {command}
        </motion.code>
      </pre>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={copyToClipboard}
        className={`p-3 flex items-center justify-center ${
          darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'
        } transition-colors`}
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <CheckCircle size={18} className="text-green-500" />
          </motion.div>
        ) : (
          <Copy size={18} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
        )}
      </motion.button>
    </motion.div>
  );
};

export default TerminalCommand;