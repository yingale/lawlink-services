
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Team from '@/components/home/Team';
import Testimonials from '@/components/home/Testimonials';
import ContactInfo from '@/components/home/Contact';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <ContactInfo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
