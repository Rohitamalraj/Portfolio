"use client";

import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section ref={ref} id="hobbies" className="py-16 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(132,204,22,0.03),transparent_70%)]"
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.05 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-32 right-10 w-80 h-80 bg-lime-400 rounded-full blur-3xl animate-pulse delay-500"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-lime-400">Hobbies</span>
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond coding, I'm passionate about various activities that keep me inspired and balanced
          </p>
        </motion.div>

        {/* Infinite Moving Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center relative"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <InfiniteMovingCards
              items={hobbies}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className="mb-8"
            />
          </motion.div>
          
          {/* Second row moving in opposite direction */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <InfiniteMovingCards
              items={hobbies.slice().reverse()}
              direction="left"
              speed="slow"
              pauseOnHover={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
