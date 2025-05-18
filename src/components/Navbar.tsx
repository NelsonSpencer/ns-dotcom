
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="flex justify-between items-center py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <Link to="/" className="text-xl font-bold text-nelson-dark">
          Nelson Spencer
        </Link>
      </div>
      <div className="flex space-x-1">
        <Link 
          to="/" 
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            isActive('/') ? 'bg-nelson-blue-light text-nelson-dark' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            isActive('/about') ? 'bg-nelson-blue-light text-nelson-dark' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          About
        </Link>
        <Link 
          to="/blog" 
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            isActive('/blog') ? 'bg-nelson-blue-light text-nelson-dark' : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
