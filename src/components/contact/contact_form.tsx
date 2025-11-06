'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Select from '../ui/select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Service options - matching navbar services
  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-apps', label: 'Mobile Apps' },
    { value: 'ai-automation', label: 'AI & Automation' },
    { value: 'e-commerce', label: 'E-Commerce' },
    { value: 'design-branding', label: 'Design & Branding' },
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'data-solutions', label: 'Data Solutions' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'custom-solutions', label: 'Custom Solutions' },
    { value: 'other', label: 'Other' },
  ];

  // Budget options
  const budgetOptions = [
    { value: '<1k', label: 'Less than $1,000' },
    { value: '1k-5k', label: '$1,000 - $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k+', label: '$10,000+' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-gray-400 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-black mb-2">
                Service Needed *
              </label>
              <Select
                id="service"
                name="service"
                value={formData.service}
                onChange={(value) => handleSelectChange('service', value)}
                options={serviceOptions}
                placeholder="Select a service"
                required
              />
            </div>

            {/* Budget */}
            <div className="md:col-span-2">
              <label htmlFor="budget" className="block text-sm font-semibold text-black mb-2">
                Budget Range
              </label>
              <Select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={(value) => handleSelectChange('budget', value)}
                options={budgetOptions}
                placeholder="Select budget range"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-400 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-gray-300 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
