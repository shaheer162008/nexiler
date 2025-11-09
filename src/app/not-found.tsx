import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white pt-20">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Text */}
        <div className="space-y-4">
          <h1 className="text-[150px] sm:text-[200px] font-bold text-black leading-none">
            404
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Page Not Found</span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Oops! This Page Doesn't Exist
          </h2>
          <p className="text-base text-gray-600 max-w-md mx-auto">
            The page you're looking for might have been moved, deleted, or never existed in the first place.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link 
            href="/"
            className="px-6 py-3 bg-nexiler text-black rounded-lg font-semibold text-sm hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all inline-flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link 
            href="/services"
            className="px-6 py-3 bg-white border-2 border-gray-300 text-black rounded-lg font-semibold text-sm hover:border-nexiler transition-all inline-flex items-center gap-2"
          >
            <Search className="h-4 w-4" />
            Browse Services
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-8">
          <p className="text-sm text-gray-600 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/portfolio" className="text-sm text-black hover:underline font-medium">
              Portfolio
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/pricing" className="text-sm text-black hover:underline font-medium">
              Pricing
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/about" className="text-sm text-black hover:underline font-medium">
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-sm text-black hover:underline font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
