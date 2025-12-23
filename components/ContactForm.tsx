"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
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
          Contact Form
        </h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Name and Email side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full name"
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '16px',
                backgroundColor: 'rgba(25, 30, 45, 0.7)',
                border: '1px solid rgba(50, 60, 80, 0.25)',
                color: '#ffffff',
                fontSize: '14px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(30, 64, 175, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.85)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(50, 60, 80, 0.25)';
                e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.7)';
              }}
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email address"
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '16px',
                backgroundColor: 'rgba(25, 30, 45, 0.7)',
                border: '1px solid rgba(50, 60, 80, 0.25)',
                color: '#ffffff',
                fontSize: '14px',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                outline: 'none',
                transition: 'all 0.2s ease',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'rgba(30, 64, 175, 0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.85)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(50, 60, 80, 0.25)';
                e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.7)';
              }}
            />
          </div>
          
          {/* Message textarea */}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Your Message"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '16px',
              backgroundColor: 'rgba(25, 30, 45, 0.7)',
              border: '1px solid rgba(50, 60, 80, 0.25)',
              color: '#ffffff',
              fontSize: '14px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              outline: 'none',
              resize: 'none',
              transition: 'all 0.2s ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(30, 64, 175, 0.5)';
              e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.85)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(50, 60, 80, 0.25)';
              e.currentTarget.style.backgroundColor = 'rgba(25, 30, 45, 0.7)';
            }}
          />
          
          {/* Send button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '16px',
                backgroundColor: 'rgba(139, 92, 246, 0.85)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '500',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.95)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.85)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#ffffff' }}>
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
