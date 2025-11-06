'use client';

import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const AboutValues = () => {
  const values = [
    {
      icon: Users,
      title: 'Client-First Approach',
      description: 'Your success is our success. We prioritize your needs and work as an extension of your team.',
    },
    {
      icon: Target,
      title: 'Quality Over Quantity',
      description: 'We focus on delivering exceptional work rather than rushing projects. Every detail matters.',
    },
    {
      icon: Award,
      title: 'Continuous Innovation',
      description: 'We stay ahead of technology trends to bring you the most modern and effective solutions.',
    },
    {
      icon: Zap,
      title: 'Transparent Communication',
      description: 'Regular updates, clear timelines, and honest feedback. No surprises, just results.',
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Our Values</h2>
          <p className="text-base text-black max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="p-6 rounded-2xl border border-gray-400 bg-white">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{value.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
