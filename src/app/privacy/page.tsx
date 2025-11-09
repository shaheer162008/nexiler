'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';

const PrivacyPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Privacy Policy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Privacy <span className="text-nexiler">Policy</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Last updated: November 5, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
            <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
                <p>
                  Nexiler, Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">1. Information We Collect</h3>
                <p className="mb-3">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Company information and job title</li>
                  <li>Project details and requirements</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">2. How We Use Your Information</h3>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">3. Information Sharing and Disclosure</h3>
                <p className="mb-3">We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With your consent or at your direction</li>
                  <li>In connection with a business transaction (merger, sale, etc.)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">4. Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">5. Your Rights</h3>
                <p className="mb-3">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your information</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">6. Cookies and Tracking</h3>
                <p>
                  We use cookies and similar tracking technologies to collect and track information about your browsing activities. You can control cookies through your browser settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">7. International Data Transfers</h3>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">8. Children's Privacy</h3>
                <p>
                  Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">9. Changes to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-black mb-3">10. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@nexiler.com
                  <br />
                  Address: San Francisco, CA, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default PrivacyPage;
