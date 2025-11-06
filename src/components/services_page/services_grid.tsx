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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-400 bg-white hover:border-gray-300 transition-all"
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-600 uppercase mb-3">Key Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
