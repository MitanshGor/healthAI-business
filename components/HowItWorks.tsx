'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Brain, Users, Code, Database, Shield, Activity, Zap, Target } from 'lucide-react';
import Card from './ui/Card';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Data Collection',
      description: 'Gather health data from all your devices.',
      technical: 'HealthKit • Real-time • Multi-device',
      impact: '99.9% uptime',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'AI transforms data into smart insights.',
      technical: 'LangGraph • RAG • GPT-4',
      impact: '85% engagement',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
    },
    {
      step: '03',
      title: 'Smart Actions',
      description: 'Get personalized recommendations instantly.',
      technical: 'React Native • Real-time • AI coaching',
      impact: '40% improvement',
      icon: Users,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const technicalStack = [
    {
      category: 'Frontend',
      technologies: ['React Native', 'TypeScript', 'Tailwind CSS'],
      icon: Code,
    },
    {
      category: 'Backend',
      technologies: ['Python Flask', 'Node.js', 'PostgreSQL'],
      icon: Database,
    },
    {
      category: 'AI/ML',
      technologies: ['LangGraph', 'RAG Systems', 'GPT-4'],
      icon: Brain,
    },
    {
      category: 'Infrastructure',
      technologies: ['Kubernetes', 'Docker', 'AWS', 'HIPAA'],
      icon: Shield,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Transform Health Data Into{' '}
            <span className="gradient-text">Action</span>
          </h2>
          {/* In-header Fitness Process Flow Animation */}
          <div className="flex justify-center items-center space-x-4 mb-2">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
            >
              <Activity className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-xl text-gray-400"
            >
              →
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1], y: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="text-xl text-gray-400"
            >
              →
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center"
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <motion.div
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="inline-block bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-[length:300%_100%] bg-clip-text text-transparent text-sm"
          >
            <span>Data Collection → AI Processing → Smart Actions</span>
          </motion.div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full p-4 relative">
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary-500 to-health-500 rounded-full flex items-center justify-center text-white font-bold text-base">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Technical Details */}
                    <div className="mb-2">
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">Tech:</h4>
                      <p className="text-xs text-gray-600">{step.technical}</p>
                    </div>

                    {/* Impact */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                      <h4 className="text-sm font-semibold text-green-700 mb-1">Impact:</h4>
                      <p className="text-xs text-green-600">{step.impact}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Technical Stack
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {technicalStack.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <Card key={stack.category} className="p-3 text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-health-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    {stack.category}
                  </h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {stack.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-health-50 rounded-2xl p-4">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Success Metrics
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  metric: '99.9%',
                  label: 'Uptime',
                  description: 'Continuous monitoring',
                },
                {
                  metric: '<100ms',
                  label: 'Response',
                  description: 'Real-time insights',
                },
                {
                  metric: '85%',
                  label: 'Engagement',
                  description: 'Daily AI usage',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {item.metric}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
