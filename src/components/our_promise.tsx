'use client';

import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

const OurPromise = () => {
  const promises = [
    {
      icon: Users,
      title: 'Transparent Communication',
      description: 'Regular updates, clear timelines, and honest feedback throughout your project',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '50+ successful projects delivered on time and within budget',
    },
    {
      icon: TrendingUp,
      title: 'Quality Guarantee',
      description: 'Free revisions until you\'re 100% satisfied with the final result',
    },
  ];

  const stats = [
    {
      value: '100%',
      label: 'Project Completion Rate',
    },
    {
      value: '24/7',
      label: 'Support & Maintenance',
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites and apps - we build lasting partnerships that drive your business forward
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Promise Box */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-white border border-gray-200 h-full">
              <div className="border-l-4 border-black pl-6 mb-8">
                <h3 className="text-2xl font-bold text-black mb-3">
                  Our Promise to You
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Every project gets our full attention. We treat your business like our own and deliver solutions that exceed expectations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-black mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {promises.map((promise, index) => {
                const Icon = promise.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-black" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">
                        {promise.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {promise.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
