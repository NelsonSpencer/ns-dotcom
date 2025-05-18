
import React from 'react';
import Navbar from '@/components/Navbar';
import NewsletterSignup from '@/components/NewsletterSignup';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-12">
        <div className="max-w-3xl text-center mb-12">
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            How AI is changing the way we work.
          </h1>
          <p className="text-xl text-nelson-dark-500 mb-12">
            Hi, I'm Nelson — I help professionals feel more capable, not replaceable.
          </p>
          
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </main>
      
      <div className="flex justify-center py-8">
        <SocialLinks />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
