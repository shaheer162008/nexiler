'use client';

import React from 'react';
import Newsletter from '@/components/newsletter';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CareersPage = () => {
  const openings = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build beautiful user interfaces with React and Next.js',
    },
    {
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Design and build scalable backend systems',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create stunning user experiences',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and CI/CD pipelines',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead product strategy and development',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive growth through digital marketing',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-4">
            <div className="w-2 h-2 bg-nexiler rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Join Our Team</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight px-2">
            Build Your Career
            <br />
            <span className="text-nexiler">With Nexiler</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-2">
            Join a team of passionate innovators building the future of digital solutions. We're always looking for talented individuals to join our mission.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Nexiler?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-xl font-bold text-black mb-3">Flexible Work</h3>
              <p className="text-sm text-gray-700">Work remotely or from our office. We believe in work-life balance.</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-xl font-bold text-black mb-3">Competitive Pay</h3>
              <p className="text-sm text-gray-700">Industry-leading salaries and equity options for all team members.</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
              <h3 className="text-xl font-bold text-black mb-3">Growth Opportunities</h3>
              <p className="text-sm text-gray-700">Continuous learning budget and clear career progression paths.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Open Positions</h2>
            <p className="text-base text-gray-700">Join us in building amazing products</p>
          </div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="p-6 rounded-2xl border-2 border-gray-300 bg-white hover:border-nexiler transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">{job.title}</h3>
                    <p className="text-sm text-gray-700 mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-nexiler text-black rounded-lg hover:shadow-[0_0_20px_rgba(135,237,130,0.4)] transition-all font-semibold text-sm whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
};

export default CareersPage;
