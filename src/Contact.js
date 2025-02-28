import React from "react";
import linkedinLogo from './images/linkedin.png';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function Contact() {
  return (
    <section id="contact" className="p-10 text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4">Connect with me on LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/jesus-caraballoswe/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" width="40" height="40" />
        </a>
      </p>
      <p className="mt-4">Email:
        <a className="email-link" href="mailto:jesusca@mit.edu"
        >
          jesusca@mit.edu
        </a>
      </p>
      <p classname="mt-4">Phone:
        <a className="phone-link" href="tel:+14072641979">
          +1 (407) 264-1979
        </a>
      </p>
    </section>
  );
}

export default Contact;
