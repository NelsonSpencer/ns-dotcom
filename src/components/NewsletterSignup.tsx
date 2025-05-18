
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
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-nelson-dark'} rounded-xl p-6 shadow-sm border border-gray-100`}>
      <h2 className="text-xl font-semibold mb-2">Augmented Intelligence Newsletter</h2>
      <p className="text-nelson-dark-300 mb-6 text-sm">Harness AI's power to future-proof yourself.</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 px-4 py-2.5 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 text-sm"
          required
        />
        <button 
          type="submit" 
          aria-label="Subscribe"
          className={`w-10 h-10 rounded-md flex items-center justify-center ${
            darkMode ? 'bg-white text-black' : 'bg-black text-white'
          } hover:opacity-90 transition-colors`}
        >
          <ArrowRight size={18} />
        </button>
      </form>
      
      <p className="text-nelson-dark-100 text-xs mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default NewsletterSignup;
