'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: 'Exceptional service and cutting-edge solutions. The AI automation tools they developed have streamlined our operations and saved us countless hours of manual work.',
      author: 'John Smith',
      position: 'CEO, Innovation Labs',
      avatar: 'J',
      rating: 5,
    },
    {
      text: 'Outstanding team that delivered beyond our expectations. Their web development expertise transformed our online presence and significantly increased our conversion rates.',
      author: 'Sarah Johnson',
      position: 'Marketing Director, TechCorp',
      avatar: 'S',
      rating: 5,
    },
    {
      text: 'Professional, responsive, and highly skilled. They built our mobile app from scratch and the results have been phenomenal. Highly recommend their services!',
      author: 'Michael Chen',
      position: 'Founder, StartupXYZ',
      avatar: 'M',
      rating: 5,
    },
  ];

  const stats = [
    { value: '100+', label: 'Happy Clients' },
    { value: '250+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Client Testimonials</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Clients
            <br />
            <span className="text-black">Say About Us</span>
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative mb-8">
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Testimonial Content */}
          <div className="p-8 sm:p-12 rounded-2xl bg-white border border-gray-300">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-center mb-8">
              <p className="text-base sm:text-lg text-black font-medium italic leading-relaxed">
                "{currentTestimonial.text}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-black">{currentTestimonial.avatar}</span>
              </div>
              <div className="text-left">
                <div className="text-base font-bold text-black">{currentTestimonial.author}</div>
                <div className="text-sm text-gray-600">{currentTestimonial.position}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-black mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold text-sm transition-colors inline-flex items-center gap-2">
            Schedule Free Consultation
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
