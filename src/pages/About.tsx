
import React from 'react';
import Navbar from '@/components/Navbar';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-sm font-medium uppercase tracking-wider text-nelson-dark-300">
            ABOUT
          </h1>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Nelson Spencer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-6">
                <SocialLinks />
              </div>
              
              <Link 
                to="/newsletter" 
                className="inline-flex items-center justify-center px-5 py-2.5 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                Subscribe to the newsletter <ArrowRight size={16} className="ml-1.5" />
              </Link>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-2xl font-semibold mb-5 text-nelson-dark">Hey, I'm Nelson</h1>
              
              <div className="space-y-4 text-nelson-dark-500 text-base">
                <p>
                  I explore how AI is changing the way we work.
                </p>
                
                <p>
                  My background sits at the intersection of data, tech, and people. I started my
                  career in professional sports, using data to help teams make better
                  decisions. Seeing the broader potential of this approach, I transitioned into
                  tech, applying those same skills to help companies understand their
                  employees and build more human-centered organizations.
                </p>
                
                <p>
                  Drawing on my data science background, I recognized that when tools like
                  ChatGPT emerged, we weren't just getting new technology—we were
                  entering a new era of work. One where traditional roles, paths, and tools are
                  all being redefined, with implications for how humans and AI collaborate.
                </p>
                
                <p>
                  Through my research I explore how human-centered AI is transforming the
                  way we build, collaborate, and design.
                </p>
                
                <p>
                  I'm glad you're here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
