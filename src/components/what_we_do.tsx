'use client';

import React from 'react';
import Link from 'next/link';
import { Code2, Smartphone, Brain, ShoppingCart, TrendingUp, Cloud, Database, Sparkles, Palette, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like Next.js, React, and TypeScript.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Secure & Scalable'],
      link: '/services/web-development',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Support'],
      link: '/services/mobile-apps',
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions using AI, machine learning, and workflow optimization tools.',
      features: ['AI Chatbots', 'Workflow Automation', 'ML Models', 'Smart Analytics'],
      link: '/services/ai-automation',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online store solutions with payment integration, inventory management, and analytics.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory System', 'Order Management'],
      link: '/services/e-commerce',
    },
    {
      icon: Palette,
      title: 'Design & Branding',
      description: 'Professional brand identity design, logos, UI/UX, and complete visual identity systems.',
      features: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Style Guides'],
      link: '/services/design-branding',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, social media, content, and paid advertising.',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'PPC Campaigns'],
      link: '/services/digital-marketing',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup, migration, and management on AWS, Google Cloud, and Azure platforms.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Server Management', 'Cost Optimization'],
      link: '/services/cloud-solutions',
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Database design, data analytics, warehousing, and business intelligence solutions for data-driven decisions.',
      features: ['Database Design', 'Data Analytics', 'BI Dashboards', 'ETL Pipelines'],
      link: '/services/data-solutions',
    },
    {
      icon: Sparkles,
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed specifically for your unique business needs and challenges.',
      features: ['Custom Development', 'System Integration', 'Legacy Modernization', 'API Development'],
      link: '/services/custom-solutions',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Complete Digital Solutions for Your Business
          </h2>
          <p className="text-lg text-gray-600">
            From concept to launch, we provide end-to-end services to transform your ideas into powerful digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-300 rounded-2xl p-6 hover:border-nexiler transition-all group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                </div>
                
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-black mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-black rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Something Custom?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every business is unique. If you need a custom solution tailored to your specific requirements, we are here to help you build it from scratch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Custom Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/consultation"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2"
            >
              Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
