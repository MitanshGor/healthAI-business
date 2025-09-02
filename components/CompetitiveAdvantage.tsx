'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Target, Zap, Brain, Shield, TrendingUp, CheckCircle, AlertTriangle, Users, Heart, Activity, Star, Trophy, Award } from 'lucide-react';
import Card from './ui/Card';

const CompetitiveAdvantage: React.FC = () => {
  const competitiveAdvantages = [
    {
      icon: Crown,
      title: 'All-Device Intelligence',
      description: 'Works with every device. No lock-in.',
      advantage: 'Universal vs. locked',
      color: 'from-purple-500 to-pink-500',
      competitors: ['Fitbit', 'Oura', 'Whoop', 'Garmin'],
      weakness: 'Hardware lock-in, no cross-device smarts',
    },
    {
      icon: Brain,
      title: 'Live Health Intelligence',
      description: 'Real-time data vs. old patterns.',
      advantage: 'Live vs. historical',
      color: 'from-blue-500 to-cyan-500',
      competitors: ['Fitbod', 'Freeletics', 'Dr. Muscle'],
      weakness: 'Single focus, no real-time data',
    },
    {
      icon: Zap,
      title: 'Smart Nutrition',
      description: 'AI recommendations vs. manual logging.',
      advantage: 'Proactive vs. manual',
      color: 'from-green-500 to-emerald-500',
      competitors: ['MyFitnessPal', 'Noom'],
      weakness: 'Manual input required',
    },
    {
      icon: Shield,
      title: 'Complete Wellness',
      description: 'AI coach vs. data dashboard.',
      advantage: 'Intelligent vs. static',
      color: 'from-orange-500 to-red-500',
      competitors: ['Apple Health', 'Google Fit', 'Strava'],
      weakness: 'Data only, no guidance',
    },
  ];

  const uniqueFeatures = [
    {
      icon: Target,
      title: 'AI Wellness Score',
      description: 'One score. All your health data.',
      impact: 'Complete vs. fragmented',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Brain,
      title: 'Daily AI Briefing',
      description: 'Personalized insights every day.',
      impact: 'Proactive vs. reactive',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Activity,
      title: 'Smart Workout Timing',
      description: 'AI finds your perfect workout moment.',
      impact: 'Intelligent vs. generic',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'AI Coach 24/7',
      description: 'Always there. Always helpful.',
      impact: 'Interactive vs. static',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const marketPositioning = [
    {
      metric: '100%',
      label: 'Device Agnostic',
      description: 'Works with all wearables',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
    },
    {
      metric: 'Real-Time',
      label: 'Intelligence',
      description: 'Live data. Instant insights.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      metric: 'Holistic',
      label: 'Wellness Approach',
      description: 'Fitness. Nutrition. Sleep. All.',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
    },
    {
      metric: 'AI-First',
      label: 'Platform Design',
      description: 'Built for intelligence',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="competitive-advantage" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why We're the{' '}
            <span className="gradient-text">Best in the World</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Others do one thing well. We do everything brilliantly.
          </p>
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Competitive Advantages
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {competitiveAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={advantage.title} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {advantage.description}
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                        <div className="text-sm font-semibold text-green-700 mb-1">Our Advantage:</div>
                        <div className="text-sm text-green-600">{advantage.advantage}</div>
                      </div>
                      <div className="mb-3">
                        <div className="text-sm font-semibold text-gray-700 mb-1">Competitors:</div>
                        <div className="flex flex-wrap gap-2">
                          {advantage.competitors.map((competitor, compIndex) => (
                            <span
                              key={compIndex}
                              className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full"
                            >
                              {competitor}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <div className="text-sm font-semibold text-red-700 mb-1">Their Weakness:</div>
                        <div className="text-sm text-red-600">{advantage.weakness}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Unique Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Features That Don't Exist Anywhere Else
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniqueFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-4 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                    <div className="text-sm font-semibold text-blue-700 mb-1">Impact:</div>
                    <div className="text-sm text-blue-600">{feature.impact}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Market Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Market Positioning: The Complete Solution
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketPositioning.map((position, index) => {
              const Icon = position.icon;
              return (
                <Card key={position.label} className="p-4 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {position.metric}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    {position.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {position.description}
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>




      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
