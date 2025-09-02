'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Shield, BarChart3, Smartphone, Users, Database, Lock, Target, Bell, TrendingUp, MessageSquare, Award, BookOpen, Heart, Activity, Calendar, Target as TargetIcon, BookOpen as LearnIcon, Settings, Apple } from 'lucide-react';
import Card from './ui/Card';

const Features: React.FC = () => {
  const coreFeatures = [
    {
      icon: Brain,
      title: 'Personalized AI Insights',
      description: 'Track, analyze, and optimize your health routines with AI-powered personalized recommendations based on your real-time data.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'AI Wellness Score',
      description: 'Get your comprehensive AI wellness score that evaluates your overall health status across multiple metrics and provides actionable insights.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageSquare,
      title: 'AI Daily Briefing',
      description: 'Receive personalized daily health briefings with AI-generated insights about your sleep, activity, nutrition, and wellness recommendations.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Activity,
      title: 'Intelligent Workout Recommendations',
      description: 'Get personalized workout plans based on your available time, current health metrics, and fitness goals with detailed exercise instructions.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const advancedFeatures = [
    {
      icon: TrendingUp,
      title: 'Comprehensive Progress Tracking',
      description: 'Track weight goals, BMI, fat loss, muscle gain, and training frequency with visual progress charts and streak tracking.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Heart,
      title: 'Real-Time Health Metrics',
      description: 'Live streaming data of heart rate trends, energy levels, recovery scores, step counts, and calories with real-time analytics.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'AI Goal Generator & Tracker',
      description: 'Get personalized AI recommendations based on your health data and track progress with intelligent insights and goal optimization.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'AI Wellness Coach',
      description: 'Personalized health advice and guidance for recovery, training, and wellness based on your current metrics and goals.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const additionalFeatures = [
    {
      icon: BookOpen,
      title: 'Learn & Resources',
      description: 'Personalized health education and resources tailored to your data and wellness goals.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Apple,
      title: 'Device Integrations',
      description: 'Connect Apple Watch, fitness trackers, and health apps for comprehensive data tracking and synchronization.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Settings,
      title: 'Smart Profile Settings',
      description: 'Update personal information, activity levels, and health preferences for personalized recommendations.',
      color: 'from-gray-500 to-slate-500',
    },
    {
      icon: TargetIcon,
      title: 'Nutrition Wisdom',
      description: 'Smart nutrition recommendations for calories, protein, carbs, and water intake with daily meal tracking and AI insights.',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const aiInsights = [
    {
      title: 'Activity Optimization',
      description: 'You\'re at 8,420 steps today. Add 1,580 more steps to reach your goal.',
      impact: 'Increase Daily Activity',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Hydration Guidance',
      description: 'You\'ve consumed 6.2L of water. Aim for 8L daily for optimal hydration and performance.',
      impact: 'Boost Hydration',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Cardiovascular Health',
      description: 'Your heart rate of 72 BPM and low stress levels show excellent cardiovascular health. Keep it up!',
      impact: 'Excellent Cardiovascular Health',
      color: 'from-red-500 to-pink-500',
    },
  ];

  const workoutFeatures = [
    {
      step: 'Step 1',
      title: 'Choose Available Time',
      description: 'Select a time slot from your free time in the calendar',
      icon: Calendar,
    },
    {
      step: 'Step 2',
      title: 'Review Health Metrics',
      description: 'Check your current Energy, Recovery, Nutrition, Sleep, Heart Rate, and Stress levels',
      icon: BarChart3,
    },
    {
      step: 'Step 3',
      title: 'Get Personalized Workout',
      description: 'Receive AI-generated workout recommendations based on your health metrics',
      icon: Target,
    },
    {
      step: 'Step 4',
      title: 'Schedule & Track',
      description: 'Add workouts to Google Calendar with reminders and track your progress',
      icon: Bell,
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Health{' '}
            <span className="gradient-text">Intelligence Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Health Pulse AI transforms your health data into actionable insights with AI-powered recommendations, 
            personalized workouts, progress tracking, and intelligent wellness coaching.
          </p>
        </motion.div>

        {/* Core Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Core AI Features
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* AI Insights Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            AI Health Insights Examples
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {aiInsights.map((insight, index) => (
              <Card key={insight.title} className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${insight.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {insight.impact}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {insight.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Intelligent Workout System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Intelligent Workout System
          </h3>
          <div className="bg-gradient-to-r from-primary-50 to-health-50 rounded-2xl p-8 border border-primary-200">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workoutFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.step} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-health-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-primary-600 mb-2">
                      {feature.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <div className="bg-white rounded-lg p-4 inline-block">
                <h4 className="font-semibold text-gray-900 mb-2">Workout Features Include:</h4>
                <p className="text-sm text-gray-600">
                  Sets, reps, rest intervals, descriptions, instructions, muscle focus, and calories burned for each exercise
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advanced Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Advanced Health Tracking
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {advancedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Complete Health Ecosystem
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Features;
