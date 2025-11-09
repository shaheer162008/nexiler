'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Users, MessageCircle, Share2, Award } from 'lucide-react';

const CommunityPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Community</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Join Our <span className="text-nexiler">Community</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Connect with thousands of developers, designers, and entrepreneurs building amazing products with Nexiler
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white text-center hover:border-nexiler hover:shadow-lg transition-all">
              <p className="text-3xl font-bold text-black mb-2">5,000+</p>
              <p className="text-sm text-gray-600">Community Members</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white text-center hover:border-nexiler hover:shadow-lg transition-all">
              <p className="text-3xl font-bold text-black mb-2">1,200+</p>
              <p className="text-sm text-gray-600">Discussions</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white text-center hover:border-nexiler hover:shadow-lg transition-all">
              <p className="text-3xl font-bold text-black mb-2">800+</p>
              <p className="text-sm text-gray-600">Resources Shared</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white text-center hover:border-nexiler hover:shadow-lg transition-all">
              <p className="text-3xl font-bold text-black mb-2">24/7</p>
              <p className="text-sm text-gray-600">Active Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Connect with Peers</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Meet like-minded individuals, share experiences, and learn from each other's successes and challenges.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Get Help & Support</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ask questions, get answers from experienced community members, and access our extensive knowledge base.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                <Share2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Share Your Work</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Showcase your projects, get feedback, and inspire others with your creations and achievements.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
              <div className="w-12 h-12 border-2 border-gray-300 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                <Award className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Exclusive Benefits</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Access exclusive resources, early feature previews, special discounts, and community events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl border-2 border-gray-300 bg-white text-center hover:border-nexiler hover:shadow-lg transition-all">
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Join?</h2>
            <p className="text-base text-gray-700 mb-6">
              Become part of our growing community today
            </p>
            <a
              href="https://discord.gg/nexiler"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-nexiler text-black rounded-lg hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all font-semibold text-sm"
            >
              Join on Discord
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default CommunityPage;
