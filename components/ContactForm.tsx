"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
// To set up EmailJS:
// 1. Create a free account at https://www.emailjs.com/
// 2. Create an Email Service (connect your email provider)
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Replace these values with your actual IDs:
const EMAILJS_SERVICE_ID = "service_dqaqtw9"; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_jhji26b"; // Your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "8P5bkB1OdnuENERWv"; // Your EmailJS public key

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or email directly.");
      
      // Reset to idle after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
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
        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Name and Email side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <input
              type="text"
              id="name"
              name="from_name"
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
              name="from_email"
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
          
          {/* Status messages */}
          {status === "success" && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              color: '#22c55e',
              fontSize: '14px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textAlign: 'center',
            }}>
              ✓ Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
          
          {status === "error" && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '12px',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              fontSize: '14px',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textAlign: 'center',
            }}>
              {errorMessage}
            </div>
          )}
          
          {/* Send button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '16px',
                backgroundColor: status === "sending" ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.85)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '500',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                cursor: status === "sending" ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none',
                opacity: status === "sending" ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (status !== "sending") {
                  e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.95)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (status !== "sending") {
                  e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.85)';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {status === "sending" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#ffffff' }}>
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
