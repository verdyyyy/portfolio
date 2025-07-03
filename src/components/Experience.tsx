import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Server, Code } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "Apollo",
      period: "Praxe",
      location: "Plzeň, Česká republika",
      description: "Zaměření na frontend vývoj pomocí React a moderních webových technologií. Tvorba responzivních uživatelských rozhraní s Tailwind CSS a vývoj backend služeb pomocí C#.",
      technologies: ["React", "C#", "Tailwind CSS", "TypeScript", "JavaScript"],
      highlights: [
        "Vývoj responzivních webových aplikací pomocí React a Tailwind CSS",
        "Tvorba backend API a služeb pomocí C# a .NET",
        "Implementace moderních UI/UX designů s důrazem na uživatelský zážitek",
        "Spolupráce s design a product týmy na vývoji funkcí"
      ],
      icon: Code,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Server Administrator & Developer",
      company: "ČD Telematika",
      period: "Praxe",
      location: "Plzeň, Česká republika",
      description: "Specializace na správu serverové infrastruktury a backend vývoj. Práce se serverovými technologiemi, systémovou administrací a různými programovacími jazyky.",
      technologies: ["Server Administration", "Java", "C#", "Linux", "Database Management"],
      highlights: [
        "Správa a údržba kritické serverové infrastruktury",
        "Vývoj backend služeb pomocí Java a C#",
        "Implementace systémového monitoringu a optimalizace výkonu",
        "Práce na železničních telematických systémech"
      ],
      icon: Server,
      color: "from-green-500 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Profesní zkušenosti
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Moje cesta různými rolemi a technologiemi
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600 hidden md:block rounded-full" />

            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              
              return (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative flex items-start mb-16 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-6 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:flex items-center justify-center z-10"
                       style={{ background: `linear-gradient(135deg, ${experience.color.split(' ')[1]}, ${experience.color.split(' ')[3]})` }}>
                    <IconComponent size={12} className="text-white" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:ml-20 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${experience.color} flex items-center justify-center mr-3 shadow-md`}>
                            <IconComponent size={16} className="text-white" />
                          </div>
                          <span className="font-semibold text-lg">{experience.company}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm font-medium">{experience.period}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                      {experience.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                        Klíčové úspěchy:
                      </h4>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 bg-gradient-to-r ${experience.color} text-white text-sm rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mobile Timeline Dot */}
                  <div className="md:hidden absolute left-6 w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center"
                       style={{ background: `linear-gradient(135deg, ${experience.color.split(' ')[1]}, ${experience.color.split(' ')[3]})` }}>
                    <IconComponent size={12} className="text-white" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;