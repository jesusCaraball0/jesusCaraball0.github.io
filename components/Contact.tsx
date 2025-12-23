"use client";

import { motion } from "framer-motion";
import DataFlow from "./DataFlow";
import ContactForm from "./ContactForm";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jesusCaraball0",
      icon: "/imgs/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jesus-caraballoswe/",
      icon: "/imgs/linkedin.svg",
    },
    {
      name: "Email",
      url: "mailto:jesuscaraballotsic@gmail.com",
      icon: "/imgs/gmail.svg",
    },
  ];

  return (
    <section id="contact" className="pb-20 bg-black relative overflow-hidden" style={{ paddingTop: '48px' }}>
      <DataFlow />
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Right side - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%' }}
          >
            <div
              style={{
                backgroundColor: 'rgba(20, 25, 40, 0.6)',
                border: '1px solid rgba(40, 50, 70, 0.3)',
                borderRadius: '24px',
                padding: '24px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h3 
                style={{ 
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '20px',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                Connect With Me
              </h3>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'space-between' }}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '16px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(25, 30, 45, 0.7)',
                      border: '1px solid rgba(50, 60, 80, 0.25)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      flex: '1',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(30, 64, 175, 0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.85)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(50, 60, 80, 0.25)';
                      e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.7)';
                    }}
                  >
                    <img 
                      src={link.icon} 
                      alt={link.name}
                      style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain',
                      }}
                    />
                    <span style={{
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}>
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
