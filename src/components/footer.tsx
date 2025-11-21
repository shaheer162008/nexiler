'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo & Social Links */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 transition-transform hover:scale-105 duration-300">
              <Image 
                src="/nexiler.jpg" 
                alt="Nexiler" 
                width={400} 
                height={110} 
                className="h-auto w-32"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Transforming ideas into digital reality with cutting-edge solutions.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Link href="https://instagram.com" target="_blank" className="w-12 h-12 border-gray-300 flex items-center justify-center text-gray-600 hover:border-nexiler hover:text-nexiler hover:bg-nexiler-subtle transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="w-12 h-12 border-gray-300 flex items-center justify-center text-gray-600 hover:border-nexiler hover:text-nexiler hover:bg-nexiler-subtle transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="w-12 h-12 border-gray-300 flex items-center justify-center text-gray-600 hover:border-nexiler hover:text-nexiler hover:bg-nexiler-subtle transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="w-12 h-12 border-gray-300 flex items-center justify-center text-gray-600 hover:border-nexiler hover:text-nexiler hover:bg-nexiler-subtle transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="w-12 h-12 border-gray-300 flex items-center justify-center text-gray-600 hover:border-nexiler hover:text-nexiler hover:bg-nexiler-subtle transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Security
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Status
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Terms & privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/web-development" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/e-commerce" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Help centre
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Community
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wider">Packages</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/packages" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  View Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Custom Package
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-nexiler transition-colors inline-flex items-center gap-1 group">
                  <span className="w-0 h-0.5 bg-nexiler group-hover:w-3 transition-all duration-300"></span>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 <span className="text-nexiler font-semibold">Nexiler</span>, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/cookie-settings" className="text-sm text-gray-600 hover:text-nexiler transition-colors">
              Cookie settings
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-nexiler transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
