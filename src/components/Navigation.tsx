import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'The Crisis', path: '/crisis' },
    { name: 'Health Impact', path: '/health' },
    { name: 'Take Action', path: '/take-action' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Text */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Home">
            <span className="text-forest-green font-semibold text-lg">
              A Fresh Breath
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-2xl text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-forest-green bg-moss-green'
                    : 'text-medium-gray hover:text-forest-green'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-medium-gray hover:text-forest-green focus:outline-none focus:text-forest-green"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t rounded-b-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-2xl text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-forest-green bg-moss-green'
                      : 'text-medium-gray hover:text-forest-green'
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 