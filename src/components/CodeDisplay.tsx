import React, { useState, useEffect } from 'react';
import { Terminal, Code } from 'lucide-react';

const codeSnippets = [
  {
    language: 'TypeScript',
    code: `interface Developer {
  name: string;
  skills: TechStack[];
  passion: 'creating amazing things';
}

const me: Developer = {
  name: 'Student Programmer',
  skills: ['React', 'Node.js', 'TypeScript'],
  passion: 'creating amazing things'
};`
  },
  {
    language: 'JavaScript',
    code: `const createMagic = async () => {
  const ideas = await brainstorm();
  const code = ideas.map(transform);
  return code.filter(isAwesome);
};

createMagic().then(deploy);`
  },
  {
    language: 'React',
    code: `const Portfolio = () => {
  const [dreams, setDreams] = useState([]);
  
  useEffect(() => {
    const reality = dreams.map(makeReal);
    setDreams(reality);
  }, [creativity]);
  
  return <Future />;
};`
  }
];

export const CodeDisplay: React.FC = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];
    let currentIndex = 0;
    setDisplayedCode('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (currentIndex <= snippet.code.length) {
        setDisplayedCode(snippet.code.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentSnippet]);

  return (
    <div className="relative">
      {/* Holographic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-60 animate-pulse" />
      
      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-6 shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-700/50">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-400">
            {codeSnippets[currentSnippet].language}
          </span>
          <div className="flex gap-2 ml-auto">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
        </div>

        {/* Code content */}
        <div className="font-mono text-sm leading-relaxed">
          <pre className="text-gray-300 whitespace-pre-wrap">
            <code>{displayedCode}</code>
            {isTyping && (
              <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse" />
            )}
          </pre>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-ping" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse" />
      </div>
    </div>
  );
};