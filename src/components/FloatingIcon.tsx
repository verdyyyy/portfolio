import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  Icon: LucideIcon;
  name: string;
  color: string;
  delay: number;
  size?: number;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({ 
  Icon, 
  name, 
  color, 
  delay, 
  size = 48 
}) => {
  return (
    <div 
      className="absolute animate-float"
      style={{
        animationDelay: `${delay}s`,
        filter: `drop-shadow(0 0 20px ${color}40)`,
      }}
    >
      <div className="relative group cursor-pointer">
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
            transform: 'scale(1.5)',
          }}
        />
        <div className="relative p-4 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300 group-hover:scale-110">
          <Icon 
            size={size} 
            style={{ color }} 
            className="drop-shadow-lg"
          />
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-3 py-1 bg-gray-900/90 rounded-full border border-gray-700/50 backdrop-blur-sm">
            <span className="text-xs font-medium text-gray-200">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};