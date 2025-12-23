"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "PyTDC",
    description: "A multimodal machine learning training, evaluation, and inference platform for biomedical foundation models. I contributed infrastructure to load, benchmark, and fine-tune therapeutic AI models like scVI, scGPT, Geneformer, and ESM, molecule generation metrics, and drug sensitivity prediction experiments.",
    technologies: ["Python", "PyTorch", "Hugging Face", "AnnData", "Pandas", "NumPy", "Matplotlib",],
    github: "https://github.com/mims-harvard/TDC",
    demo: "#",
    image: "/imgs/PyTDC.png",
  },
  {
    title: "Astrodash",
    description: "Website and API for automated supernovae spectrum classification. Hosted under UIUC's SCiMMA, it uses Machine Learning models, like CNNs and Transformers, to classify 50 spectra in under 1 second. Boasts 97% accuracy on test set and capabilities for user-uploaded models, batch classification, redshift estimation, and interactive visualizations. Currently writing a paper for JOSS describing the project.",
    technologies: ["Python", "FastAPI", "PyTorch", "TensorFlow", "PostgreSQL", "TypeScript", "Next.js", "Docker"],
    github: "https://github.com/jesusCaraball0/astrodash-web",
    demo: "#",
    image: "/imgs/astrodash.png",
  },
  {
    title: "PropAI",
    description: "[In progress] Machine Learning Platform that hosts Bayesian-informed machine learning models for predictive analytics across football, basketball, soccer, baseball, and hockey. Leverages the Betfair API to get real-time odds and data, which is then used to find discrepancies with predicted stats and give users the probabilistic edge.",
    technologies: ["Python", "PyTorch", "FastAPI", "NumPy", "Pandas", "PostgreSQL", "TypeScript", "Next.js"],
    github: "https://github.com/jesusCaraball0/ml_betting",
    demo: "#",
    image: "/imgs/PropAI.png",
  },
  {
    title: "Prediction Market Arbitrage Bot",
    description: "[In progress] Arbitrage tool leveraging Kalshi's and Polymarket's APIs to identify and trade on cross-exchange price discrepancies.",
    technologies: ["JavaScript", "Rust", "REST APIs", "Docker"],
    github: "https://github.com/jesusCaraball0/pk_bot",
    demo: "#",
  },
  {
    title: "Pokerbots: Deep Reinforcement Learning for Poker",
    description: "Developed a Deep Q-Network to learn a poker variant, performed feature engineering and hyperparameter finetuning with cross validation, and integrated into MIT's Pokerbots engine to enable autonomous gameplay. Placed top 10 in final competition.",
    technologies: ["Python", "PyTorch", "NumPy", "Pandas"],
    github: "https://github.com/jesusCaraball0/pokerbots-2025",
    demo: "#",
  },
  {
    title: "Minesweeper",
    description: "Minesweeper implemented in C++ using SFML. Includes GUI, board generation, and game logic. Difficulty ranges from easy to hard, functionality includes flagging, revealing, and game status detection, and dynamic sizing controls the game relative to screen size.",
    technologies: ["C++", "SFML"],
    github: "https://github.com/jesusCaraball0/Minesweeper",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black relative overflow-hidden" style={{ paddingTop: '48px', paddingBottom: '120px' }}>
      <div className="grid-pattern absolute inset-0 opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '25px' }}
        >
          <h2 className="text-6xl font-bold mb-4 text-accent-cyan">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </motion.div>
        
        {/* Timeline container - 67% width, centered */}
        <div className="relative mx-auto" style={{ width: '67%' }}>
          {/* Central vertical timeline bar - positioned at parent level to span full height */}
          <div 
            style={{ 
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '4px',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              borderRadius: '9999px',
              transform: 'translateX(-50%)',
              zIndex: 0,
              pointerEvents: 'none'
            }}
          ></div>
          
          {/* Content wrapper */}
          <div className="relative" style={{ zIndex: 1 }}>
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const ref = useRef(null);
              const isInView = useInView(ref, { once: false, margin: "-100px" });
              
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative"
                  style={{ marginBottom: index < projects.length - 1 ? '100px' : '0' }}
                >
                  {/* Timeline node - positioned on top of line */}
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 rounded-full bg-white border-2 border-black shadow-lg" 
                    style={{ 
                      width: '18px',
                      height: '18px',
                      zIndex: 10,
                      top: '50%',
                      marginTop: '-9px'
                    }}
                  ></div>
                  
                  {/* Content container */}
                  <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content side - positioned with margin from center line */}
                    <div 
                      className={`${isEven ? 'text-right' : 'text-left'}`} 
                      style={{ 
                        width: '1200px',
                        marginRight: isEven ? '50px' : '0',
                        marginLeft: isEven ? '0' : '50px'
                      }}
                    >
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className={`flex flex-wrap pt-2 ${isEven ? 'justify-end' : 'justify-start'}`} style={{ gap: '5px' }}>
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                              style={{ 
                                backgroundColor: 'rgba(30, 41, 59, 0.8)',
                                border: '1px solid rgba(51, 65, 85, 0.5)',
                                padding: '6px 10px'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div style={{ paddingTop: '8px', marginTop: '5px' }}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center rounded-full text-sm cursor-pointer"
                            style={{ 
                              backgroundColor: 'rgba(30, 41, 59, 0.8)',
                              border: '1px solid rgba(51, 65, 85, 0.5)',
                              padding: '10px 24px',
                              width: '100%',
                              textDecoration: 'none',
                              color: 'rgb(209, 213, 219)',
                              transition: 'all 0.3s ease',
                              boxShadow: 'none'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.boxShadow = '0 0 25px rgba(30, 64, 175, 0.6)';
                              e.currentTarget.style.color = 'rgb(255, 255, 255)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.boxShadow = 'none';
                              e.currentTarget.style.color = 'rgb(209, 213, 219)';
                            }}
                          >
                            See code here
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual placeholder side */}
                    <div 
                      className="h-64 relative" 
                      style={{ 
                        width: '1200px',
                        marginLeft: isEven ? '50px' : '0',
                        marginRight: isEven ? '0' : '50px'
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-accent-cyan/5 via-accent-purple/5 to-transparent rounded-lg border border-white/10 relative overflow-hidden group">
                        {project.image ? (
                          /* Project Image */
                          <div className="w-full h-full relative flex items-center justify-center p-4">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="max-w-full max-h-full w-auto h-auto object-contain"
                              onError={(e) => {
                                console.error('Image failed to load:', project.image);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        ) : (
                          <>
                            {/* Subtle pattern */}
                            <div className="absolute inset-0 opacity-20">
                              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(30,64,175,0.03)_25%,rgba(30,64,175,0.03)_50%,transparent_50%,transparent_75%,rgba(30,64,175,0.03)_75%)] bg-[length:30px_30px]"></div>
                            </div>
                            
                            {/* Placeholder text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <svg className="w-12 h-12 mx-auto mb-2 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-xs text-white/30 uppercase tracking-wide">Project Visual</p>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 to-accent-purple/0 group-hover:from-accent-cyan/10 group-hover:to-accent-purple/10 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
