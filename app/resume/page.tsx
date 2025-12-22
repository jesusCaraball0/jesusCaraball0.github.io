"use client";

import { useState, FormEvent } from "react";
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
      <main className="min-h-screen bg-white text-black">
        <Navbar />
        <div className="pt-16 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl w-full">
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold mb-2">Resume</h1>
              <a
                href="/JesusCaraballoResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Download PDF
              </a>
            </div>
            <iframe
              src="/JesusCaraballoResume.pdf"
              className="w-full h-[800px] border border-gray-300 rounded-lg"
              title="Resume PDF"
            />
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-8">
            <h1 className="text-3xl font-bold text-black mb-4 text-center">
              Resume Access
            </h1>
            <p className="text-gray-700 mb-6 text-center">
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
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>
              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Access Resume
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

