'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import Card from './ui/Card';

const VideoIntro: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <section id="video-intro" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our{' '}
            <span className="gradient-text">Business Vision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our 2-minute business introduction to understand how HealthPulse AI is revolutionizing the fitness industry and creating value for users worldwide.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-0 overflow-hidden border-0 shadow-2xl">
            {!isPlaying ? (
              // Thumbnail with Play Button
              <div className="relative group cursor-pointer" onClick={handlePlay}>
                {/* Thumbnail Image */}
                <div className="relative w-full h-96 bg-gradient-to-br from-primary-500 to-health-500 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* HealthPulse AI Logo/Icon */}
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-health-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">HealthPulse AI</h3>
                    <p className="text-white/90 text-lg">Your Complete AI Fitness Coach</p>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-primary-600 ml-1" />
                    </motion.div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white text-center">
                      <p className="text-sm font-medium">Click to watch 2-minute business introduction</p>
                      <p className="text-xs text-white/70">Learn about our market opportunity and business model</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Video Player using Google Drive iframe
              <div className="relative">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1MybTKaXGMWSLx6C6WJON1LpHwAfwztBo/preview"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay"
                    title="HealthPulse AI Business Introduction"
                  ></iframe>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute top-4 right-4">
                  <button
                    onClick={handleClose}
                    className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Video Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Learn</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="text-left">
                <p>• Our market opportunity & size</p>
                <p>• Business model & revenue streams</p>
                <p>• Competitive advantages</p>
              </div>
              <div className="text-left">
                <p>• Technology innovation</p>
                <p>• Growth strategy & roadmap</p>
                <p>• Investment potential</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoIntro;
