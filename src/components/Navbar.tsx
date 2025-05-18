
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="flex justify-between items-center py-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link to="/" className="text-lg font-medium text-nelson-dark">
          Nelson Spencer
        </Link>
      </div>
      <div className="flex space-x-1">
        <Link 
          to="/" 
          className={`px-3 py-1.5 rounded-md text-sm font-medium ${
            isActive('/') ? 'bg-gray-100 text-nelson-dark' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`px-3 py-1.5 rounded-md text-sm font-medium ${
            isActive('/about') ? 'bg-gray-100 text-nelson-dark' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          About
        </Link>
        <Link 
          to="/blog" 
          className={`px-3 py-1.5 rounded-md text-sm font-medium ${
            isActive('/blog') ? 'bg-gray-100 text-nelson-dark' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
