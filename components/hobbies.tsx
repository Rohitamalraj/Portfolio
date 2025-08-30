"use client";

import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const hobbies = [
  {
    quote: "Strategic thinking and tactical planning come alive on the chessboard, where every move matters and patience is key.",
    name: "♟️ Chess",
    title: "Strategic Mind Games"
  },
  {
    quote: "Intense competition and teamwork in battle royale games, mastering survival tactics and quick decision-making under pressure.",
    name: "🎮 Battle Royale Games",
    title: "Competitive Gaming"
  },
  {
    quote: "The beautiful game that combines skill, teamwork, and passion - whether playing with friends or following favorite teams.",
    name: "⚽ Football",
    title: "The Beautiful Game"
  },
  {
    quote: "Diving into captivating storylines, exploring different genres from sci-fi thrillers to comedy series that spark imagination.",
    name: "🎬 Movies & Series",
    title: "Cinematic Adventures"
  },
  {
    quote: "Creating memories, sharing laughs, and building lasting bonds through adventures and quality time with amazing people.",
    name: "👥 Friends",
    title: "Quality Time Together"
  }
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(132,204,22,0.03),transparent_70%)]"></div>
      <div className="absolute top-32 right-10 w-80 h-80 bg-lime-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-lime-400">Hobbies</span>
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond coding, I'm passionate about various activities that keep me inspired and balanced
          </p>
        </div>

        {/* Infinite Moving Cards */}
        <div className="flex flex-col items-center justify-center relative">
          <InfiniteMovingCards
            items={hobbies}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="mb-8"
          />
          
          {/* Second row moving in opposite direction */}
          <InfiniteMovingCards
            items={hobbies.slice().reverse()}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}
