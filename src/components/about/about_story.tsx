'use client';

import React from 'react';

const AboutStory = () => {
  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black">Our Story</h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Founded in 2019, Nexiler started with a simple mission: to help businesses of all sizes leverage technology to grow and succeed in the digital age.
              </p>
              <p>
                What began as a small team of freelance developers has grown into a full-service digital agency, serving clients across the globe with cutting-edge web development, mobile apps, AI automation, and digital solutions.
              </p>
              <p>
                Today, we've completed over 250+ projects for 200+ happy clients, maintaining a 98% satisfaction rate and building long-term partnerships that drive real business results.
              </p>
            </div>
          </div>

          {/* Right - Mission & Vision */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-xl font-bold text-black mb-3">Our Mission</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                To empower businesses with innovative digital solutions that are accessible, affordable, and built to last. We believe every business deserves world-class technology.
              </p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-xl font-bold text-black mb-3">Our Vision</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                To be the go-to digital partner for businesses worldwide, known for our quality, reliability, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
