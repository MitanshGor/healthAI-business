'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, TrendingUp, Shield, ArrowRight, Play, Users, Target, Activity, Dumbbell, Footprints } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const impactMetrics = [
    { label: 'Real-time Processing', value: '<100ms', icon: Zap, impact: 'Instant health insights' },
    { label: 'User Engagement', value: '85%', icon: Users, impact: 'Daily active users' },
    { label: 'Health Improvements', value: '40%', icon: Target, impact: 'Better sleep quality' },
    { label: 'Market Validation', value: '$659B', icon: TrendingUp, impact: 'Addressable market' },
  ];

  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center relative overflow-hidden pt-24 md:pt-28">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-health-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-max relative z-10">
        {/* Fitness Animation Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center space-x-4 mb-4">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <Activity className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
            >
              <Dumbbell className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
            >
              <Footprints className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Impact Focused */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium"
              >
                <Heart className="w-4 h-4 mr-2" />
                Real Impact • Real Usage • Real Results
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Transforming{' '}
                <span className="gradient-text">Health Data</span>{' '}
                Into{' '}
                <span className="gradient-text">Actionable Impact</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                <strong>The Problem:</strong> Millions of people with health devices struggle to understand their data and get actionable guidance, and pet owners lack a holistic view of their dog's wellness and location.
                <br /><br />
                <strong>Our Solution:</strong> Health Pulse AI provides a unified, intelligent platform that combines real-time human and dog health analytics with an AI-powered coach to deliver personalized, proactive wellness guidance.
              </motion.p>
            </div>

            {/* Impact Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {impactMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.label} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-health-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                    <div className="text-xs text-gray-500">{metric.impact}</div>
                  </div>
                );
              })}
            </motion.div>

            {/* Primary CTA - Lead with Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://v0-health-and-fitness.vercel.app/dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl focus:ring-red-500 px-8 py-4 text-lg group"
              >
                <Play className="w-5 h-5 mr-2" />
                Try HealthPulse AI
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://docs.google.com/presentation/d/11cij2aW0rwy-7c0gxZX_a6ijfhOloznhZlfAi-BFW9M/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500 px-8 py-4 text-lg group"
              >
                View Presentation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Live Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-500">Live Demo - Health Pulse AI</div>
              </div>

              {/* Demo Content */}
              <div className="space-y-3">
                {/* Real-time Health Data */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">72</div>
                    <div className="text-sm text-red-700">Heart Rate</div>
                    <div className="text-xs text-red-600">↓ 5% from yesterday</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">8,432</div>
                    <div className="text-sm text-blue-700">Steps</div>
                    <div className="text-xs text-blue-600">↑ 12% this week</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-green-700">Sleep Quality</div>
                    <div className="text-xs text-green-600">↑ 15% improvement</div>
                  </div>
                </div>

                {/* AI-Generated Insight */}
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-primary-700">AI Insight Generated</span>
                  </div>
                  <p className="text-sm text-primary-800">
                    "Your heart rate variability has improved 23% this week. Your recent evening walks are showing positive impact. 
                    Consider maintaining this routine for optimal cardiovascular health."
                  </p>
                </div>

                {/* Impact Visualization */}
                <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20"></div>
                  <div className="text-center relative z-10">
                    <div className="text-lg font-bold text-gray-700 mb-1">Health Trend Analysis</div>
                    <div className="text-sm text-gray-500">Real-time impact tracking</div>
                  </div>
                </div>
              </div>

              {/* Demo Status */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>Live data from Apple Watch</span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                  Connected
                </span>
              </div>
            </div>

            {/* Floating Impact Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white rounded-lg shadow-lg p-3"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="text-lg font-bold">40%</div>
                <div className="text-xs">Health Improvement</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
