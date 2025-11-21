'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Dropdown from './ui/dropdown';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '../../firebase/init';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

const auth = getAuth(app)

useEffect(() => {

if(auth){
  const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
    setCurrentUser(user);
  })
  return () => unsubscribe()
}
},[auth]);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Services Data
  const servicesItems = [
    { name: 'Services', href: '/services' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'AI & Automation', href: '/services/ai-automation' },
    { name: 'E-Commerce', href: '/services/e-commerce' },
    { name: 'Design & Branding', href: '/services/design-branding' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Data Solutions', href: '/services/data-solutions' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
    { name: 'Custom Solutions', href: '/services/custom-solutions' },
  ];

  // Packages Data
  const packagesItems = [
    { name: 'View All Packages', href: '/packages' },
    { name: 'Custom Package', href: '/contact' },
    { name: 'Free Consultation', href: '/consultation' },
  ];

  const navigationLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
            <Image 
              src="/nexiler.png" 
              alt="Nexiler" 
              width={400} 
              height={110} 
              className="h-auto w-32"
            />
          </Link>

          {/* Desktop Navigation - Absolutely Centered */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1">
            {/* Home Link */}
            <Link 
              href="/" 
              className="relative px-3 py-1.5 text-sm text-black font-semibold rounded-md transition-all group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexiler group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <Dropdown 
              trigger={{ label: 'Services', href: '/services' }}
              items={servicesItems}
              columns={2}
            />

            {/* Packages Dropdown */}
            <Dropdown 
              trigger={{ label: 'Packages', href: '/packages' }}
              items={packagesItems}
              columns={1}
            />

            {/* Portfolio Link */}
            <Link 
              href="/portfolio" 
              className="relative px-3 py-1.5 text-sm text-black font-semibold rounded-md transition-all group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexiler group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Pricing Link */}
            <Link 
              href="/pricing" 
              className="relative px-3 py-1.5 text-sm text-black font-semibold rounded-md transition-all group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexiler group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Blogs Link */}
            <Link 
              href="/blogs" 
              className="relative px-3 py-1.5 text-sm text-black font-semibold rounded-md transition-all group"
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexiler group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* About Link */}
            <Link 
              href="/about" 
              className="relative px-3 py-1.5 text-sm text-black font-semibold rounded-md transition-all group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexiler group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Contact Link */}
            <Link 
              href="/contact" 
              className="relative px-3 py-1.5 text-sm text-black font-semibold rounded-md transition-all group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexiler group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Right Side - CTA Buttons & Mobile Menu */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden lg:flex items-center gap-2.5">
              <Link href="/packages" className="group relative px-4 py-1.5 bg-white border-2 border-gray-300 text-black rounded-lg font-semibold text-sm transition-all duration-300 hover:border-nexiler hover:shadow-md">
                <span className="relative z-10 group-hover:text-nexiler transition-colors duration-300">Packages</span>
              </Link>
              {/* <Link href="/consultation" className="group relative px-4 py-1.5 bg-nexiler text-white rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(135,237,130,0.3)]">
                <span className="relative z-10">Free Consultation</span>
                <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link> */}

          <Link href={currentUser?'/console':'account'}className="group relative px-3 py-1.5 bg-nexiler text-white rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_16px_rgba(135,237,130,0.25)]">
                <span className="relative z-10">{currentUser?'Account Console':'My Account'}</span>
                <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white fixed inset-0 top-14 overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {/* Home Link */}
            <Link 
              href="/" 
              className="block px-3 py-2 text-sm text-black font-semibold hover:bg-gray-100 rounded-md" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-black font-semibold hover:bg-gray-100 rounded-md"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="mt-1 pl-4 space-y-1">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-black font-medium hover:bg-gray-100 rounded-md"
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Packages Accordion */}
            <div>
              <button
                onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-black font-semibold hover:bg-gray-100 rounded-md"
              >
                Packages
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPackagesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isPackagesOpen && (
                <div className="mt-1 pl-4 space-y-1">
                  {packagesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-black font-medium hover:bg-gray-100 rounded-md"
                      onClick={() => {
                        setIsOpen(false);
                        setIsPackagesOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Mobile Navigation Links */}
            {navigationLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="block px-3 py-2 text-sm text-black font-semibold hover:bg-gray-100 rounded-md" 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-3 border-t border-gray-200 mt-3 space-y-2 pb-2">
              <Link
                href={currentUser?'/console':'account'}
                className="block w-full text-center px-4 py-2.5 text-sm text-black font-semibold bg-white border border-gray-300 rounded-xl hover:border-nexiler transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
               {currentUser?'Account Console':'My Account'}
              </Link>
              <Link
                href="/packages"
                className="group relative block w-full text-center px-4 py-2.5 text-sm text-black font-semibold bg-white border-2 border-gray-300 hover:border-nexiler rounded-xl transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="group-hover:text-nexiler transition-colors duration-300">View Packages</span>
              </Link>
              <Link
                href="/consultation"
                className="group relative block w-full text-center px-4 py-2.5 text-sm bg-nexiler text-white rounded-xl font-semibold overflow-hidden transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">Free Consultation</span>
                <div className="absolute inset-0 bg-nexiler-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>

              {/* Login & Sign Up (mobile) */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
