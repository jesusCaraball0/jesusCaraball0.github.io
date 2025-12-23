"use client";

import { motion } from "framer-motion";
import NeuralNetwork from "./NeuralNetwork";

export default function About() {
  return (
    <section id="about" className="pb-20 bg-black relative overflow-hidden" style={{ paddingTop: '48px' }}>
      <NeuralNetwork />
      <div className="grid-pattern absolute inset-0 opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan text-accent-cyan">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
            I see computer science and software as the most creative technical outlet to solve problems and improve lives. As a fervent
              believer that AI/ML are the most important technologies of the 21st century, developing AI-powered applications proposes
              an unique opportunity to improve the anthropomorphic experience. Underpining all the drug discoveries, astronomical 
              advances, and world-class entertainment engines are throughfully designed scaleable, fault-tolerant software systems
              that weave foundational infrastructure, API versatility, and machine learning insights. 

            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
            These convictions led me to pursue a B.S. in Computer Science and Engineering at the Massachusetts Institute of Technology (MIT)
            where I've built backend, infrastructure, and machine learning solutions for AI-powered applications. 
            I will be joining Netflix in Summer 2026 as a Software Engineer Intern on the Foundation Technology Platform team and am 
            currently a Founding AI Engineer at ArcellAI. Previously, I was a Machine Learning Engineer Intern at NASA, 
            Machine Learning Researcher at Harvard Medical School, and Software Engineer Intern at Addition Financial 
            Credit Union. 
            </p>
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-card-bg border border-accent-purple/30 rounded-lg p-8 hover:border-accent-purple hover:shadow-glow-purple transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-accent-purple mb-4">Currently Exploring</h3>
                <p className="text-gray-300 text-lg mb-4">Open to chat about:</p>
                <ul className="space-y-2 list-disc list-inside">
                  {[
                    "Double Descent and \"Grokking\" with Transformers",
                    "GNNs, LLMs, and VAEs for virtual cells",
                    "Information Theory, Bayesian Inference, and Probability",
                    "Better Tokenization for NLP",
                    "Prediction Markets and Sports Betting",
                    "Infra + Backend + ML devving",
                    "Rust, C++, and JavaScript",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-gray-300"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
