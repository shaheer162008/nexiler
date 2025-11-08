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
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Services</span>
          </div>
          
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
              <div
                key={service.title}
                className="group p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-xl transition-all duration-300 cursor-pointer text-center flex flex-col"
              >
                <div className="w-16 h-16 border-2 border-gray-300 bg-white group-hover:bg-nexiler rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 mx-auto">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-nexiler transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{service.description}</p>
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
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {services.length > 6 && (
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-6 py-3 bg-white hover:border-nexiler border-2 border-gray-300 text-black rounded-lg font-semibold text-sm transition-all duration-300 inline-flex items-center gap-2 hover:shadow-md"
            >
              <span className="group-hover:text-nexiler transition-colors duration-300">
                {showAll ? 'Show Less Services' : `Show ${services.length - 6} More Services`}
              </span>
              <ChevronDown className={`h-4 w-4 group-hover:text-nexiler transition-all duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group text-center p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-black group-hover:text-nexiler mb-2 transition-colors duration-300">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="group text-center p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-black group-hover:text-nexiler mb-2 transition-colors duration-300">200+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="group text-center p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-black group-hover:text-nexiler mb-2 transition-colors duration-300">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="group text-center p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-black group-hover:text-nexiler mb-2 transition-colors duration-300">5+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
