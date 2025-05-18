
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const NewsletterSignup = ({ darkMode = false }: { darkMode?: boolean }) => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would call an API to subscribe the user
    console.log('Subscribing email:', email);
    setEmail('');
    // You could add a toast notification here
  };

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-nelson-dark'} rounded-lg p-8 shadow-sm border border-gray-100`}>
      <h2 className="text-2xl font-semibold mb-2">Augmented Intelligence Newsletter</h2>
      <p className="text-nelson-dark-300 mb-6">Harness AI's power to future-proof yourself.</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nelson-blue"
          required
        />
        <button 
          type="submit" 
          className={`px-4 py-3 rounded-md flex items-center justify-center ${
            darkMode ? 'bg-white text-black' : 'bg-nelson-blue text-white'
          } hover:bg-opacity-90 transition-colors`}
        >
          <ArrowRight size={20} />
        </button>
      </form>
      
      <p className="text-nelson-dark-100 text-sm mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default NewsletterSignup;
