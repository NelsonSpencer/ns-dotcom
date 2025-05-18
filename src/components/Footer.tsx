
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-400 text-xs mt-8 border-t border-gray-100">
      <p>© {year} Nelson Spencer LLC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
