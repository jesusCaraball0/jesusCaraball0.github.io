"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RESUME_PASSWORD = "password1"; // Change this to your desired password

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
        <div style={{ paddingTop: '84px' }} className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full"
          >
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold mb-2 glow-cyan text-accent-cyan">Resume</h1>
              <a
                href="/JesusCaraballoResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-cyan hover:text-accent-purple hover:underline transition-colors"
              >
                Download PDF
              </a>
            </div>
            <div className="bg-card-bg border border-accent-cyan/30 rounded-lg p-4 hover:border-accent-cyan transition-all">
              <iframe
                src="/JesusCaraballoResume.pdf"
                className="w-full h-[800px] border border-accent-cyan/20 rounded"
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
      <div className="pt-16 min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="grid-pattern absolute inset-0 opacity-20"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full relative z-10"
        >
          <div className="bg-card-bg border border-accent-cyan/30 rounded-lg p-8 hover:border-accent-cyan hover:shadow-glow-cyan transition-all duration-300">
            <h1 className="text-3xl font-bold text-accent-cyan mb-4 text-center glow-cyan">
              Resume Access
            </h1>
            <p className="text-gray-300 mb-6 text-center">
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
                  className="w-full px-4 py-3 bg-black/50 border border-accent-cyan/30 rounded-lg text-white focus:outline-none focus:border-accent-cyan transition-colors placeholder-gray-500"
                  required
                />
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  {error}
                </motion.p>
              )}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-white rounded-lg font-semibold hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105"
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
