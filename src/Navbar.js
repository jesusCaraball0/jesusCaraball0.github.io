import React from "react";

function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-center space-x-4">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;
