'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@nexiler.com',
      link: 'mailto:hello@nexiler.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA, USA',
      link: null,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Fri: 9AM - 6PM PST',
      link: null,
    },
  ];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            const content = (
              <>
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">{detail.title}</h3>
                <p className="text-base font-semibold text-black">{detail.value}</p>
              </>
            );

            return (
              <div key={index} className="p-6 rounded-2xl border border-gray-400 bg-white text-center flex flex-col items-center">
                {detail.link ? (
                  <a href={detail.link} className="block hover:opacity-80 transition-opacity">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
