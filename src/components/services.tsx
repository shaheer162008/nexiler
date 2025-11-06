'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Code2, Smartphone, Brain, ShoppingCart, Cloud, Database, TrendingUp, Sparkles, Phone, Package, Users, Zap, ChevronDown, Palette } from 'lucide-react';

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    { icon: Code2, title: 'Web Development', description: 'Professional websites and web apps for businesses of all sizes - from landing pages to full platforms.', link: '/services/web-development' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'iOS and Android apps for startups, enterprises, and entrepreneurs looking to go mobile.', link: '/services/mobile-apps' },
    { icon: Brain, title: 'AI & Automation', description: 'Smart automation and AI integration to save time and boost productivity for any business.', link: '/services/ai-automation' },
    { icon: ShoppingCart, title: 'E-Commerce Solutions', description: 'Complete online stores for retailers, brands, and creators ready to sell online.', link: '/services/e-commerce' },
    { icon: Palette, title: 'Design & Branding', description: 'Logo design, brand identity, and UI/UX services to make your business stand out digitally.', link: '/services/design-branding' },
    { icon: TrendingUp, title: 'Digital Marketing', description: 'Digital marketing and social media management for influencers, brands, and businesses.', link: '/services/digital-marketing' },
    { icon: Cloud, title: 'Cloud Solutions', description: 'Reliable hosting, cloud migration, and infrastructure setup for growing businesses.', link: '/services/cloud-solutions' },
    { icon: Database, title: 'Data Solutions', description: 'Data analytics, database design, and data management for data-driven businesses.', link: '/services/data-solutions' },
    { icon: Package, title: 'Custom Solutions', description: 'Tailored software solutions for unique business needs - we build exactly what you need.', link: '/services/custom-solutions' },
  ];

  const visibleServices = showAll ? services : services.slice(0, 6);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link 
                key={service.title} 
                href={service.link}
                className="group p-8 rounded-2xl border border-gray-300 bg-white hover:border-black hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gray-100/50 via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-black group-hover:scale-110 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">{service.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {services.length > 6 && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-white hover:bg-gray-50 border border-gray-300 text-black rounded-lg font-semibold text-sm transition-colors inline-flex items-center gap-2"
            >
              {showAll ? 'Show Less Services' : `Show ${services.length - 6} More Services`}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-8 rounded-2xl border border-gray-300 bg-white">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-gray-300 bg-white">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">200+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-gray-300 bg-white">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center p-8 rounded-2xl border border-gray-300 bg-white">
            <div className="text-3xl sm:text-4xl font-bold text-black mb-2">5+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
