"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "C++", "Rust", "SQL"],
  },
  {
    category: "ML/AI",
    skills: ["PyTorch", "Hugging Face", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "XGBoost"],
  },
  {
    category: "Technologies",
    skills: ["APIs", "REST", "PostgreSQL", "Next.js","LangChain", "MCP","Ruby on Rails", ".NET", "Jupyter", "Cython"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "GCP", "Linux", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="pb-20 bg-black relative overflow-hidden" style={{ paddingTop: '48px' }}>
      <div className="grid-pattern absolute inset-0 opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 glow-cyan text-accent-cyan">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card-bg border border-accent-cyan/30 rounded-lg p-6 hover:border-accent-cyan hover:shadow-glow-cyan transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-xl font-semibold text-accent-cyan mb-4 relative z-10">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-4 relative z-10">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-lg text-sm text-gray-300 hover:bg-slate-700/80 hover:border-slate-600 transition-colors"
                    style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
