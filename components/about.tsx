"use client"

import React from "react"
import ShinyText from "./ShinyText"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-lime-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-lg leading-relaxed text-gray-300">
              <p>
                <ShinyText 
                  text="I'm a passionate Computer Science student with a strong interest in software development 
                and building impactful tech solutions. I enjoy turning ideas into real-world applications 
                while exploring cutting-edge technologies."
                  speed={6}
                  className="text-gray-300"
                />
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800"
              >
                <h3 className="text-2xl font-bold text-lime-400">8+</h3>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800"
              >
                <h3 className="text-2xl font-bold text-lime-400">CS</h3>
                <p className="text-sm text-gray-400">Student</p>
              </motion.div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Current Focus</h3>
              <div className="flex flex-wrap gap-2">
                {["Web3", "AI", "Blockchain", "Full-Stack", "Mobile Dev"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-lime-400/20 text-lime-300 rounded-full text-sm border border-lime-400/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(132,204,22,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
              
              <div className="relative z-10 text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-24 h-24 bg-gradient-to-br from-lime-400 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-black"
                >
                  RA
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Rohit Amal Raj</h3>
                <p className="text-lime-400 font-medium mb-1">Computer Science Student</p>
                <p className="text-gray-400 text-sm mb-4">LOYOLA-ICAM College of Engineering</p>
                <p className="text-gray-500 text-xs">Chennai, India</p>
              </div>

              {/* Decorative elements */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 w-2 h-2 bg-lime-400 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-6 left-6 w-1 h-1 bg-green-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex gap-4">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-lime-400 text-lime-400 font-semibold rounded-lg hover:bg-lime-400 hover:text-black transition-colors"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
