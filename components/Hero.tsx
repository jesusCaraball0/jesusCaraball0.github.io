"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LossLandscape from "./LossLandscape";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-start justify-center bg-black relative overflow-hidden">
      <LossLandscape />
      
      {/* Gradient overlay to obscure background behind text */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '90%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ marginTop: '100px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="space-y-6"
        >
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              marginTop: '0',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: '300',
                fontFamily: 'system-ui, sans-serif',
                marginBottom: '8px',
              }}
            >
              Hi, I'm
            </p>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: '600',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#ffffff',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                marginBottom: '20px',
              }}
            >
              Jesus Caraballo
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: 'rgba(255, 255, 255, 0.6)',
                lineHeight: '1.7',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              A CS student at MIT building intelligent systems at Netflix, NASA, and Harvard Medical School.
            </p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link
              href="/resume"
              style={{
                padding: '14px 32px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#000000',
                borderRadius: '50px',
                fontWeight: '500',
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: 'none',
                fontFamily: 'system-ui, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View Resume
            </Link>
            <Link
              href="/contact"
              style={{
                padding: '14px 32px',
                backgroundColor: 'transparent',
                color: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50px',
                fontWeight: '500',
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                fontFamily: 'system-ui, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
