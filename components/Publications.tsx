"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import KnowledgeGraph from "./KnowledgeGraph";

const publications = [
  {
    title: "PyTDC: A multimodal machine learning training, evaluation, and inference platform for biomedical foundation models",
    authors: "Alejandro Velez-Arce, Marinka Zitnik",
    venue: "ICML Poster: International Conference on Machine Learning",
    year: "2025",
    description: "Existing biomedical benchmarks do not provide end-to-end infrastructure for training, evaluation, and inference of models that integrate multimodal biological data and a broad range of machine learning tasks in therapeutics. We present PyTDC, an open-source machine-learning platform providing streamlined training, evaluation, and inference software for multimodal biological AI models. I contributed to the core package and developed the infrastructure to load, benchmark, and fine-tune therapeutic AI models like scVI.",
    link: "https://icml.cc/virtual/2025/poster/45780",
    type: "publication",
    image: "/imgs/PyTDC.png",
  },
  {
    title: "Extending a Clinical Pediatric Growth Chart App Using a Large Language Model",
    authors: "Alex Velez-Arce, Jesus Caraballo Anaya",
    venue: "ICLR Poster: International Conference on Learning Representations",
    year: "2025",
    description: "Monitoring growth is vital for early detection of disorders. We integrate an LLM agent into the SMART on FHIR Growth Chart App to assist pediatricians in identifying growth abnormalities. We use a User-Centered Design, leveraged the OpenAI Assistants API with RAG, and tested for usability and functionality with three pediatricians in an evaluation of model responses for growth abnormality detection, patient history analysis, recommended specialist referral, differential diagnosis and executive summary. Results showed that the agent can achieve high levels of usability when integrated into a clinical setting.",
    link: "https://iclr.cc/virtual/2025/34322",
    type: "publication",
    image: "",
  },
  {
    title: "Adaptive Tokenization is All You Need",
    authors: "Jesus Caraballo Anaya, Margarita Carranza, Archita Khaire, John Tahk",
    venue: "MIT 6.4610: Natural Language Processing Poster Session",
    year: "2025",
    description: "LLMs have improved astronomically at a myriad of tasks, from code generation to text summarization, but a particular laggard is multilinguality. To democratize benefits of AI and because tokenization is the first critical architectural decision, we propose a method to test how tokenization strategies affect multilinguality. We pre-train 5 mT5-base instances with swapped tokenizers, fine-tune on the multilingual Twitter sentiment analysis task, and evaluate the effects of tokenization on English, Spanish, German, Hindi, and Arabic performance through a linguistic lens.",
    link: "",
    type: "publication",
    image: "",
  },
];

const articles = [
  {
    title: "Social Impact Internships: Jesus Caraballo Anaya",
    authors: "Jesus Caraballo Anaya",
    venue: "MIT PKG Center",
    year: "2025",
    description: "As a MIT undergraduate, I had the priviledge of working with River City Community Development Center, an afterschool safe haven for kids to learn valuable skills like tuckpointing and electricity and get paid in Humboldt Park, Chicago, as a Technology Innovation Intern. This article shares my reflections on the experience.",
    link: "https://pkgcenter.mit.edu/2025/10/03/social-impact-internships-jesus-caraballo-anaya-28/",
    type: "article",
  },
  {
    title: "Nine Years Later - Why I Built a \"Math Park\"",
    authors: "Jesus Caraballo Anaya",
    venue: "Central Florida Lifestyle Magazine, Fox News",
    year: "2024",
    description: "For my Boy Scouts Eagle Project, I returned to my childhood elementary school to build a 'Math Park' where kids can play games and get interested in math lessons on how they work. With the help of Addition Financial Credit Union, I was able to give back to the school that I owe so much of my upbringing and academic success to. It was featured on Fox News, Central Florida Lifestyle Magazine, and AddFi's Social Media.",
    link: "https://www.centralfloridalifestyle.com/conversations/nine-years-later-why-i-built-a-math-park/",
    type: "article",
  }
];

// Publication Card Component
function PublicationCard({ pub, index, onClick }: { pub: typeof publications[0], index: number, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer h-full"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
      <div
        style={{
          minHeight: '100%',
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '0',
          transition: 'all 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Top accent bar */}
        <div 
          style={{ 
            height: '3px', 
            background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
          }} 
        />
        
        <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Type badge */}
          <div style={{ marginBottom: '16px' }}>
            <span 
              style={{ 
                fontSize: '10px', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                color: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              {pub.venue.includes('ICML') ? 'ICML' : pub.venue.includes('ICLR') ? 'ICLR' : 'MIT'}
            </span>
          </div>

          {/* Title */}
          <h3 
            style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#e2e8f0',
              lineHeight: '1.4',
              marginBottom: '16px',
              transition: 'color 0.3s ease',
              fontFamily: 'system-ui, sans-serif',
            }}
            className="group-hover:text-white"
          >
            {pub.title}
          </h3>
          
          {/* Authors and venue */}
          <div style={{ marginTop: 'auto' }}>
            <p 
              style={{ 
                fontSize: '13px', 
                color: 'rgba(255, 255, 255, 0.6)', 
                fontStyle: 'italic',
                marginBottom: '8px',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {pub.authors}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p 
                style={{ 
                  fontSize: '12px', 
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {pub.venue}
              </p>
              <span 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: '600',
                  color: '#64748b',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {pub.year}
              </span>
            </div>
          </div>

          {/* Click indicator */}
          <div 
            style={{ 
              marginTop: '16px', 
              paddingTop: '12px', 
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span 
              style={{ 
                fontSize: '11px', 
                color: 'rgba(255, 255, 255, 0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: 'system-ui, sans-serif',
              }}
              className="group-hover:text-white transition-colors"
            >
              View Details
            </span>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{ color: 'rgba(255, 255, 255, 0.4)' }}
              className="group-hover:text-white transition-colors"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Modal Component - Simplified and guaranteed to work
function PublicationModal({ pub, onClose }: { pub: typeof publications[0], onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [pub, onClose]);

  if (!pub) {
    return null;
  }

  const modalContent = (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        style={{
          position: 'relative',
          width: '60%',
          maxWidth: '900px',
          maxHeight: '85vh',
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          overflow: 'hidden',
          zIndex: 10,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Top accent bar */}
        <div 
          style={{ 
            height: '3px', 
            background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
          }} 
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 20,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
          aria-label="Close"
        >
          <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div style={{ overflowY: 'auto', maxHeight: '85vh', padding: '40px 48px' }}>
          {/* Badge */}
          <div style={{ marginBottom: '20px' }}>
            <span 
              style={{ 
                fontSize: '10px', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                color: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '4px 12px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              {pub.venue.includes('ICML') ? 'ICML 2025' : pub.venue.includes('ICLR') ? 'ICLR 2025' : 'MIT 2025'}
            </span>
          </div>

          {/* Title */}
          <h2 
            style={{ 
              fontSize: '28px', 
              fontWeight: '700', 
              color: '#ffffff',
              lineHeight: '1.3',
              marginBottom: '16px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {pub.title}
          </h2>

          {/* Authors */}
          <p 
            style={{ 
              fontSize: '15px', 
              color: 'rgba(255, 255, 255, 0.6)', 
              fontStyle: 'italic',
              marginBottom: '8px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {pub.authors}
          </p>
          <p 
            style={{ 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '32px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {pub.venue} ({pub.year})
          </p>

          {/* Image */}
          {pub.image && (
            <div 
              style={{ 
                marginBottom: '32px', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <img
                src={pub.image}
                alt={pub.title}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Abstract */}
          <div style={{ marginBottom: '32px' }}>
            <h3 
              style={{ 
                fontSize: '11px', 
                fontWeight: '600', 
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Abstract
            </h3>
            <p 
              style={{ 
                fontSize: '15px', 
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.7',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {pub.description}
            </p>
          </div>

          {/* Link */}
          {pub.link && (
            <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 0.8)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
              >
                View Publication
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );

  // Use portal to render to body
  if (typeof window !== 'undefined' && document.body) {
    return createPortal(modalContent, document.body);
  }
  
  return null;
}

// Article Modal Component - Same as PublicationModal but without image support
function ArticleModal({ article, onClose }: { article: typeof articles[0], onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [article, onClose]);

  if (!article) {
    return null;
  }

  const modalContent = (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        style={{
          position: 'relative',
          width: '60%',
          maxWidth: '900px',
          maxHeight: '85vh',
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          overflow: 'hidden',
          zIndex: 10,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Top accent bar */}
        <div 
          style={{ 
            height: '3px', 
            background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
          }} 
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 20,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
          aria-label="Close"
        >
          <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div style={{ overflowY: 'auto', maxHeight: '85vh', padding: '40px 48px' }}>
          {/* Badge */}
          <div style={{ marginBottom: '20px' }}>
            <span 
              style={{ 
                fontSize: '10px', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                color: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '4px 12px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              Article
            </span>
          </div>

          {/* Title */}
          <h2 
            style={{ 
              fontSize: '28px', 
              fontWeight: '700', 
              color: '#ffffff',
              lineHeight: '1.3',
              marginBottom: '16px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {article.title}
          </h2>

          {/* Authors */}
          <p 
            style={{ 
              fontSize: '15px', 
              color: 'rgba(255, 255, 255, 0.6)', 
              fontStyle: 'italic',
              marginBottom: '8px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {article.authors}
          </p>
          <p 
            style={{ 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '32px',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {article.venue} ({article.year})
          </p>

          {/* Description */}
          <div style={{ marginBottom: '32px' }}>
            <h3 
              style={{ 
                fontSize: '11px', 
                fontWeight: '600', 
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Description
            </h3>
            <p 
              style={{ 
                fontSize: '15px', 
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.7',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {article.description}
            </p>
          </div>

          {/* Link */}
          {article.link && (
            <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 0.8)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
              >
                Read Article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );

  // Use portal to render to body
  if (typeof window !== 'undefined' && document.body) {
    return createPortal(modalContent, document.body);
  }
  
  return null;
}

// Article Card Component
function ArticleCard({ article, index, onClick }: { article: typeof articles[0], index: number, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer h-full"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
      <div
        style={{
          minHeight: '100%',
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '0',
          transition: 'all 0.4s ease',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Top accent bar */}
        <div 
          style={{ 
            height: '3px', 
            background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
          }} 
        />
        
        <div style={{ padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Type badge */}
          <div style={{ marginBottom: '16px' }}>
            <span 
              style={{ 
                fontSize: '10px', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                color: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              Article
            </span>
          </div>

          {/* Title */}
          <h3 
            style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#e2e8f0',
              lineHeight: '1.4',
              marginBottom: '16px',
              transition: 'color 0.3s ease',
              fontFamily: 'system-ui, sans-serif',
            }}
            className="group-hover:text-white"
          >
            {article.title}
          </h3>
          
          {/* Authors and venue */}
          <div style={{ marginTop: 'auto' }}>
            <p 
              style={{ 
                fontSize: '13px', 
                color: 'rgba(255, 255, 255, 0.6)', 
                fontStyle: 'italic',
                marginBottom: '8px',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {article.authors}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p 
                style={{ 
                  fontSize: '12px', 
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {article.venue}
              </p>
              <span 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: '600',
                  color: '#64748b',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {article.year}
              </span>
            </div>
          </div>

          {/* Click indicator */}
          <div 
            style={{ 
              marginTop: '16px', 
              paddingTop: '12px', 
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span 
              style={{ 
                fontSize: '11px', 
                color: 'rgba(255, 255, 255, 0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: 'system-ui, sans-serif',
              }}
              className="group-hover:text-white transition-colors"
            >
              Read More
            </span>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{ color: 'rgba(255, 255, 255, 0.4)' }}
              className="group-hover:text-white transition-colors"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Publications() {
  const [selectedPub, setSelectedPub] = useState<number | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  useEffect(() => {
    if (selectedPub !== null || selectedArticle !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPub, selectedArticle]);

  const handleCardClick = (index: number) => {
    setSelectedPub(index);
  };

  const handleArticleClick = (index: number) => {
    setSelectedArticle(index);
  };

  const handleCloseModal = () => {
    setSelectedPub(null);
  };

  const handleCloseArticleModal = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <section 
        id="publications" 
        className={`min-h-screen pb-20 bg-transparent relative overflow-hidden transition-opacity duration-500 ${selectedPub !== null || selectedArticle !== null ? 'opacity-80' : 'opacity-100'}`}
        style={{ paddingTop: '48px' }}
      >
        <KnowledgeGraph />
        <div className="grid-pattern absolute inset-0 opacity-20"></div>
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${selectedPub !== null || selectedArticle !== null ? 'pointer-events-none' : ''}`}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-4 text-white">
              Publications & Articles
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.3))' }}></div>
          </motion.div>

          {/* Publications Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 style={{ fontSize: '28px', fontWeight: '600', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '8px', fontFamily: 'system-ui, sans-serif' }}>
                Publications
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', fontFamily: 'system-ui, sans-serif' }}>
                Papers and posters on Machine Learning, Biomedical AI, and Natural Language Processing
              </p>
            </motion.div>

            <div 
              className="grid gap-6"
              style={{
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              }}
            >
              {publications.map((pub, index) => (
                <PublicationCard
                  key={index}
                  pub={pub}
                  index={index}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
          </div>

          {/* Articles Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 style={{ fontSize: '28px', fontWeight: '600', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '8px', fontFamily: 'system-ui, sans-serif' }}>
                Articles
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', fontFamily: 'system-ui, sans-serif' }}>
                Featured articles and media coverage
              </p>
            </motion.div>

            <div 
              className="flex justify-center gap-6"
            >
              {articles.map((article, index) => (
                <div
                  key={index}
                  style={{
                    width: 'calc((100% - 3rem) / 3)',
                    maxWidth: 'calc((100% - 3rem) / 3)',
                  }}
                >
                  <ArticleCard 
                    article={article} 
                    index={index}
                    onClick={() => handleArticleClick(index)}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publication Modal - Always render when selectedPub is not null */}
      {selectedPub !== null && publications[selectedPub] && (
        <PublicationModal
          pub={publications[selectedPub]}
          onClose={handleCloseModal}
        />
      )}

      {/* Article Modal - Always render when selectedArticle is not null */}
      {selectedArticle !== null && articles[selectedArticle] && (
        <ArticleModal
          article={articles[selectedArticle]}
          onClose={handleCloseArticleModal}
        />
      )}
    </>
  );
}
