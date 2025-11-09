'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Search, Book, MessageCircle, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const HelpPage = () => {
  const categories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics and start your first project',
      articles: 5,
      link: '/help/getting-started',
    },
    {
      icon: MessageCircle,
      title: 'Project Management',
      description: 'Track and manage your projects effectively',
      articles: 8,
      link: '/help/project-management',
    },
    {
      icon: HelpCircle,
      title: 'Billing & Payments',
      description: 'Understanding pricing and payment methods',
      articles: 6,
      link: '/help/billing',
    },
    {
      icon: Search,
      title: 'Technical Support',
      description: 'Troubleshooting and technical documentation',
      articles: 12,
      link: '/help/technical',
    },
  ];

  const popularArticles = [
    'How to get started with your first project',
    'Understanding our pricing structure',
    'How to request revisions',
    'Payment methods and refund policy',
    'How to communicate with your team',
    'Project timeline and delivery',
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Help Centre</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            How Can We <span className="text-nexiler">Help?</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Search our knowledge base or browse categories below
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-2xl text-sm focus:outline-none focus:border-nexiler"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link key={index} href={category.link} className="block">
                  <div className="group p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
                    <div className="w-12 h-12 border-2 border-gray-300 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-700 mb-3">{category.description}</p>
                    <p className="text-xs text-gray-600">{category.articles} articles</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Popular Articles</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <Link key={index} href="/help/article">
                <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
                  <p className="text-base text-black font-medium">{article}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Still Need Help?</h2>
            <p className="text-base text-gray-700 mb-6">Our support team is here to assist you</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-nexiler text-black rounded-lg hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all font-semibold text-sm"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default HelpPage;
