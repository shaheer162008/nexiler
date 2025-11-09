'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Download, Layout, Palette, Code } from 'lucide-react';
import Link from 'next/link';

const TemplatesPage = () => {
  const templates = [
    {
      icon: Layout,
      title: 'Landing Page',
      description: 'Modern landing page template perfect for showcasing your product',
      category: 'Web',
      downloads: '2.5k',
      image: 'landing-page-template',
    },
    {
      icon: Palette,
      title: 'Portfolio',
      description: 'Showcase your work with this beautiful portfolio template',
      category: 'Web',
      downloads: '1.8k',
      image: 'portfolio-template',
    },
    {
      icon: Code,
      title: 'SaaS Dashboard',
      description: 'Complete dashboard template for SaaS applications',
      category: 'Web',
      downloads: '3.2k',
      image: 'saas-template',
    },
    {
      icon: Layout,
      title: 'E-Commerce',
      description: 'Full-featured e-commerce template with cart and checkout',
      category: 'Web',
      downloads: '2.1k',
      image: 'ecommerce-template',
    },
    {
      icon: Palette,
      title: 'Blog',
      description: 'Clean and minimal blog template for content creators',
      category: 'Web',
      downloads: '1.5k',
      image: 'blog-template',
    },
    {
      icon: Code,
      title: 'Admin Panel',
      description: 'Comprehensive admin panel with charts and analytics',
      category: 'Web',
      downloads: '2.8k',
      image: 'admin-template',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Templates</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            <span className="text-nexiler">Ready-to-Use</span> Templates
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Professional templates to kickstart your next project. Built with modern technologies and best practices.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => {
              const Icon = template.icon;
              return (
                <div key={index} className="group p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
                  <div className="w-full h-48 border-2 border-gray-300 rounded-2xl flex items-center justify-center mb-4 group-hover:border-nexiler transition-all">
                    <Icon className="w-16 h-16 text-black" />
                  </div>

                  <div className="mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-nexiler-subtle text-black rounded-full uppercase">{template.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2">{template.title}</h3>
                  <p className="text-sm text-gray-700 mb-4">{template.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Download className="w-4 h-4" />
                      <span>{template.downloads} downloads</span>
                    </div>
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-black hover:text-nexiler transition-colors"
                    >
                      Get Template
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl border-2 border-gray-300 bg-white text-center hover:border-nexiler hover:shadow-lg transition-all">
            <h2 className="text-3xl font-bold text-black mb-4">Need a Custom Template?</h2>
            <p className="text-base text-gray-700 mb-6">
              We can create a custom template tailored to your specific needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-nexiler text-black rounded-lg hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all font-semibold text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default TemplatesPage;
