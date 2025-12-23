"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "PyTDC",
    description: "A multimodal machine learning training, evaluation, and inference platform for biomedical foundation models. I contributed infrasctructure \
    to load, benchmark, and fine-tune therapeutic AI models like scVI, scGPT, Geneformer, and ESM, molecule generation metrics, and drug sensitivity prediction \
    experiments.",
    technologies: ["Python", "PyTorch", "Hugging Face", "AnnData", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/mims-harvard/TDC",
    demo: "#",
  },
  {
    title: "Astrodash",
    description: "Website and API for automated supernovae spectrum classification. Hosted under UIUC's SCiMMA, it uses Machine Learning models, like CNNs \
    and Transformers, to classify 50 spectra in under 1 second. Boasts 97% accuracy on test set and capabilities for user-uploaded models, batch classification, \
    redshift estimation, and interactive visualizations. Currently writing a paper for JOSS describing the project.",
    technologies: ["Python", "FastAPI", "PyTorch", "TensorFlow", "PostgreSQL", "TypeScript", "Next.js", "Docker"],
    github: "https://github.com/jesusCaraball0/astrodash-web",
    demo: "#",
  },
  {
    title: "Prediction Market Arbitrage Bot",
    description: "[In progress] Arbitrage tool leveraging Kalshi's and Polymarket's APIs to identify and trade on cross-exchange price discrepancies.",
    technologies: ["JavaScript", "Rust", "REST APIs", "Docker"],
    github: "https://github.com/jesusCaraball0/pk_bot",
    demo: "#",
  },
  {
    title: "Bet.AI: Machine Learning Informed Sports Betting Picks",
    description: "[In progress] Machine Learning Platform that hosts Bayesian-informed machine learning models for predictive analytics across football, basketball, soccer \
    baseball, and hockey. Leverages the Betfair API to get real-time odds and data, which is then used to find discrepancies with predicted stats \
    and give users the probabilistic edge.",
    technologies: ["Python", "PyTorch", "FastAPI", "NumPy", "Pandas", "PostgreSQL", "TypeScript", "Next.js"],
    github: "https://github.com/jesusCaraball0/ml_betting",
    demo: "#",
  },
  {
    title: "Pokerbots: Deep Reinforcement Learning for Poker",
    description: "Developed a Deep Q-Network to learn a poker variant, performed feature engineering and hyperparameter finetuning with cross \
    validation, and integrated into MIT's Pokerbots engine to enable autonomous gameplay. Placed top 10 in final competition. ",
    technologies: ["Python", "PyTorch", "NumPy", "Pandas"],
    github: "https://github.com/jesusCaraball0/pokerbots-2025",
    demo: "#",
  },
  {
    title: "Minesweeper",
    description: "Minsweeper implemented in C++ using SFML. Includes GUI, board generation, and game logic. Difficulty ranges from easy to hard, \
    functionality includes flagging, revealing, and game status detection, and dynamic sizing controls the game relative to screen size.",
    technologies: ["C++", "SFML"],
    github: "https://github.com/jesusCaraball0/Minesweeper",
    demo: "#",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="pb-20 bg-black relative overflow-hidden" style={{ paddingTop: '48px' }}>
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card-bg border border-accent-cyan/30 rounded-lg p-6 hover:border-accent-cyan hover:shadow-glow-cyan transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 bg-black/50 border border-accent-purple/30 rounded text-xs text-gray-300 hover:bg-accent-purple/10 hover:border-accent-purple transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-accent-cyan hover:text-accent-purple font-semibold flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="text-accent-purple hover:text-accent-cyan font-semibold flex items-center gap-2 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
