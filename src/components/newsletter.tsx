'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  const benefits = [
    'Weekly updates',
    'No spam ever',
    'Unsubscribe anytime',
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-6">
            <Mail className="w-4 h-4 text-nexiler" />
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Newsletter</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Stay Updated with Latest Trends
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Get the latest insights, tips, and updates about web development, design trends, and digital marketing delivered straight to your inbox.
          </p>
        </div>

        {/* Subscribe Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-nexiler transition-colors"
              />
            </div>
            <button
              type="submit"
              className="group relative px-6 sm:px-8 py-3 bg-nexiler text-white rounded-xl font-semibold text-xs sm:text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(135,237,130,0.4)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span className="relative z-10">Subscribe Now</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </form>

        {/* Benefits */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-700">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-nexiler" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
