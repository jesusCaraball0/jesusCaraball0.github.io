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
        console.log('Card clicked! Index:', index);
        onClick();
      }}
    >
      <div
        style={{
          minHeight: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(24px)',
        border: '1px solid rgba(20, 25, 40, 0.6)',
          borderRadius: '1rem',
          boxShadow: 'none',
          padding: '2.5rem 3rem',
          transition: 'all 0.5s ease',
          display: 'flex',
          flexDirection: 'column',
        }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(20, 25, 40, 0.8)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(20, 40, 80, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(20, 25, 40, 0.6)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      >
        <div className="flex flex-col h-full">
          {/* Title - Centered like modal, no line clamp */}
          <h3 className="text-xl font-bold text-white leading-tight text-center group-hover:text-accent-cyan transition-colors">
            {pub.title}
          </h3>
          <br />
          {/* Authors - Same style as modal */}
          <div className="mb-4 mt-auto">
            <p className="text-base text-gray-300 italic mb-2 text-center">
              {pub.authors}
            </p>
            <p className="text-sm text-white/90 text-center">
              <span className="font-semibold">{pub.venue}</span>
              <span className="text-gray-400"> ({pub.year})</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Modal Component - Simplified and guaranteed to work
function PublicationModal({ pub, onClose }: { pub: typeof publications[0], onClose: () => void }) {
  useEffect(() => {
    console.log('Modal mounted with pub:', pub?.title);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log('Escape pressed');
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [pub, onClose]);

  if (!pub) {
    console.log('Modal: No pub provided');
    return null;
  }

  console.log('Modal: Rendering modal for:', pub.title);

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
        padding: '1rem',
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
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        style={{
          position: 'relative',
          width: '66.666667%',
          maxHeight: '92vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(24px)',
        border: '1px solid rgba(15, 20, 35, 0.55)',
        borderRadius: '1rem',
        boxShadow: '0 0 40px rgba(20, 40, 80, 0.35)',
          overflow: 'hidden',
          zIndex: 10,
          padding: '4rem 5rem',
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 20,
            padding: '0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            e.currentTarget.style.color = '#1e40af';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
          }}
          aria-label="Close"
        >
          <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div style={{ overflowY: 'auto', maxHeight: '92vh' }}>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-center">
            {pub.title}
          </h2>

          {/* Authors */}
          <div className="mb-6">
            <p className="text-lg text-gray-300 italic mb-2">
              {pub.authors}
            </p>
            <p className="text-base text-white/90">
              <span className="font-semibold">{pub.venue}</span>
              <span className="text-gray-400"> ({pub.year})</span>
            </p>
          </div>

          {/* Image */}
          {pub.image && (
            <div className="mb-8 rounded-lg overflow-hidden border border-white/10 flex justify-center">
              <img
                src={pub.image}
                alt={pub.title}
                className="w-2/3 h-auto object-cover"
              />
            </div>
          )}

          {/* Abstract */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-accent-cyan mb-3 uppercase tracking-wide">
              Abstract
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
              {pub.description}
            </p>
          </div>

          {/* Link */}
          {pub.link && (
            <div className="pt-6 border-t border-white/10 text-center">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:text-accent-purple transition-colors font-medium"
              >
                View Publication
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
    console.log('Article modal mounted with article:', article?.title);
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log('Escape pressed');
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [article, onClose]);

  if (!article) {
    console.log('Article modal: No article provided');
    return null;
  }

  console.log('Article modal: Rendering modal for:', article.title);

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
        padding: '1rem',
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
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        style={{
          position: 'relative',
          width: '66.666667%',
          maxHeight: '92vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(30, 64, 175, 0.3)',
          borderRadius: '1rem',
          boxShadow: '0 0 50px rgba(30, 64, 175, 0.5)',
          overflow: 'hidden',
          zIndex: 10,
          padding: '4rem 5rem',
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 20,
            padding: '0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            e.currentTarget.style.color = '#1e40af';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
          }}
          aria-label="Close"
        >
          <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div style={{ overflowY: 'auto', maxHeight: '92vh' }}>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-center">
            {article.title}
          </h2>

          {/* Authors */}
          <div className="mb-6">
            <p className="text-lg text-gray-300 italic mb-2 text-center">
              {article.authors}
            </p>
            <p className="text-base text-white/90 text-center">
              <span className="font-semibold">{article.venue}</span>
              <span className="text-gray-400"> ({article.year})</span>
            </p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-accent-cyan mb-3 uppercase tracking-wide">
              Description
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
              {article.description}
            </p>
          </div>

          {/* Link */}
          {article.link && (
            <div className="pt-6 border-t border-white/10 text-center">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:text-accent-purple transition-colors font-medium"
              >
                Read Article
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
        console.log('Article card clicked! Index:', index);
        onClick();
      }}
    >
      <div
        style={{
          minHeight: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(24px)',
        border: '1px solid rgba(20, 25, 40, 0.6)',
          borderRadius: '1rem',
          boxShadow: 'none',
          padding: '2.5rem 3rem',
          transition: 'all 0.5s ease',
          display: 'flex',
          flexDirection: 'column',
        }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(20, 25, 40, 0.8)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(20, 40, 80, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(20, 25, 40, 0.6)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      >
        <div className="flex flex-col h-full">
          {/* Title - Centered like modal, no line clamp */}
          <h3 className="text-xl font-bold text-white leading-tight text-center group-hover:text-accent-cyan transition-colors">
            {article.title}
          </h3>
          <br />
          {/* Authors - Same style as modal */}
          <div className="mb-4 mt-auto">
            <p className="text-base text-gray-300 italic mb-2 text-center">
              {article.authors}
            </p>
            <p className="text-sm text-white/90 text-center">
              <span className="font-semibold">{article.venue}</span>
              <span className="text-gray-400"> ({article.year})</span>
            </p>
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
    console.log('SelectedPub changed to:', selectedPub);
    console.log('SelectedArticle changed to:', selectedArticle);
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
    console.log('handleCardClick called with index:', index);
    setSelectedPub(index);
  };

  const handleArticleClick = (index: number) => {
    console.log('handleArticleClick called with index:', index);
    setSelectedArticle(index);
  };

  const handleCloseModal = () => {
    console.log('handleCloseModal called');
    setSelectedPub(null);
  };

  const handleCloseArticleModal = () => {
    console.log('handleCloseArticleModal called');
    setSelectedArticle(null);
  };

  console.log('Publications component render. selectedPub:', selectedPub, 'selectedArticle:', selectedArticle);

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
            className="text-center mb-20"
          >
                    <h1 className="text-6xl font-bold mb-6 text-accent-cyan">
                      Publications & Articles
                    </h1>
          </motion.div>

          {/* Publications Section */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">
                Publications
              </h2>
              <p className="text-gray-400 text-sm">Papers and posters on Machine Learning, Biomedical AI, and Natural Language Processing</p>
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
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">
                Articles
              </h2>
              <p className="text-gray-400 text-sm">Featured articles and media coverage</p>
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
