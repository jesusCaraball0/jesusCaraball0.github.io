"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Password is stored in .env.local (gitignored) and injected at build time
const RESUME_PASSWORD = process.env.NEXT_PUBLIC_RESUME_PASSWORD || "";

export default function ResumePage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password === RESUME_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  if (isAuthenticated) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <div style={{ paddingTop: '120px', paddingBottom: '60px' }} className="min-h-screen flex items-start justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full"
          >
            <div style={{ marginBottom: '32px', textAlign: 'center' }}>
              <h1 
                style={{
                  fontSize: '36px',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '16px',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                Resume
              </h1>
              <a
                href="/JesusCaraballoResume.pdf"
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
                Download PDF
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
            </div>
            <div 
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '16px',
                overflow: 'hidden',
              }}
            >
              <iframe
                src="/JesusCaraballoResume.pdf"
                style={{
                  width: '100%',
                  height: '800px',
                  border: 'none',
                  borderRadius: '8px',
                }}
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: '40%', minWidth: '320px', maxWidth: '500px' }}
          className="relative z-10"
        >
          <div 
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '40px',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* Top accent bar */}
            <div 
              style={{ 
                height: '3px', 
                background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))',
                borderRadius: '2px',
                marginBottom: '32px',
              }} 
            />
            
            <h1 
              style={{
                fontSize: '28px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '12px',
                textAlign: 'center',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Resume Access
            </h1>
            <p 
              style={{
                fontSize: '15px',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '32px',
                textAlign: 'center',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Please enter the password to view the resume.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter password"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    backgroundColor: 'rgba(25, 30, 45, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    color: '#ffffff',
                    fontSize: '15px',
                    fontFamily: 'system-ui, sans-serif',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.8)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.6)';
                  }}
                  required
                />
              </div>
              
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    color: '#f87171',
                    fontSize: '14px',
                    textAlign: 'center',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  {error}
                </motion.p>
              )}
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#000000',
                  borderRadius: '50px',
                  fontWeight: '500',
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'system-ui, sans-serif',
                  transition: 'all 0.3s ease',
                  marginTop: '8px',
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
                Access Resume
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
