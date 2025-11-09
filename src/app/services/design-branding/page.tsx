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
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Service</span>
          </div>

          <div className="w-16 h-16 border-2 border-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-nexiler transition-all group">
            <Palette className="w-8 h-8 text-black group-hover:text-white transition-colors" />
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
              className="relative px-6 py-3 bg-nexiler text-white rounded-lg font-semibold text-sm overflow-hidden group hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all inline-flex items-center gap-2"
            >
              <span className="relative z-10">Start Your Brand</span>
              <ArrowRight className="h-4 w-4 relative z-10" />
              <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link 
              href="/portfolio"
              className="relative px-6 py-3 bg-white border-2 border-nexiler text-black rounded-lg font-semibold text-sm overflow-hidden group hover:bg-nexiler-subtle transition-all"
            >
              <span className="relative z-10">View Portfolio</span>
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
                className="flex items-start gap-3 p-6 rounded-xl border-2 border-gray-300 bg-white hover:border-nexiler hover:bg-nexiler-subtle transition-all"
              >
                <div className="shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-nexiler" />
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
                className="p-6 text-center rounded-xl border-2 border-gray-300 bg-white hover:border-nexiler hover:bg-nexiler-subtle transition-all"
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
                className="flex gap-6 p-6 rounded-xl border-2 border-gray-300 bg-white hover:border-nexiler hover:bg-nexiler-subtle transition-all"
              >
                <div className="text-4xl font-bold text-nexiler-light">{item.step}</div>
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
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl bg-white border-2 border-gray-300 text-center hover:border-nexiler hover:shadow-lg transition-all">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nexiler-subtle border border-nexiler rounded-full mb-6">
              <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-black uppercase tracking-wider">Let's Create Together</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Ready to Build Your Brand?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Let's create a brand identity that makes a lasting impression
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link 
                href="/consultation"
                className="relative px-8 py-4 bg-nexiler text-black rounded-lg font-semibold overflow-hidden group hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all inline-flex items-center gap-2"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight className="h-5 w-5 relative z-10" />
              </Link>
              <Link 
                href="/packages"
                className="px-8 py-4 bg-transparent border-2 border-gray-300 text-black rounded-lg font-semibold hover:border-nexiler transition-all"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default DesignBrandingPage;
