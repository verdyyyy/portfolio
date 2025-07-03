import React, { useState, useEffect } from 'react';
import { Home, User, GitlabIcon, Mail, Briefcase, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { id: 'home', label: 'Domů', icon: Home },
    { id: 'about', label: 'O mně', icon: User },
    { id: 'experience', label: 'Zkušenosti', icon: Briefcase },
    { id: 'contact', label: 'Kontakt', icon: Mail },
    { id: 'gitlab', label: 'GitLab', icon: GitlabIcon }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'gitlab') {
      window.open('https://gitlab.spseplzen.cz/verdanm', '_blank');
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Theme Toggle - Top Left on mobile, Top Right on desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed top-4 left-4 md:top-6 md:right-6 md:left-auto z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 dark:from-purple-600 dark:to-blue-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? 'sun' : 'moon'}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {isDark ? <Sun size={20} className="md:w-6 md:h-6" /> : <Moon size={20} className="md:w-6 md:h-6" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Bottom Centered Navigation - Adjusted width */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-4 md:bottom-8 z-50 w-full flex justify-center px-4"
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl px-3 md:px-6 py-3 md:py-4 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
          <div className="flex items-center space-x-2 md:space-x-4">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              const isGitLab = item.id === 'gitlab';
              
              return (
                <motion.div
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative p-2.5 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 group ${
                      isActive && !isGitLab
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                        : isGitLab
                        ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    <IconComponent size={18} className="md:w-6 md:h-6" />

                    {/* GitLab special indicator */}
                    {isGitLab && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-0.5 md:-top-1 -right-0.5 md:-right-1 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full shadow-lg"
                      />
                    )}
                    
                    {/* Enhanced Tooltip for larger screens */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      whileHover={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute -top-12 md:-top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-medium whitespace-nowrap pointer-events-none shadow-xl hidden sm:block"
                    >
                      {item.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 md:border-l-4 border-r-2 md:border-r-4 border-t-4 md:border-t-6 border-transparent border-t-gray-900 dark:border-t-gray-100" />
                    </motion.div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;