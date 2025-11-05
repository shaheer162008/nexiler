'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Shield, Lock, Eye, Server, AlertCircle, CheckCircle } from 'lucide-react';

const SecurityPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-4">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Security</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Your Security is
            <br />
            <span className="text-black">Our Priority</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
            We implement industry-leading security practices to protect your data and ensure the highest level of protection for your applications.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">SSL/TLS Encryption</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                All data transmitted between you and our servers is encrypted using industry-standard SSL/TLS protocols.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Data Protection</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Your data is stored securely with regular backups and encrypted at rest using AES-256 encryption.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Privacy First</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We never sell your data. Your privacy is protected and we comply with GDPR and CCPA regulations.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Secure Infrastructure</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our infrastructure is hosted on secure cloud platforms with 99.9% uptime SLA and DDoS protection.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">24/7 Monitoring</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Continuous monitoring and real-time alerts to detect and respond to security threats immediately.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Regular Audits</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Independent security audits and penetration testing to ensure the highest security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-2xl border border-gray-200 bg-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Compliance & Certifications</h2>
            <p className="text-base text-black mb-8">
              We maintain the highest industry standards and certifications
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-700">
              <div className="font-semibold">SOC 2 Type II</div>
              <div className="font-semibold">GDPR Compliant</div>
              <div className="font-semibold">CCPA Compliant</div>
              <div className="font-semibold">ISO 27001</div>
              <div className="font-semibold">PCI DSS</div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default SecurityPage;
