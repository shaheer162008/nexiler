'use client';

import React from 'react';
import Link from 'next/link';
import { Code2, Smartphone, Brain, ShoppingCart, TrendingUp, Cloud, Database, Sparkles, ArrowRight } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies. From landing pages to complex platforms.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'CMS Integration'],
      link: '/services/web-development',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android. Beautiful, fast, and user-friendly.',
      features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment', 'Push Notifications'],
      link: '/services/mobile-apps',
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions powered by AI. Chatbots, workflow automation, and machine learning integration.',
      features: ['AI Chatbots', 'Workflow Automation', 'Data Analysis', 'API Integration'],
      link: '/services/ai-automation',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment processing, inventory management, and customer analytics.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics Dashboard'],
      link: '/services/e-commerce',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing to grow your online presence. SEO, social media, and content marketing.',
      features: ['SEO Services', 'Social Media', 'Content Strategy', 'Email Marketing'],
      link: '/services/digital-marketing',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup, migration, and management. AWS, Google Cloud, and Azure expertise.',
      features: ['Cloud Migration', 'DevOps Setup', 'Server Management', 'Scalable Infrastructure'],
      link: '/services/cloud-solutions',
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Database design, data migration, and analytics. Turn your data into actionable insights.',
      features: ['Database Design', 'Data Migration', 'Analytics', 'Business Intelligence'],
      link: '/services/data-solutions',
    },
    {
      icon: Sparkles,
      title: 'Custom Solutions',
      description: 'Tailored software solutions for unique business needs. We build exactly what you need.',
      features: ['Custom Development', 'System Integration', 'Legacy Modernization', 'Consulting'],
      link: '/services/custom-solutions',
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Tag */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Services</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-xl transition-all duration-300 cursor-pointer text-center flex flex-col"
              >
                {/* Icon */}
                <div className="w-16 h-16 border-2 border-gray-300 bg-white group-hover:bg-nexiler rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <Icon className="w-8 h-8 text-black" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-3 group-hover:text-nexiler transition-colors duration-300">{service.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Features - Single Column */}
                <div className="mb-4 space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-nexiler rounded-full shrink-0"></div>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-nexiler-subtle border-2 border-nexiler text-nexiler-dark rounded-lg text-xs font-semibold uppercase tracking-wider group-hover:bg-nexiler group-hover:text-white transition-all duration-300 mt-auto mx-auto"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Packages CTA Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-white border-2 border-gray-300 text-center hover:border-nexiler hover:shadow-lg transition-all">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-nexiler-subtle border border-nexiler rounded-full mb-6">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Choose the Perfect Package
          </h2>
          
          <p className="text-base text-gray-700 max-w-2xl mx-auto mb-8">
            We've created affordable packages for startups, businesses, and enterprises. Find the one that fits your needs and budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/packages" 
              className="group relative px-6 py-3 bg-nexiler text-black rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] w-full sm:w-auto text-center"
            >
              <span className="relative z-10">View All Packages</span>
            </Link>
            
            <Link 
              href="/consultation" 
              className="group relative px-6 py-3 bg-white border-2 border-gray-300 text-black rounded-lg font-semibold text-sm transition-all duration-300 hover:border-nexiler hover:shadow-lg w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Get Free Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
