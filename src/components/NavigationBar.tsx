import React from 'react';
import { Github, User, Mail } from 'lucide-react';

const navigationItems = [
  {
    id: 'gitlab',
    name: 'GitLab',
    icon: Github,
    url: 'https://gitlab.spseplzen.cz/verdanm',
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 'skills',
    name: 'Dovednosti',
    icon: User,
    color: 'from-cyan-400 to-blue-500',
    action: 'scroll-to-skills'
  },
  {
    id: 'contact',
    name: 'Kontakt',
    icon: Mail,
    color: 'from-green-400 to-emerald-500',
    action: 'show-contact'
  }
];

interface NavigationBarProps {
  onContactClick: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ onContactClick }) => {
  const handleItemClick = (item: typeof navigationItems[0]) => {
    if (item.action === 'scroll-to-skills') {
      const skillsSection = document.querySelector('[data-skills-section]');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.action === 'show-contact') {
      onContactClick();
    } else if (item.url) {
      window.open(item.url, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Background div for better visibility */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-700/30 -m-2" />
      
      <div className="relative flex gap-4">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="group relative"
          >
            {/* Label - moved above the button */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-3 py-1 bg-gray-900/95 rounded-full border border-gray-700/50 backdrop-blur-sm">
                <span className="text-xs font-medium text-gray-200 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </div>

            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
            
            {/* Main button */}
            <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-4 hover:border-gray-500/70 transition-all duration-300 group-hover:scale-110 hover:bg-gray-700/80">
              <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};