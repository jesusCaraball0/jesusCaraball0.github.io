"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BayesianUpdate from "./BayesianUpdate";

// Combined education and experience with brand colors
const timelineItems = [
  {
    type: "education",
    title: "B.S. in Computer Science and Engineering",
    company: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    period: "Sep 2024 - May 2027",
    color: "#A31F34", // MIT crimson
    image: "/imgs/MIT.svg",
    description: [
      "Most interesting classes include Machine Learning (G), Natural Language Processing (G), Design and Analysis of Algorithms, Probability and Random Variables, and Linear Algebra.",
      "Also keeping busy as an Intro to Machine Learning LA, competing with the Poker Club, programming a player for Pokerbots, and working on my own projects."
    ],
  },
  {
    type: "experience",
    title: "Software Engineer Intern",
    company: "Netflix",
    location: "Los Gatos, CA",
    period: "June 2026 - September 2026",
    color: "#E50914", // Netflix red
    image: "/imgs/Netflix.png",
    description: [
      "Incoming Software Engineer Intern at Netflix on the Foundation Technology Platform team.",
    ],
  },
  {
    type: "experience",
    title: "Founding AI Engineer",
    company: "ArcellAI",
    location: "San Francisco, CA & Remote",
    period: "May 2025 - Jan 2026",
    color: "#E8913A", // ArcellAI orange/amber
    image: "/imgs/ArcellAI.png",
    description: [
      "Built backend for bioinformatics AI agent, including LLM orchestration pipelines, API endpoints, services layer, and database integration",
      "Fine-tuned virtual cell Foundation Model for perturbation response prediction on AWS",
      "Working to integrate perturbation response prediction model into ArcellAI's AI agents",
    ],
  },
  {
    type: "experience",
    title: "Machine Learning Engineer Intern",
    company: "NASA, MIT Kavli Institute",
    location: "Remote",
    period: "Jun 2025 - Sep 2025",
    color: "#FFFFFF", // NASA white (for readability)
    image: "/imgs/NASA_logo.svg",
    description: [
      "Created AstroDash 2.0, a website and API serving Machine Learning models classifying supernovae spectra",
      "Publishing as first author in the Journal of Open Source Software (JOSS) describing AstroDash's support for user uploaded models, optimized batch classification, visualization, and redshift estimation; all deployed on UIUC's SCiMMA cluster.",
      "Trained CNNs on supernovae classification and redshift estimation. Used feature engineering, ensembles, K-Fold cross validation, and learning rate scheduling to surpass the original DASH on both tasks.",
    ],
  },
  {
    type: "experience",
    title: "Machine Learning Researcher",
    company: "Harvard Medical School, Zitnik Lab",
    location: "Cambridge, MA",
    period: "Dec 2024 - May 2025",
    color: "#A51C30", // Harvard crimson
    image: "/imgs/HarvardMedicalSchool.png",
    description: [
      "Contributed to and maintained PyTDC, a biocomputational tool used by 30k+ researchers and published at ICML 2025. See poster: https://icml.cc/virtual/2025/poster/45780",
      "Published as first author on ICLR 2025 with a poster describing how to use LLMs and RAG to extend clinical pediatric growth charts. See poster: https://iclr.cc/virtual/2025/34322.",
      "Built infrastructure to benchmark, fine-tune, and run inference on therapeutic AI models like scVI, scGPT, Geneformer, and ESM. Contributed drug sensitivity prediction experiments and molecule generation metrics.",
      "Used Cython to build an optimized model server and development package for single cell ML models."
    ],
  },
  {
    type: "experience",
    title: "Software Engineer Intern",
    company: "Addition Financial Credit Union",
    location: "Lake Mary, FL",
    period: "Jun 2024 - Aug 2024",
    color: "#4AAED9", // Addition Financial light blue
    image: "/imgs/AdditionFinancial.png",
    description: [
      "Collaborated with backend team to automate account handling, reducing IT labor by 200hrs/month.",
      "Built a REST API listener for Paylocity's webhooks and managed databases using C# and SQL.",
      "Researched, developed, and presented a demo website using ASP.NET Core to highlight migration benefits.",
    ],
  },
];

// Helper to create a transparent version of a hex color
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Expandable card component with hover to show details
function ExpandableCard({ item }: { item: typeof timelineItems[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const brandColor = item.color;
  const brandColorLight = hexToRgba(brandColor, 0.7);

  return (
    <div 
      style={{ 
        flex: '1',
        marginLeft: '30px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          border: `1px solid ${isHovered ? hexToRgba(brandColor, 0.5) : 'rgba(51, 65, 85, 0.4)'}`,
          borderRadius: '8px',
          padding: '20px 24px',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
      >
        <h4 
          style={{ 
            fontSize: '20px',
            fontWeight: '600',
            color: brandColor,
            marginBottom: '6px',
            fontFamily: 'system-ui, sans-serif'
          }}
        >
          {item.company}
        </h4>
        <p 
          style={{ 
            fontSize: '16px',
            fontWeight: '500',
            color: brandColorLight,
            marginBottom: isHovered ? '12px' : '0',
            fontFamily: 'system-ui, sans-serif',
            transition: 'margin-bottom 0.3s ease',
          }}
        >
          {item.title}
        </p>
        
        {/* Expandable details section */}
        <div 
          style={{
            maxHeight: isHovered ? '500px' : '0',
            overflow: 'hidden',
            opacity: isHovered ? 1 : 0,
            transition: 'all 0.3s ease',
          }}
        >
          {item.location && (
            <p 
              style={{ 
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '4px',
                fontFamily: 'system-ui, sans-serif'
              }}
            >
              {item.location}
            </p>
          )}
          <p 
            style={{ 
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '12px',
              fontFamily: 'system-ui, sans-serif'
            }}
          >
            {item.period}
          </p>
          {Array.isArray(item.description) && (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {item.description.map((desc, i) => (
                <li 
                  key={i}
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '16px',
                    position: 'relative',
                    fontFamily: 'system-ui, sans-serif'
                  }}
                >
                  <span style={{ position: 'absolute', left: 0, color: brandColor }}>▹</span>
                  {desc}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-black relative overflow-hidden" style={{ paddingTop: '48px', paddingBottom: '120px' }}>
      <BayesianUpdate />
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
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </motion.div>
        
        {/* Timeline container - 70% width, centered */}
        <div className="relative mx-auto" style={{ width: '70%' }}>
          {/* Timeline items */}
          <div style={{ position: 'relative' }}>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: index < timelineItems.length - 1 ? '60px' : '0',
                  position: 'relative',
                }}
              >
                {/* Logo */}
                <div 
                  style={{ 
                    width: '100px',
                    height: '100px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      backgroundColor: 'rgba(30, 41, 59, 0.4)',
                      border: '1px solid rgba(51, 65, 85, 0.5)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      overflow: 'hidden',
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.company}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
                
                {/* Horizontal line from logo to vertical line - fixed position */}
                <div 
                  style={{
                    width: '60px',
                    height: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    position: 'absolute',
                    left: '100px', // After the logo
                    top: '50px', // Center of the logo (100px / 2)
                    flexShrink: 0,
                  }}
                />
                
                {/* Vertical timeline segment - fixed position */}
                <div 
                  style={{
                    width: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    position: 'absolute',
                    left: '160px', // 100px logo + 60px horizontal line
                    top: '0',
                    bottom: index < timelineItems.length - 1 ? '-60px' : '50%', // Extend to next item, or stop at center for last
                    flexShrink: 0,
                  }}
                />
                
                {/* Spacer to push content after the line (horizontal line + vertical line width) */}
                <div style={{ width: '62px', flexShrink: 0 }} />
                
                {/* Content box */}
                <ExpandableCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
