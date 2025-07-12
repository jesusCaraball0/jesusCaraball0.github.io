import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light tracking-wider mb-4">
            About Me
          </h2>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-lg leading-relaxed"
        >
          <p className="text-gray-300">
            I'm an undergraduate at MIT studying Computer Science and a Machine Learning Researcher at the Zitnik Lab at Harvard Medical School. My work focuses on foundation AI models for therapeutic applications, where I combine my passion for software development with cutting-edge AI research.
          </p>
          <p className="text-gray-300">
            I'm deeply passionate about building innovative software solutions and solving complex problems. My work at the intersection of computer science and healthcare allows me to make meaningful contributions to advancing medical research through AI.
          </p>
          <div className="flex justify-center pt-8">
            <motion.a
              href="https://github.com/jesusCaraball0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wider border border-white px-8 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
