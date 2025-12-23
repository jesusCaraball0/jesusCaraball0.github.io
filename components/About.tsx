"use client";

import { motion } from "framer-motion";
import NeuralNetwork from "./NeuralNetwork";

const exploringTopics = [
  "Double Descent and \"Grokking\" with Transformers",
  "GNNs, LLMs, and VAEs for virtual cells",
  "Information Theory, Bayesian Inference, and Probability",
  "Better Tokenization for NLP",
  "Prediction Markets and Sports Betting",
  "Infra + Backend + ML devving",
  "Rust, C++, and JavaScript",
];

export default function About() {
  return (
    <section 
      id="about" 
      className="bg-black relative overflow-hidden" 
      style={{ paddingTop: '48px', paddingBottom: '120px' }}
    >
      <NeuralNetwork />
      <div className="grid-pattern absolute inset-0 opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '40px' }}
        >
          <h2 className="text-6xl font-bold mb-4" style={{ color: '#e2e8f0' }}>
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #475569, #64748b)' }}></div>
        </motion.div>
        
        {/* Two-column layout - using flex for guaranteed side-by-side */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', alignItems: 'stretch' }}>
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: '1', minWidth: 0 }}
          >
            <div
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '28px 32px',
                height: '100%',
              }}
            >
              <h3 
                style={{ 
                  fontSize: '22px', 
                  fontWeight: '600', 
                  color: '#94a3b8',
                  marginBottom: '20px',
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                My Journey
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.85)', 
                    fontSize: '15px', 
                    lineHeight: '1.7',
                    fontFamily: 'system-ui, sans-serif'
                  }}
                >
                  I see computer science and software as the most creative technical outlet to solve problems and improve lives. 
                  As a fervent believer that <span style={{ color: '#3b82f6' }}>AI/ML are the most important technologies of the 21st century</span>, 
                  developing AI-powered applications proposes a unique opportunity to improve the human experience.
                </p>
                
                <p 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.85)', 
                    fontSize: '15px', 
                    lineHeight: '1.7',
                    fontFamily: 'system-ui, sans-serif'
                  }}
                >
                  Underpinning all the drug discoveries, astronomical advances, and world-class entertainment engines are 
                  thoughtfully designed <span style={{ color: '#64748b' }}>scalable, fault-tolerant software systems</span> that 
                  weave foundational infrastructure, API versatility, and machine learning insights.
                </p>

                <p 
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.85)', 
                    fontSize: '15px', 
                    lineHeight: '1.7',
                    fontFamily: 'system-ui, sans-serif'
                  }}
                >
                  These convictions led me to pursue a <span style={{ color: '#cbd5e1' }}>B.S. in Computer Science and Engineering at MIT</span>, 
                  where I&apos;ve built backend, infrastructure, and machine learning solutions for AI-powered applications.
                </p>

                <div 
                  style={{ 
                    marginTop: '8px',
                    padding: '16px 20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.15)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <p 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      fontSize: '14px', 
                      lineHeight: '1.6',
                      fontFamily: 'system-ui, sans-serif'
                    }}
                  >
                    <span style={{ color: '#f97316', fontWeight: '500' }}>Coming up:</span> Netflix SWE Intern (Summer 2026)
                    <br />
                    <span style={{ color: '#fbbf24', fontWeight: '500' }}>Current:</span> Founding AI Engineer @ ArcellAI
                    <br />
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: '500' }}>Past:</span> NASA, Harvard Medical School, Addition Financial
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: '1', minWidth: 0 }}
          >
            <div
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '28px 32px',
                height: '100%',
              }}
            >
              <h3 
                style={{ 
                  fontSize: '22px', 
                  fontWeight: '600', 
                  color: '#94a3b8',
                  marginBottom: '12px',
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                Currently Exploring
              </h3>
              <p 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  fontSize: '14px', 
                  marginBottom: '20px',
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                Open to chat about:
              </p>
              
              {/* Bullet Point List */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {exploringTopics.map((topic, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '15px',
                      lineHeight: '1.6',
                      marginBottom: '12px',
                      paddingLeft: '20px',
                      position: 'relative',
                      fontFamily: 'system-ui, sans-serif',
                    }}
                  >
                    <span 
                      style={{ 
                        position: 'absolute', 
                        left: 0, 
                        color: '#64748b',
                        fontSize: '14px',
                      }}
                    >
                      ▹
                    </span>
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
