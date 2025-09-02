'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart, Zap } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Video Intro', href: '#video-intro' },
    { name: 'Problem & Solution', href: '#problem-solution' },
    { name: 'Why We\'re Best', href: '#competitive-advantage' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Market', href: '#market' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-600 to-health-600 rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Health Pulse AI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 text-sm"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://v0-health-and-fitness.vercel.app/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500 px-4 py-2 text-sm"
            >
              Try App
            </a>
            <a 
              href="https://docs.google.com/presentation/d/11cij2aW0rwy-7c0gxZX_a6ijfhOloznhZlfAi-BFW9M/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl focus:ring-primary-500 px-4 py-2 text-sm"
            >
              View Presentation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <a 
                  href="https://v0-health-and-fitness.vercel.app/dashboard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500 px-4 py-2 text-sm w-full"
                >
                  Try App
                </a>
                <a 
                  href="https://docs.google.com/presentation/d/11cij2aW0rwy-7c0gxZX_a6ijfhOloznhZlfAi-BFW9M/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl focus:ring-primary-500 px-4 py-2 text-sm w-full"
                >
                  View Presentation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
