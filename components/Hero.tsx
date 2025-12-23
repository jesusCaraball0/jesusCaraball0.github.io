"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GradientDescent from "./GradientDescent";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <GradientDescent />
      <div className="grid-pattern absolute inset-0 opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="block mb-2 text-gray-300">Hi, my name is</span>
            <span className="block glow-cyan text-accent-cyan">
              Jesus Caraballo
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            I'm a CS student at MIT with experience in Software Engineering at Netflix, Machine Learning Engineering at NASA and ArcellAI, and
            Machine Learning Research at Harvard Medical School
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link
              href="/resume"
              className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-white rounded-lg font-semibold hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-accent-cyan text-accent-cyan rounded-lg font-semibold hover:bg-accent-cyan/10 hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
