'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target } from 'lucide-react';
import Card from './ui/Card';

const Market: React.FC = () => {
  const marketData = [
    {
      year: '2020',
      size: '$96.5B',
      growth: 'Base Year',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2025',
      size: '$659B',
      growth: '+47% CAGR',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const segments = [
    {
      name: 'Digital Health Startups',
      market: '$25B+',
      share: '40%',
      description: 'Fast-growing startups building innovative health solutions',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Healthcare Enterprises',
      market: '$20B+',
      share: '30%',
      description: 'Large healthcare systems and hospitals',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Fitness & Wellness Apps',
      market: '$15B+',
      share: '20%',
      description: 'Consumer health and fitness applications',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="market" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            Massive Market Opportunity in{' '}
            <span className="gradient-text">Digital Health</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The digital health market is experiencing explosive growth, creating unprecedented opportunities for innovative health technology solutions.
          </p>
        </motion.div>

        {/* Market Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {marketData.map((data, index) => (
              <Card key={data.year} className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${data.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{data.size}</div>
                <div className="text-xl text-gray-600 mb-2">{data.year}</div>
                <div className="text-sm text-gray-500">{data.growth}</div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Market Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Target Market Segments
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <Card key={segment.name} className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${segment.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {segment.name}
                  </h4>
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {segment.market}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    {segment.share} of Revenue
                  </div>
                  <p className="text-sm text-gray-600">
                    {segment.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* Revenue Projections */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-health-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Revenue Projections
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { year: 'Year 1', revenue: '$500K', customers: '50' },
                { year: 'Year 2', revenue: '$2M', customers: '200' },
                { year: 'Year 3', revenue: '$5M', customers: '500' },
                { year: 'Year 4', revenue: '$10M', customers: '1000+' },
              ].map((projection, index) => (
                <div key={projection.year} className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {projection.revenue}
                  </div>
                  <div className="text-lg text-gray-600 mb-1">
                    {projection.year}
                  </div>
                  <div className="text-sm text-gray-500">
                    {projection.customers} Customers
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
};

export default Market;
