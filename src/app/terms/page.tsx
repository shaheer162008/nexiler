'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';

const TermsPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Legal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Terms & Privacy
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
            Last updated: November 5, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Terms of Service */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold text-black mb-6">Terms of Service</h2>
            
            <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-black mb-3">1. Acceptance of Terms</h3>
                <p>By accessing and using Nexiler's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">2. Use of Services</h3>
                <p>You agree to use our services only for lawful purposes and in accordance with these terms. You must not use our services in any way that breaches any applicable local, national, or international law or regulation.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">3. Intellectual Property</h3>
                <p>All content, features, and functionality of our services are owned by Nexiler and are protected by international copyright, trademark, and other intellectual property laws.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">4. Payment Terms</h3>
                <p>All fees are quoted in USD and are non-refundable unless otherwise stated. Payment is due as per the agreed terms in your project contract or subscription plan.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">5. Limitation of Liability</h3>
                <p>Nexiler shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services.</p>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold text-black mb-6">Privacy Policy</h2>
            
            <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-black mb-3">1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you create an account, submit a contact form, or communicate with us. This may include your name, email address, phone number, and project details.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">2. How We Use Your Information</h3>
                <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, to process your requests, and to send you technical notices and support messages.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">3. Information Sharing</h3>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, conducting business activities, or servicing you.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">4. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">5. Your Rights</h3>
                <p>You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. Contact us to exercise these rights.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">6. Cookies</h3>
                <p>We use cookies and similar tracking technologies to track activity on our services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default TermsPage;
