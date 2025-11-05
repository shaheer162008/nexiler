'use client';

import React from 'react';
import Link from 'next/link';
import { Code2, Smartphone, Brain, ShoppingCart, Cloud, Database, TrendingUp, Sparkles, Phone, Package, Users, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Code2, title: 'Web Development', description: 'Professional websites and web apps for businesses of all sizes - from landing pages to full platforms.' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'iOS and Android apps for startups, enterprises, and entrepreneurs looking to go mobile.' },
    { icon: Brain, title: 'AI & Automation', description: 'Smart automation and AI integration to save time and boost productivity for any business.' },
    { icon: ShoppingCart, title: 'E-Commerce Solutions', description: 'Complete online stores for retailers, brands, and creators ready to sell online.' },
    { icon: TrendingUp, title: 'Social Media Growth', description: 'Digital marketing and social media management for influencers, brands, and businesses.' },
    { icon: Database, title: 'Custom Software', description: 'Tailored solutions for unique business needs - startups to enterprises, we build it all.' },
    { icon: Cloud, title: 'Cloud & Hosting', description: 'Reliable hosting, cloud migration, and infrastructure setup for growing businesses.' },
    { icon: Sparkles, title: 'Brand & Design', description: 'Logo design, branding, and UI/UX services to make your business stand out digitally.' },
    { icon: Package, title: 'Pre-Built Packages', description: 'Ready-to-launch website packages and templates for quick, affordable digital presence.' },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Services for Every Business
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Whether you're a startup, social media creator, small business, or enterprise - we have the perfect solution to grow your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-8 rounded-2xl border border-gray-200 bg-white">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-gray-200 bg-white">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">200+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-gray-200 bg-white">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-gray-200 bg-white">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">5+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
