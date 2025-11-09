'use client';

import React from 'react';

const AboutTeam = () => {
  const stats = [
    { value: '50+', label: 'Team Members' },
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Countries Served' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Meet Our Team</h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            A diverse team of experts passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <div className="text-3xl sm:text-4xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="p-8 sm:p-12 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all text-center">
          <p className="text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our team includes developers, designers, project managers, and strategists from around the world. 
            We bring together diverse perspectives and expertise to deliver solutions that truly make a difference. 
            Every team member is committed to excellence and dedicated to your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
