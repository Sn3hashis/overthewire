import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WargamesPage from './pages/WargamesPage';
import WargameDetailPage from './pages/WargameDetailPage';
import LevelDetailPage from './pages/LevelDetailPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or use system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update localStorage when darkMode changes
    localStorage.setItem('darkMode', String(darkMode));
    
    // Update document class
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/dashboard" element={<DashboardPage darkMode={darkMode} />} />
            <Route path="/wargames" element={<WargamesPage darkMode={darkMode} />} />
            <Route path="/wargames/:id" element={<WargameDetailPage darkMode={darkMode} />} />
            <Route path="/wargames/:gameId/level/:levelId" element={<LevelDetailPage darkMode={darkMode} />} />
            <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
            <Route path="/news" element={<AboutPage darkMode={darkMode} />} />
            <Route path="/contact" element={<AboutPage darkMode={darkMode} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;