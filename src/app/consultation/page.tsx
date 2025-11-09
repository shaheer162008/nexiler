'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Calendar, Check, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ConsultationPage = () => {
  const benefits = [
    'Understand your project requirements',
    'Discuss timeline and budget',
    'Get expert recommendations',
    'Learn about our process',
    'Ask any questions',
    'No commitment required',
  ];

  const whatToExpect = [
    {
      step: "1",
      title: "Schedule Your Call",
      description: "Pick a time that works for you using our contact form or calendar.",
    },
    {
      step: "2",
      title: "Initial Discussion",
      description: "We will talk about your goals, challenges, and vision for 30-45 minutes.",
    },
    {
      step: "3",
      title: "Get Recommendations",
      description: "Receive personalized suggestions and a preliminary project outline.",
    },
    {
      step: "4",
      title: "Next Steps",
      description: "If we are a good fit, we will prepare a detailed proposal and timeline.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Free Consultation</span>
          </div>

          <div className="w-16 h-16 border-2 border-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:border-nexiler transition-all">
            <Calendar className="w-8 h-8 text-black" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Free <span className="text-nexiler">Strategy Session</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Book a free 30-minute consultation to discuss your project. No strings attached, just expert advice and honest recommendations.
          </p>

          <div className="flex items-center justify-center gap-6 pt-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-black" />
              <span>30-45 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-black" />
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Why Book a Consultation?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-300 hover:border-nexiler transition-all">
                <Check className="w-5 h-5 text-nexiler shrink-0" />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What to Expect</h2>
            <p className="text-base text-gray-700">Here's how the consultation process works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map((item, index) => (
              <div key={index} className="group p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center mb-4 group-hover:bg-nexiler group-hover:border-nexiler transition-all">
                  <span className="text-xl font-bold text-black">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Ready to Get Started?</h2>
            <p className="text-base text-gray-700 mb-6 max-w-2xl mx-auto">
              Book your free consultation now. No commitment, no pressure - just honest advice from experienced professionals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-nexiler text-black rounded-lg hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all font-semibold text-sm"
            >
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-lg font-bold text-black mb-2">Is the consultation really free?</h3>
              <p className="text-sm text-gray-700">Yes, absolutely! There's no cost and no obligation. We just want to understand your needs and see if we can help.</p>
            </div>

            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-lg font-bold text-black mb-2">How long does it take?</h3>
              <p className="text-sm text-gray-700">Typically 30-45 minutes, depending on the complexity of your project. We can schedule more time if needed.</p>
            </div>

            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-lg font-bold text-black mb-2">What should I prepare?</h3>
              <p className="text-sm text-gray-700">Just come with an open mind! It helps to have a general idea of your goals, budget, and timeline, but we can figure it out together.</p>
            </div>

            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-lg font-bold text-black mb-2">Will I receive a quote?</h3>
              <p className="text-sm text-gray-700">After understanding your needs, we'll provide a preliminary estimate. A detailed proposal follows if you decide to move forward.</p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default ConsultationPage;
