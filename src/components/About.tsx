import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { 
      name: "React", 
      level: 95, 
      color: "#61DAFB",
      icon: "⚛️",
      description: "Frontend Framework",
      glow: "shadow-blue-500/50"
    },
    { 
      name: "TypeScript", 
      level: 90, 
      color: "#3178C6",
      icon: "📘",
      description: "Type-safe JavaScript",
      glow: "shadow-blue-600/50"
    },
    { 
      name: "JavaScript", 
      level: 95, 
      color: "#F7DF1E",
      icon: "🟨",
      description: "Programming Language",
      glow: "shadow-yellow-500/50"
    },
    { 
      name: "Node.js", 
      level: 85, 
      color: "#339933",
      icon: "🟢",
      description: "Backend Runtime",
      glow: "shadow-green-500/50"
    },
    { 
      name: "Java", 
      level: 80, 
      color: "#ED8B00",
      icon: "☕",
      description: "Enterprise Language",
      glow: "shadow-orange-500/50"
    },
    { 
      name: "C#", 
      level: 75, 
      color: "#239120",
      icon: "#️⃣",
      description: ".NET Framework",
      glow: "shadow-purple-500/50"
    },
    { 
      name: "HTML/CSS", 
      level: 95, 
      color: "#E34F26",
      icon: "🌐",
      description: "Web Fundamentals",
      glow: "shadow-red-500/50"
    },
    { 
      name: "Tailwind", 
      level: 90, 
      color: "#06B6D4",
      icon: "🎨",
      description: "CSS Framework",
      glow: "shadow-cyan-500/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            O mně
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Vášnivý pro vytváření inovativních řešení a přeměnu nápadů na realitu
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Jsem vášnivý full-stack developer s více než 5 lety zkušeností ve vytváření 
                výjimečných digitálních zážitků. Moje cesta začala zvědavostí o tom, jak věci fungují, 
                což mě vedlo k prozkoumání fascinujícího světa vývoje softwaru.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Specializuji se na moderní webové technologie včetně React, Node.js, TypeScript 
                a enterprise jazyky jako Java a C#. Věřím v psaní čistého, udržovatelného kódu 
                a vytváření řešení, která nejen splňují požadavky, ale překračují očekávání.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Když neprogramuji, můžete mě najít při zkoumání nových technologií nebo 
                sdílení znalostí s vývojářskou komunitou. Vždy se těším na nové výzvy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-6 rounded-xl shadow-lg border border-blue-200/50 dark:border-blue-700/30"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Rychlé učení</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Rychlá adaptace a zvládnutí nových technologií
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/20 p-6 rounded-xl shadow-lg border border-purple-200/50 dark:border-purple-700/30"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Čistý kód</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Důraz na udržovatelná a škálovatelná řešení
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center">
              Dovednosti & Technologie
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillCardVariants}
                  whileHover={{ 
                    scale: 1.15, 
                    rotateY: 15,
                    rotateX: 10,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div 
                    className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 transform-gpu transition-all duration-300 group-hover:shadow-2xl group-hover:${skill.glow}`}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1
                    }}
                  >
                    {/* 3D Icon with Enhanced Animation */}
                    <div className="text-center mb-3">
                      <motion.div 
                        className="text-4xl mb-2 transform transition-transform duration-300 group-hover:scale-125"
                        style={{ 
                          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
                          textShadow: '4px 4px 8px rgba(0,0,0,0.4)'
                        }}
                        animate={{
                          rotateY: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotateY: {
                            duration: 4 + index * 0.5,
                            repeat: Infinity,
                            ease: "linear"
                          },
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2
                          }
                        }}
                        whileHover={{
                          rotateX: [0, 20, -20, 0],
                          rotateZ: [0, 10, -10, 0],
                          transition: { duration: 0.6 }
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      <h4 className="font-semibold text-sm text-gray-800 dark:text-white">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {skill.description}
                      </p>
                    </div>
                    
                    {/* Animated Skill Level Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full relative"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                            repeatDelay: 3
                          }}
                        />
                      </motion.div>
                    </div>
                    
                    <div className="text-center">
                      <motion.span 
                        className="text-xs font-medium text-gray-600 dark:text-gray-400"
                        animate={{
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.1
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Enhanced Hover Glow Effect */}
                    <motion.div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                      style={{ 
                        background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />

                    {/* Floating particles around the card */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
                          style={{ backgroundColor: skill.color,
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                           }}
                          animate={{
                            x: [0, Math.random() * 40 - 20],
                            y: [0, Math.random() * 40 - 20],
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;