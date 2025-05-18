
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';

// Sample blog data
const blogPosts = [
  {
    id: "future-of-work",
    title: "The Future of Work: Embracing Human-Centered AI",
    excerpt: "As the founder of efora.io, I'm reimagining how AI and automation can enhance human potential rather than replace it. Everywhere you look, folks are talking about automation and AI. The conversation...",
    coverImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    date: "March 29, 2025",
    readTime: "9 min read",
    author: "Nelson Spencer",
    category: "AI"
  },
  {
    id: "ai-productivity",
    title: "Boosting Productivity with AI Tools",
    excerpt: "Discover how AI tools can help knowledge workers focus on high-value work and automate routine tasks.",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2025",
    readTime: "6 min read",
    author: "Nelson Spencer",
    category: "Productivity"
  },
  {
    id: "human-ai-teams",
    title: "Building Effective Human-AI Teams",
    excerpt: "How to structure teams and workflows when humans and AI systems work together to solve problems.",
    coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "March 3, 2025",
    readTime: "8 min read",
    author: "Nelson Spencer",
    category: "Team Building"
  }
];

const categories = ["All", "Blog", "AI", "Productivity", "Team Building"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">A little this and a little that.</h1>
          <p className="text-nelson-dark-500 text-lg">A peek inside my innie's brain.</p>
        </div>
        
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="space-y-12">
          <BlogCard {...blogPosts[0]} featured={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map(post => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
