"use client";

import { motion } from "framer-motion";
import DataFlow from "./DataFlow";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Netflix",
    location: "Los Gatos, CA",
    period: "June 2026 - September 2026",
    description: [
      "Incoming Software Engineer Intern at Netflix on the Foundation Technology Platform team.",
    ],
  },
  {
    title: "Founding AI Engineer",
    company: "ArcellAI",
    location: "San Francisco, CA & Remote",
    period: "May 2025 - Jan 2026",
    description: [
      "Built backend for bioinformatics AI agent, including LLM orchestration pipelines, API endpoints, services layer, and \
      database integration",
      "Fine-tuned virtual cell Foundation Model for perturbation response prediciton on AWS",
      "Working to integrate perturbation response prediction model into ArcellAI's AI agents",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "NASA",
    location: "Remote",
    period: "Jun 2025 - Sep 2025",
    description: [
      "Created AstroDash 2.0, a website and API serving Machine Learning models classifying supernovae spectra",
      "Publishing as first author in the Journal of Open Source Software (JOSS) describing AstroDash's support for user uploaded models,\
      optimized batch classification, visualization, and redshift estimation; all deployed on UIUC's SCiMMA cluster.",
      "Trained CNNs on supernovae classification and redshift estimation. Used feature engineering, ensembles, K-Fold cross validation, and \
      learning rate scheduling to surpass the orignal DASH on both tasks.",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company: "Harvard Medical School, Zitnik Lab",
    location: "Cambridge, MA",
    period: "Dec 2024 - May 2025",
    description: [
      "Contributed to and maintained PyTDC, a biocomputational tool used by 30k+ researchers. See poster: https://icml.cc/virtual/2025/poster/45780",
      "Published as first author on ICLR 2025 with a poster describing how to use LLMs and RAG to extend clinical pediatric growth charts. \
      See poster: https://iclr.cc/virtual/2025/34322.",
      "Built infrastructure to benchmark, fine-tune, and run inference on therapeutic AI models like scVI, scGPT, Geneformer, and ESM. Contributed \
      drug sensitivity prediction experiments and molecule generation metrics.",
      "Used Cython to build an optimized model server and development package for single cell ML models."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Addition Financial Credit Union",
    location: "Lake Mary, FL",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Collaborated with backend team to automate account handling, reducing IT labor by 200hrs/month.",
      "Built a REST API listener for Paylocity's webhooks and managed databases using C# and SQL.",
      "Researched, developed, and presented a demo website using ASP.NET Core to highlight migration benefits.",
    ],
  },
];

const education = [
  {
    degree: "B.S. in Computer Science and Engineering",
    school: "Massachusetts Institute of Technology",
    period: "Sep 2024 - May 2027",
    location: "Cambridge, MA",
    description: "Most interesting classes include Maching Learning (G), Natural Language Processing (G), Design and Analysis of Algorithms, \
    Probability and Random Variables, and Linear Algebra. Also keeping busy as an Intro to Machine Learning LA, competing with the Poker Club, \
    programming a player for Pokerbots, and working on my own projects (find more here: https://github.com/jesusCaraball0)",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="pb-20 bg-black relative overflow-hidden" style={{ paddingTop: '48px' }}>
      <DataFlow />
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
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-accent-cyan mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-accent-cyan/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-cyan rounded-full animate-pulse-glow"></div>
                  <div className="bg-card-bg border border-accent-cyan/30 rounded-lg p-6 hover:border-accent-cyan hover:shadow-glow-cyan transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                      <p className="text-accent-cyan font-medium mb-1">{exp.company}</p>
                      {exp.location && (
                        <p className="text-gray-400 text-sm mb-2">{exp.location}</p>
                      )}
                      <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="text-accent-cyan mr-2">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-accent-purple mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-accent-purple/30"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-purple rounded-full animate-pulse-glow"></div>
                  <div className="bg-card-bg border border-accent-purple/30 rounded-lg p-6 hover:border-accent-purple hover:shadow-glow-purple transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                      {edu.school && (
                        <p className="text-accent-purple font-medium mb-2">{edu.school}</p>
                      )}
                      {edu.period && (
                        <p className="text-gray-400 text-sm mb-4">{edu.period}</p>
                      )}
                      {edu.location && (
                        <p className="text-gray-400 text-sm mb-4">{edu.location}</p>
                      )}
                      {edu.description && (
                        <p className="text-gray-300">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
