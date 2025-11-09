'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';

const CookieSettingsPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Cookie Settings</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Cookie <span className="text-nexiler">Preferences</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Manage your cookie preferences and understand how we use cookies
          </p>
        </div>
      </section>

      {/* Cookie Settings */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black mb-2">Essential Cookies</h3>
                <p className="text-sm text-gray-700">
                  These cookies are necessary for the website to function and cannot be switched off.
                </p>
              </div>
              <div className="ml-4">
                <div className="px-3 py-1 bg-nexiler-subtle text-black text-xs font-semibold rounded-full">
                  Always Active
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black mb-2">Analytics Cookies</h3>
                <p className="text-sm text-gray-700">
                  These cookies help us understand how visitors interact with our website.
                </p>
              </div>
              <div className="ml-4">
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" defaultChecked aria-label="Enable analytics cookies" />
                  <span className="absolute cursor-pointer inset-0 bg-gray-200 rounded-full peer-checked:bg-nexiler transition-colors"></span>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black mb-2">Marketing Cookies</h3>
                <p className="text-sm text-gray-700">
                  These cookies are used to track visitors across websites to display relevant ads.
                </p>
              </div>
              <div className="ml-4">
                <label className="relative inline-block w-12 h-6">
                  <input type="checkbox" className="sr-only peer" aria-label="Enable marketing cookies" />
                  <span className="absolute cursor-pointer inset-0 bg-gray-200 rounded-full peer-checked:bg-nexiler transition-colors"></span>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <button className="px-6 py-3 bg-nexiler text-black rounded-lg hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all font-semibold text-sm">
              Save Preferences
            </button>
            <button className="px-6 py-3 bg-white border-2 border-gray-300 text-black rounded-lg hover:border-nexiler transition-all font-semibold text-sm">
              Accept All
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default CookieSettingsPage;
