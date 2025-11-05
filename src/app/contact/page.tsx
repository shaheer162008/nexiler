'use client';

import React from 'react';
import ContactHero from '@/components/contact/contact_hero';
import ContactInfo from '@/components/contact/contact_info';
import ContactForm from '@/components/contact/contact_form';
import Newsletter from '@/components/newsletter';

const ContactPage = () => {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Newsletter />
    </main>
  );
};

export default ContactPage;
