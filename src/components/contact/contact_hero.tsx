'use client';

import React from 'react';

const ContactHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-4">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <span className="text-sm font-semibold text-black uppercase tracking-wider">Contact Us</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
          Let's Build Something
          <br />
          <span className="text-black">Amazing Together</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
          Have a project in mind? We'd love to hear from you. Get in touch and let's discuss how we can help bring your ideas to life.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
