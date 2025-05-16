import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Traveler</h2>
          <p className="text-sm">© 2023 Traveler. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="text-gray-400 hover:text-white">About</a>
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy</a>
          <a href="/terms" className="text-gray-400 hover:text-white">Terms</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm">Contact us: info@traveler.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
