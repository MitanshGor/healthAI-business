'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Heart, Brain, Target, Zap, CheckCircle, TrendingUp, Users, Clock, BarChart3, Smartphone, Shield, Activity, Dumbbell, Footprints } from 'lucide-react';
import Card from './ui/Card';

const ProblemSolution: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Data Overload, Zero Insights',
      description: 'Raw numbers. No meaning. No action.',
      impact: '85% abandon apps in 3 months',
      color: 'from-red-500 to-pink-500',
      stats: '73% confused by health data',
    },
    {
      icon: Clock,
      title: 'No Time for Health Planning',
      description: 'Too busy. No planning. No results.',
      impact: 'Only 23% stick to goals',
      color: 'from-orange-500 to-red-500',
      stats: '67% cite "no time" as barrier',
    },
    {
      icon: BarChart3,
      title: 'Generic Advice for Everyone',
      description: 'Same advice. Different people. Wrong approach.',
      impact: '40% lower engagement rates',
      color: 'from-yellow-500 to-orange-500',
      stats: '91% want personalized advice',
    },
    {
      icon: Smartphone,
      title: 'Health Data Scattered Everywhere',
      description: 'Multiple apps. No connection. Incomplete picture.',
      impact: 'Miss critical health patterns',
      color: 'from-blue-500 to-cyan-500',
      stats: '78% use 3+ different apps',
    },
    {
      icon: Heart,
      title: 'No Real-Time Health Guidance',
      description: 'Work out when tired. Rest when ready. Wrong timing.',
      impact: 'Injuries. Suboptimal results.',
      color: 'from-purple-500 to-pink-500',
      stats: '62% injuries from poor timing',
    },
    {
      icon: Users,
      title: 'No Accountability. No Motivation.',
      description: 'Lose motivation. Fail habits. No results.',
      impact: 'Only 8% achieve resolutions',
      color: 'from-green-500 to-emerald-500',
      stats: '92% need external motivation',
    },
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'AI Health Intelligence',
      description: 'Raw data → Actionable insights. Immediately.',
      benefit: '85% engagement vs 15% with raw data',
      color: 'from-purple-500 to-pink-500',
      features: ['Smart recommendations', 'Natural insights', 'Context analysis'],
    },
    {
      icon: Zap,
      title: 'Smart Timing',
      description: 'AI finds your perfect workout window.',
      benefit: '40% better consistency & results',
      color: 'from-blue-500 to-cyan-500',
      features: ['Smart scheduling', 'Calendar sync', 'Optimal timing'],
    },
    {
      icon: Target,
      title: 'Personalized Everything',
      description: 'Tailored to YOU, not generic advice.',
      benefit: '91% user satisfaction rate',
      color: 'from-green-500 to-emerald-500',
      features: ['Individual profiles', 'Dynamic goals', 'Personal coaching'],
    },
    {
      icon: Shield,
      title: 'One Health Platform',
      description: 'All devices. One dashboard. Complete picture.',
      benefit: '100% health visibility',
      color: 'from-indigo-500 to-blue-500',
      features: ['Multi-device sync', 'Complete analytics', 'Unified view'],
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Guidance',
      description: 'Know when to push, rest, or adjust. Now.',
      benefit: '62% fewer injuries',
      color: 'from-orange-500 to-red-500',
      features: ['Live monitoring', 'Instant tips', 'Recovery tracking'],
    },
    {
      icon: CheckCircle,
      title: 'AI Coach 24/7',
      description: 'Motivation. Accountability. Results.',
      benefit: '8x goal achievement',
      color: 'from-teal-500 to-cyan-500',
      features: ['Always available', 'Progress tracking', 'Motivation boost'],
    },
  ];

  const impactMetrics = [
    {
      metric: '85%',
      label: 'User Engagement',
      description: 'vs 15% with traditional health apps',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      metric: '40%',
      label: 'Health Improvement',
      description: 'average improvement in user outcomes',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
    },
    {
      metric: '91%',
      label: 'User Satisfaction',
      description: 'with personalized AI recommendations',
      icon: CheckCircle,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      metric: '8x',
      label: 'Goal Achievement',
      description: 'improvement in long-term success rates',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="problem-solution" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            The Health Data{' '}
            <span className="gradient-text">Crisis & Our Solution</span>
          </h2>
          {/* Animated subheading */}
          <div className="flex justify-center items-center space-x-4 mb-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <AlertTriangle className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-xl text-gray-400"
            >
              →
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1], y: [0, -5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="text-xl text-gray-400"
            >
              →
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <motion.div
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="inline-block bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-[length:300%_100%] bg-clip-text text-transparent text-sm"
          >
            <span>Problems → AI → Results</span>
          </motion.div>
        </motion.div>

        {/* Emotional Connect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Card className="p-6 md:p-8 bg-white/90 border border-gray-200 shadow-sm">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">The Real Problem with Wellness</h3>
                <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
                  You started this journey with so much hope. You bought a new tracker, downloaded a few apps, and were ready to finally take control. But something went wrong, didn't it?
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-md flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-red-700 m-0">You're not the problem.</h4>
                    </div>
                    <p className="text-sm text-red-700/90 mt-1">
                      You're not lazy. You're not a failure. You're just a victim of a broken system.
                    </p>
                    <p className="text-sm text-red-700/90 mt-1 font-medium">The Problem Isn't You. It's the Tools.</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-md flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-yellow-700 m-0">The Pain of Being Lost</h4>
                    </div>
                    <p className="text-sm text-yellow-800 mt-1">
                      Data everywhere—steps here, sleep there, meals somewhere else. Numbers that don’t talk to each other.
                    </p>
                    <p className="text-sm text-yellow-800 mt-1 italic">“What does this even mean? What do I do now?”</p>
                    <p className="text-sm text-yellow-800 mt-2 font-medium">Consequence: Confused, overwhelmed, you quit.</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-blue-700 m-0">The Disconnect of "Personalized" Plans</h4>
                    </div>
                    <p className="text-sm text-blue-800 mt-1">
                      Your plan ignores poor sleep and stressful days. It tells you to push when your body needs rest.
                    </p>
                    <p className="text-sm text-blue-800 mt-2 font-medium">Consequence: Exhaustion, injury risk, resentment.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-purple-700 m-0">The Fear of Doing It Wrong</h4>
                    </div>
                    <p className="text-sm text-purple-800 mt-1">
                      Form anxiety and injury fears stop you from committing and getting stronger.
                    </p>
                    <p className="text-sm text-purple-800 mt-2 font-medium">Consequence: Lost gains and shaken confidence.</p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center">
                        <Dumbbell className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-emerald-700 m-0">The Grind of a Broken System</h4>
                    </div>
                    <p className="text-sm text-emerald-800 mt-1">
                      Narrow routines lead to burnout and plateaus. Your body needs holistic care, not specialization.
                    </p>
                    <p className="text-sm text-emerald-800 mt-2 font-medium">Consequence: Burnout, plateaus, no true health.</p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-600 rounded-md flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 m-0">We See You. We Understand.</h4>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">
                      We built this because we lived it. Wellness should be intuitive and proactive—it should guide, not just track.
                    </p>
                    <p className="text-sm text-gray-800 mt-2 font-medium">
                      One source of truth for your body and goals. Exactly what you need, when you need it—and why.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Fitness Problem Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >

        </motion.div>

        {/* Solution Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="bg-gradient-to-r from-primary-500 to-health-500 rounded-2xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Health Pulse AI: The Complete Solution
            </h3>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We don't just solve these problems - we transform them into opportunities for better health, 
              smarter decisions, and lasting lifestyle changes.
            </p>
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How We Transform Health Data Into Action
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-4 border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {solution.title}
                        </h4>
                        <p className="text-gray-600 mb-2 leading-relaxed">
                          {solution.description}
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-2">
                          <div className="text-sm font-semibold text-green-700 mb-1">Benefit:</div>
                          <div className="text-sm text-green-600">{solution.benefit}</div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {solution.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Real Impact, Real Results
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={metric.label} className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.description}
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

export default ProblemSolution;
