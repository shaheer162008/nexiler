'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { CheckCircle, AlertCircle } from 'lucide-react';

const StatusPage = () => {
  const services = [
    { name: 'Website', status: 'operational', uptime: '99.99%' },
    { name: 'API Services', status: 'operational', uptime: '99.98%' },
    { name: 'Database', status: 'operational', uptime: '100%' },
    { name: 'Email Delivery', status: 'operational', uptime: '99.97%' },
    { name: 'CDN', status: 'operational', uptime: '100%' },
    { name: 'Payment Processing', status: 'operational', uptime: '99.99%' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">All Systems Operational</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            System Status
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-black max-w-2xl mx-auto leading-relaxed px-2">
            Real-time status and uptime information for all Nexiler services
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-2xl border border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-black">{service.name}</h3>
                      <p className="text-sm text-gray-600">Operational</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-black">{service.uptime}</p>
                    <p className="text-xs text-gray-600">Uptime (30 days)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime Stats */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl border border-gray-200 bg-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Overall Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold text-black mb-2">99.99%</p>
                <p className="text-sm text-gray-600">Uptime (Last 30 days)</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black mb-2">45ms</p>
                <p className="text-sm text-gray-600">Average Response Time</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-black mb-2">0</p>
                <p className="text-sm text-gray-600">Incidents This Month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default StatusPage;
