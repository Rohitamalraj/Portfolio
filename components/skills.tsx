"use client";

import React from 'react';

const skills = [
  { name: "HTML", icon: "🌐", level: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS", icon: "🎨", level: 90, color: "from-blue-500 to-indigo-500" },
  { name: "JavaScript", icon: "⚡", level: 92, color: "from-yellow-400 to-orange-500" },
  { name: "React", icon: "⚛️", level: 88, color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: "▲", level: 85, color: "from-gray-400 to-gray-600" },
  { name: "Node.js", icon: "🟢", level: 80, color: "from-green-500 to-emerald-500" },
  { name: "Figma", icon: "🎯", level: 75, color: "from-purple-500 to-pink-500" },
  { name: "Solidity", icon: "💎", level: 70, color: "from-gray-600 to-slate-700" },
  { name: "Web3", icon: "🌊", level: 72, color: "from-lime-400 to-green-500" },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.05),transparent_70%)]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-lime-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering the tools and technologies that power modern web experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700/50 hover:border-lime-400/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(132,204,22,0.2)] hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Skill Icon & Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
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
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(132,204,22,0.5)]`}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-green-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
