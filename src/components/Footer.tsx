import React from 'react';
import { Share2, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-green text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-moss-green">
              North Creek High School • FBLA Data Analysis Project
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-moss-green">Share:</span>
            <button className="p-2 text-moss-green hover:text-white transition-colors" aria-label="Share on Twitter">
              <Twitter size={20} />
            </button>
            <button className="p-2 text-moss-green hover:text-white transition-colors" aria-label="Share on Facebook">
              <Facebook size={20} />
            </button>
            <button className="p-2 text-moss-green hover:text-white transition-colors" aria-label="Share on Instagram">
              <Instagram size={20} />
            </button>
            <button className="p-2 text-moss-green hover:text-white transition-colors" aria-label="Share">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 