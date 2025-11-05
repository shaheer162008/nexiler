'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const packagesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Clear timeouts on component unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (packagesTimeoutRef.current) clearTimeout(packagesTimeoutRef.current);
    };
  }, []);

  // Services Dropdown Handlers
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  // Packages Dropdown Handlers
  const handlePackagesMouseEnter = () => {
    if (packagesTimeoutRef.current) clearTimeout(packagesTimeoutRef.current);
    setIsPackagesOpen(true);
  };

  const handlePackagesMouseLeave = () => {
    packagesTimeoutRef.current = setTimeout(() => {
      setIsPackagesOpen(false);
    }, 200);
  };

  // Services Data - Multi-column like Notion
  const servicesData = {
    teams: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
      { name: 'AI & Automation', href: '/services/ai-automation' },
      { name: 'E-Commerce', href: '/services/e-commerce' },
    ],
    teamSize: [
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { name: 'Data Solutions', href: '/services/data-solutions' },
      { name: 'Digital Marketing', href: '/services/digital-marketing' },
      { name: 'Custom Solutions', href: '/services/custom-solutions' },
    ],
  };

  // Packages Data
  const packagesData = [
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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
              className="px-3 py-1.5 text-sm text-black font-semibold hover:scale-110 rounded-md transition-transform"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link 
                href="/services"
                className="px-3 py-1.5 text-sm text-black font-semibold hover:scale-110 rounded-md flex items-center gap-1 transition-transform"
              >
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Services Mega Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-xl p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                    
                      <div className="space-y-0.5">
                        {servicesData.teams.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-2 py-1.5 text-sm text-black font-medium hover:scale-105 rounded transition-transform origin-left"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>

                      <div className="space-y-0.5">
                        {servicesData.teamSize.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-2 py-1.5 text-sm text-black font-medium hover:scale-105 rounded transition-transform origin-left"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Packages Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handlePackagesMouseEnter}
              onMouseLeave={handlePackagesMouseLeave}
            >
              <Link 
                href="/packages"
                className="px-3 py-1.5 text-sm text-black font-semibold hover:scale-110 rounded-md flex items-center gap-1 transition-transform"
              >
                Packages
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isPackagesOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Packages Dropdown */}
              {isPackagesOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-xl p-2">
                  <div className="space-y-0.5">
                    {packagesData.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-black font-medium hover:scale-105 rounded transition-transform origin-left"
                        onClick={() => setIsPackagesOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Regular Navigation Links */}
            {navigationLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="px-3 py-1.5 text-sm text-black font-semibold hover:scale-110 rounded-md transition-transform"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side - CTA Buttons & Mobile Menu */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/packages" className="px-3 py-1.5 text-sm bg-white border border-gray-200 text-black hover:bg-gray-50 font-semibold rounded-md transition-colors">
                Packages
              </Link>
              <Link href="/consultation" className="px-4 py-1.5 text-sm bg-black hover:bg-gray-800 text-white rounded-md font-semibold transition-colors">
                Free Consultation
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
        <div className="lg:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-3.5rem)] overflow-y-auto">
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
              <Link
                href="/services"
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-black font-semibold hover:bg-gray-100 rounded-md"
                onClick={(e) => {
                  if (isServicesOpen) {
                    e.preventDefault();
                    setIsServicesOpen(false);
                  }
                }}
              >
                Services
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  className="p-1"
                  aria-label="Toggle services menu"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </Link>
              {isServicesOpen && (
                <div className="mt-1 pl-4 space-y-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase px-3 py-1">Teams</p>
                  {servicesData.teams.map((item) => (
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
                  <p className="text-xs font-semibold text-gray-500 uppercase px-3 py-1 mt-2">Team Size</p>
                  {servicesData.teamSize.map((item) => (
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
              <Link
                href="/packages"
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-black font-semibold hover:bg-gray-100 rounded-md"
                onClick={(e) => {
                  if (isPackagesOpen) {
                    e.preventDefault();
                    setIsPackagesOpen(false);
                  }
                }}
              >
                Packages
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsPackagesOpen(!isPackagesOpen);
                  }}
                  className="p-1"
                  aria-label="Toggle packages menu"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isPackagesOpen ? 'rotate-180' : ''}`} />
                </button>
              </Link>
              {isPackagesOpen && (
                <div className="mt-1 pl-4 space-y-1">
                  {packagesData.map((item) => (
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
                href="/packages"
                className="block w-full text-center px-4 py-2 text-sm text-black font-semibold bg-gray-100 hover:bg-gray-200 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                View Packages
              </Link>
              <Link
                href="/consultation"
                className="block w-full text-center px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
