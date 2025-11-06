'use client';

import React from 'react';

const PortfolioStats = () => {
  const stats = [
    { value: '250+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '15+', label: 'Industries Served' },
    { value: '98%', label: 'Success Rate' },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-2xl border border-gray-400 bg-white">
              <div className="text-3xl sm:text-4xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;
