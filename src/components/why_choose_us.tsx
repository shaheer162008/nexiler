'use client';

import React from 'react';
import { Users, Clock, Award, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled developers, designers, and marketers with years of experience',
      badge: '50+ Professionals',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or functionality',
      badge: 'On-Time Delivery',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality checks ensure bug-free, optimized solutions',
      badge: '99% Bug-Free',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Solutions designed to scale and grow with your business requirements',
      badge: '200% ROI Average',
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Built for Success
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We don't just build software - we create digital experiences that drive growth, engage users, and deliver measurable results for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white border border-gray-300 hover:border-gray-300 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Badge */}
                <div className="inline-flex px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                  <span className="text-xs font-semibold text-gray-700">
                    {feature.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
