import React, { useState, useRef, useEffect } from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Globe, 
  Server, 
  Coffee,
  Database,
  Layers
} from 'lucide-react';

const techStack = [
  { Icon: Code2, name: 'HTML', color: '#E34F26', description: 'Sémantické značkování a struktura' },
  { Icon: Palette, name: 'CSS', color: '#1572B6', description: 'Stylování a animace' },
  { Icon: Zap, name: 'JavaScript', color: '#F7DF1E', description: 'Dynamické interakce' },
  { Icon: Globe, name: 'React', color: '#61DAFB', description: 'Komponentové uživatelské rozhraní' },
  { Icon: Server, name: 'Node.js', color: '#339933', description: 'Serverové běhové prostředí' },
  { Icon: Coffee, name: 'Java', color: '#007396', description: 'Podnikové aplikace' },
  { Icon: Database, name: 'C#', color: '#239120', description: '.NET vývoj' },
  { Icon: Layers, name: 'TypeScript', color: '#3178C6', description: 'Typově bezpečný JavaScript' },
];

export const SkillsShowcase: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isRotating, setIsRotating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    
    if (isRotating && !isDragging) {
      const animate = () => {
        setRotation(prev => ({
          x: prev.x + 0.3,
          y: prev.y + 0.5
        }));
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isRotating, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsRotating(false);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    
    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const toggleAutoRotate = () => {
    setIsRotating(!isRotating);
    if (selectedSkill !== null) {
      setSelectedSkill(null);
    }
  };

  const resetView = () => {
    setSelectedSkill(null);
    setRotation({ x: 0, y: 0 });
    setIsRotating(false);
    setIsDragging(false);
  };

  return (
    <div className="relative" data-skills-section>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Moje Dovednosti
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Interaktivní 3D prezentace technologií, se kterými pracuji. Klikněte, táhněte a prozkoumávejte!
        </p>
      </div>

      {/* Control Panel */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={toggleAutoRotate}
            className={`px-6 py-3 rounded-full border transition-all duration-300 ${
              isRotating 
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400' 
                : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-gray-500'
            }`}
          >
            {isRotating ? 'Zastavit rotaci' : 'Automatická rotace'}
          </button>
          <button
            onClick={resetView}
            className="px-6 py-3 rounded-full bg-gray-800/50 border border-gray-600 text-gray-300 hover:border-gray-500 transition-all duration-300"
          >
            Resetovat pohled
          </button>
        </div>
      </div>

      {/* 3D Skills Container */}
      <div 
        ref={containerRef}
        className={`relative h-96 perspective-1000 select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: '1000px' }}
      >
        {/* 3D Scene */}
        <div 
          className="relative w-full h-full preserve-3d transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {techStack.map((tech, index) => {
            const angle = (index / techStack.length) * 360;
            const radius = 140;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const z = Math.sin((angle * Math.PI) / 180) * radius;
            const isSelected = selectedSkill === index;

            return (
              <div
                key={tech.name}
                className={`absolute cursor-pointer transition-all duration-500 ${
                  isSelected ? 'z-20' : 'z-10'
                }`}
                style={{
                  transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${-angle}deg) ${
                    isSelected ? 'scale(1.3) translateZ(60px)' : ''
                  }`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-50px',
                  marginTop: '-50px',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSkill(isSelected ? null : index);
                  setIsRotating(false);
                }}
              >
                {/* Skill Icon Container */}
                <div className="relative group">
                  {/* Glow Effect */}
                  <div 
                    className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
                      isSelected ? 'opacity-90 scale-150' : 'opacity-50 group-hover:opacity-70'
                    }`}
                    style={{
                      background: `radial-gradient(circle, ${tech.color}70 0%, transparent 70%)`,
                      transform: 'scale(2.5)',
                    }}
                  />
                  
                  {/* Icon Background */}
                  <div 
                    className={`relative w-24 h-24 rounded-full border-2 backdrop-blur-sm transition-all duration-500 flex items-center justify-center ${
                      isSelected 
                        ? 'bg-gray-900/95 border-gray-400 shadow-2xl' 
                        : 'bg-gray-900/80 border-gray-600 group-hover:border-gray-500 group-hover:bg-gray-900/90'
                    }`}
                    style={{
                      boxShadow: isSelected 
                        ? `0 0 40px ${tech.color}60, 0 0 80px ${tech.color}30` 
                        : `0 0 25px ${tech.color}30`
                    }}
                  >
                    <tech.Icon 
                      size={isSelected ? 40 : 36} 
                      style={{ color: tech.color }}
                      className="drop-shadow-lg transition-all duration-300"
                    />
                  </div>

                  {/* Skill Name */}
                  <div className={`absolute -bottom-14 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                    isSelected ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="px-4 py-2 bg-gray-900/95 rounded-full border border-gray-600/50 backdrop-blur-sm">
                      <span className="text-sm font-medium text-gray-200 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/40 to-purple-500/40 rounded-full backdrop-blur-sm border border-gray-500/50 animate-pulse-glow" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Skill Details Panel */}
      {selectedSkill !== null && (
        <div className="mt-12 max-w-md mx-auto">
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-600/40 p-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="p-3 rounded-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${techStack[selectedSkill].color}30, ${techStack[selectedSkill].color}15)`
                }}
              >
                {(() => {
                  const SelectedIcon = techStack[selectedSkill].Icon;
                  return (
                    <SelectedIcon 
                      size={28} 
                      style={{ color: techStack[selectedSkill].color }}
                    />
                  );
                })()}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {techStack[selectedSkill].name}
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {techStack[selectedSkill].description}
            </p>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>Táhněte pro rotaci • Klikněte na ikony pro zaměření • Použijte ovládání výše</p>
      </div>
    </div>
  );
};