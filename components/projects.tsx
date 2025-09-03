"use client";

import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const projects = [
  {
    id: 1,
    title: "Sports CULT",
    description: "Designed a user interface using Canva for sports enthusiasts. Provides information about upcoming matches, venues, age categories, and event details to help users find relevant sports events.",
    tech: ["Figma", "Canva"],
    image: "/project_images/sports_cult.png",
    github: "https://www.figma.com/design/sFOE0dAUpHcsNdXPuBtQIG/SPORTS-CULT?node-id=20-147",
    live: "https://www.figma.com/design/sFOE0dAUpHcsNdXPuBtQIG/SPORTS-CULT?node-id=20-147"
  },
  {
    id: 2,
    title: "DoubtSync",
    description: "Web application connecting learners with industry professionals for real-time mentorship. Features role-based onboarding, real-time Q&A, and feedback-driven leaderboard for enhanced mentor credibility and personalized support.",
    tech: ["React", "Supabase", "Tailwind CSS", "socket.io"],
    image: "/project_images/doubtsync.png",
    github: "https://github.com/Rohitamalraj/DoubtSync",
    live: "https://github.com/Rohitamalraj/DoubtSync"
  },
  {
    id: 3,
    title: "TRACX",
    description: "Decentralized application enabling blockchain-based leaderboards, NFT staking for rewards, and real-time communication. Leverages blockchain technology for secure, transparent data handling with intuitive user experience.",
    tech: ["React", "Firebase", "NFT", "Solidity"],
    image: "/project_images/tracx.jpg",
    github: "https://github.com/jonathanvineet/tracx",
    live: "https://github.com/jonathanvineet/tracx"
  },
  {
    id: 4,
    title: "MemeMinter",
    description: "Decentralized NFT platform for minting and trading memes through Telegram bot and web app. Powered by Sei blockchain ensuring secure ownership, seamless transactions, and fair creator monetization.",
    tech: ["SEI", "Next.js", "Reddit API", "Telegram Bot"],
    image: "/project_images/meme_minter.png",
    github: "https://github.com/Rohitamalraj/Meme-Minter",
    live: "https://github.com/Rohitamalraj/Meme-Minter"
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
            itemDistance={120}
            itemScale={0.03}
            itemStackDistance={20}
            stackPosition="25%"
            scaleEndPosition="15%"
            baseScale={0.88}
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
                  <div className="relative group">
                    <div className="aspect-video bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-lime-400/30 transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <h4 className="text-white font-semibold text-lg mb-2">{project.title}</h4>
                          <p className="text-lime-400 text-sm">Click to view project</p>
                        </div>
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-lime-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
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
