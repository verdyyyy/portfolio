import React, { useState } from 'react';
import { CodeDisplay } from './CodeDisplay';
import { SkillsShowcase } from './SkillsShowcase';
import { NavigationBar } from './NavigationBar';
import { ContactPage } from './ContactPage';

export const Workspace: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Digitální Pracovní Prostor
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kde se kód setkává s kreativitou ve futuristickém prostředí
          </p>
        </div>

        {/* Main workspace area */}
        <div className="relative mb-24">
          {/* Floating desk effect */}
          <div className="relative mx-auto max-w-4xl">
            {/* Desk glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
            
            {/* Main desk surface */}
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-8 md:p-12 shadow-2xl">
              
              {/* Holographic code display */}
              <div className="transform hover:scale-105 transition-transform duration-500">
                <CodeDisplay />
              </div>
            </div>
          </div>

          {/* Side floating elements */}
          <div className="absolute top-1/4 -left-16 opacity-60">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
          </div>
          <div className="absolute bottom-1/4 -right-16 opacity-40">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Interactive 3D Skills Showcase */}
        <div className="mb-24">
          <SkillsShowcase />
        </div>
      </div>

      {/* Navigation Bar */}
      <NavigationBar onContactClick={() => setIsContactOpen(true)} />

      {/* Contact Page Modal */}
      <ContactPage 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};