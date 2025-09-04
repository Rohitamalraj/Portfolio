"use client";

import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { 
    name: "HTML", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", 
    level: 95, 
    color: "from-orange-500 to-red-500" 
  },
  { 
    name: "CSS", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png", 
    level: 90, 
    color: "from-blue-500 to-indigo-500" 
  },
  { 
    name: "JavaScript", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", 
    level: 92, 
    color: "from-yellow-400 to-orange-500" 
  },
  { 
    name: "React", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png", 
    level: 88, 
    color: "from-cyan-400 to-blue-500" 
  },
  { 
    name: "Next.js", 
    icon: "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg", 
    level: 85, 
    color: "from-gray-400 to-gray-600" 
  },
  { 
    name: "Node.js", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png", 
    level: 80, 
    color: "from-green-500 to-emerald-500" 
  },
  { 
    name: "Figma", 
    icon: "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format", 
    level: 75, 
    color: "from-purple-500 to-pink-500" 
  },
  { 
    name: "Solidity", 
    icon: "https://metana-website-rpd-3cgq.ue1.rapydapps.cloud/wp-content/uploads/2023/08/Solidity-Logo.wine_-1024x683.png", 
    level: 70, 
    color: "from-gray-600 to-slate-700" 
  },
  { name: "Web3", icon: "🌊", level: 72, color: "from-lime-400 to-green-500" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section ref={ref} id="skills" className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.05),transparent_70%)]"
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 left-10 w-72 h-72 bg-lime-400 rounded-full blur-3xl animate-pulse"
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.05 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-lime-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering the tools and technologies that power modern web experiences
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(132,204,22,0.2)"
                }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700/50 hover:border-lime-400/30 transition-all duration-500"
              >
                {/* Skill Icon & Name */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 flex items-center justify-center"
                  >
                    {skill.icon.startsWith('http') ? (
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          // Fallback to emoji if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-3xl">${skill.name === 'HTML' ? '🌐' : 
                            skill.name === 'CSS' ? '🎨' : 
                            skill.name === 'JavaScript' ? '⚡' : 
                            skill.name === 'React' ? '⚛️' : 
                            skill.name === 'Next.js' ? '▲' : 
                            skill.name === 'Node.js' ? '🟢' : '💻'}</span>`;
                        }}
                      />
                    ) : (
                      <span className="text-3xl">{skill.icon}</span>
                    )}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Proficiency</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut"
                      }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full group-hover:shadow-[0_0_10px_rgba(132,204,22,0.5)] transition-shadow duration-300`}
                    />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-green-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
