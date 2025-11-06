'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo & Social Links */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/nexiler.png" 
                alt="Nexiler" 
                width={400} 
                height={110} 
                className="h-auto w-32"
              />
            </Link>
            <div className="flex items-center gap-3 mt-4">
              <Link href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="text-gray-600 hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-black transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Status
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Terms & privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-sm text-gray-600 hover:text-black transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services/e-commerce" className="text-sm text-gray-600 hover:text-black transition-colors">
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Help centre
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3">Packages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/packages" className="text-sm text-gray-600 hover:text-black transition-colors">
                  View Packages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Custom Package
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2025 Nexiler, Inc.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/cookie-settings" className="text-sm text-gray-600 hover:text-black transition-colors">
              Cookie settings
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-black transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
