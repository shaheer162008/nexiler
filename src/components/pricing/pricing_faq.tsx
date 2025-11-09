'use client';

import React from 'react';

const PricingFAQ = () => {
  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes! You can upgrade at any time during the project. Contact us to discuss plan changes.',
    },
    {
      question: 'What happens after the support period ends?',
      answer: 'You can purchase extended support packages or we offer maintenance plans starting at $99/month.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a money-back guarantee if you\'re not satisfied with our initial concepts within the first week.',
    },
    {
      question: 'How long does development take?',
      answer: 'Starter: 2-3 weeks, Professional: 4-6 weeks, Enterprise: 8-12 weeks. Timeline varies based on complexity.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments.',
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Absolutely! We\'re happy to sign NDAs and confidentiality agreements to protect your project.',
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-700">
            Have questions? We've got answers.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
