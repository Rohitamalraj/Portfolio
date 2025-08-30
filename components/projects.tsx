"use client";

import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const projects = [
  {
    id: 1,
    title: "Sports CULT",
    description: "A full-stack sports community platform with real-time match updates, team management, and social features.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/placeholder.jpg",
    github: "https://github.com/rohitamalraj/sports-cult",
    live: "https://sports-cult.vercel.app"
  },
  {
    id: 2,
    title: "DoubtSync",
    description: "AI-powered doubt resolution platform for students with real-time collaboration and smart matching.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "WebRTC"],
    image: "/placeholder.jpg",
    github: "https://github.com/rohitamalraj/doubtsync",
    live: "https://doubtsync.app"
  },
  {
    id: 3,
    title: "TRACX",
    description: "Expense tracking application with budget management, analytics, and multi-platform synchronization.",
    tech: ["React Native", "Firebase", "Chart.js", "Redux"],
    image: "/placeholder.jpg",
    github: "https://github.com/rohitamalraj/tracx",
    live: "https://tracx-app.com"
  },
  {
    id: 4,
    title: "MemeMinter",
    description: "NFT marketplace for memes with creation tools, trading features, and community governance.",
    tech: ["Web3", "Solidity", "IPFS", "React"],
    image: "/placeholder.jpg",
    github: "https://github.com/rohitamalraj/mememinter",
    live: "https://mememinter.io"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-lime-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, AI integration, and modern web technologies.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ScrollStack
            itemDistance={100}
            itemScale={0.05}
            itemStackDistance={30}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.85}
            blurAmount={0}
          >
            {projects.map((project) => (
              <ScrollStackItem key={project.id}>
                <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-lime-400/20 text-lime-300 rounded-lg text-sm font-medium border border-lime-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 font-medium border border-gray-700"
                      >
                        View Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-lime-400 text-black rounded-lg hover:bg-lime-300 transition-colors duration-200 font-medium"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
