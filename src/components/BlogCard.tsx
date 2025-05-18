
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  coverImage, 
  date, 
  readTime,
  author,
  featured = false 
}: BlogCardProps) => {
  
  if (featured) {
    return (
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 h-64 md:h-auto">
          <img 
            src={coverImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 bg-gray-900 text-white flex flex-col">
          <div className="mb-4">
            <span className="inline-block bg-nelson-blue rounded-full px-3 py-1 text-xs font-semibold text-white">
              Featured
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight mb-4">{title}</h2>
          <p className="mb-6 text-gray-300 flex-grow">{excerpt}</p>
          
          <div className="mt-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
                N
              </div>
              <span className="text-gray-300">{author}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-400">
                <span>{date}</span> • <span>{readTime}</span>
              </div>
              <Link 
                to={`/blog/${id}`}
                className="inline-flex items-center text-white font-medium"
              >
                Read Article <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <div className="h-48">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-nelson-dark-300 mb-4 line-clamp-2">{excerpt}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span>{date}</span> • <span>{readTime}</span>
          </div>
          <Link 
            to={`/blog/${id}`}
            className="text-nelson-blue font-medium text-sm hover:underline"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
