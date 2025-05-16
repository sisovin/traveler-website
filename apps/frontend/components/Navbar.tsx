import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <a href="/">Traveler</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/destinations" className="text-gray-600 hover:text-gray-900">Destinations</a>
          <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
