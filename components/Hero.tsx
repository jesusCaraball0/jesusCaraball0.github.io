"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-black">
            <span className="block mb-2">Hi, my name is</span>
            <span className="block">
              Jesus Caraballo
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            I'm a CS student at MIT with experience in Software Engineering at Netflix, Machine Learning Engineering at NASA and ArcellAI, and
            Machine Learning Research at Harvard Medical School
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/projects"
              className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              View My Resume
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
