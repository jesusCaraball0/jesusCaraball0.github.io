import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">Contact Me</h2>
          <div className="w-24 h-px bg-white mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-8"
        >
          <div className="space-y-4 text-center">
            <p className="text-gray-300 text-lg">I'm currently focusing on software development and machine learning research.</p>
            <p className="text-gray-300 text-lg">Feel free to reach out!</p>
          </div>

          <div className="flex space-x-8">
            <a
              href="https://www.linkedin.com/in/jesus-caraballoswe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/jesusca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
            >
              GitHub
            </a>

            <a
              href="mailto:jesusca@mit.edu"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
