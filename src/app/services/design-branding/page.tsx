'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Palette, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DesignBrandingPage = () => {
  const features = [
    'Brand identity design',
    'Logo design & guidelines',
    'UI/UX design',
    'Website & app interfaces',
    'Marketing materials',
    'Social media graphics',
    'Business cards & stationery',
    'Brochures & flyers',
    'Product packaging',
    'Brand strategy',
    'Style guides',
    'Motion graphics',
  ];

  const technologies = [
    'Figma',
    'Adobe XD',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Sketch',
    'InVision',
    'After Effects',
    'Canva Pro',
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Service</span>
          </div>

          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Palette className="w-8 h-8 text-black" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Design & Branding
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create a memorable brand identity that stands out. Professional design services from logos to complete brand systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link 
              href="/consultation"
              className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold text-sm transition-colors inline-flex items-center gap-2"
            >
              Start Your Brand
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/portfolio"
              className="px-6 py-3 bg-white hover:bg-gray-50 border border-gray-300 text-black rounded-lg font-semibold text-sm transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive design and branding services to elevate your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-6 rounded-xl border border-gray-300 bg-white hover:border-black transition-colors"
              >
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-medium text-black">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Design Tools We Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading design software and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="p-6 text-center rounded-xl border border-gray-300 bg-white hover:border-black transition-colors"
              >
                <span className="text-sm font-semibold text-black">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Design Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to delivery, we follow a proven process
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Discovery & Research',
                description: 'Understanding your brand, target audience, and competition to create a solid foundation.'
              },
              {
                step: '02',
                title: 'Concept Development',
                description: 'Creating initial design concepts and mood boards aligned with your brand vision.'
              },
              {
                step: '03',
                title: 'Design Execution',
                description: 'Bringing approved concepts to life with detailed design work and refinements.'
              },
              {
                step: '04',
                title: 'Brand Guidelines',
                description: 'Delivering comprehensive brand guidelines and all necessary design files.'
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-xl border border-gray-300 bg-white hover:border-black transition-colors"
              >
                <div className="text-4xl font-bold text-gray-200">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Ready to Build Your Brand?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a brand identity that makes a lasting impression
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/consultation"
              className="px-8 py-4 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/packages"
              className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-300 text-black rounded-lg font-semibold transition-colors"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default DesignBrandingPage;
