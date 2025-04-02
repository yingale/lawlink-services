
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-[#0A1629] text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Feather className="text-[#f48fb1]" size={32} />
            <h2 className="text-lg md:text-xl font-medium italic">Where Words Meet Protection</h2>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-playfair">
            Expert Legal Solutions for Your Success
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Specialized in legal agreements and out-of-court settlements across India. 
            We provide strategic legal guidance to protect your interests.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#f48fb1] hover:bg-[#f48fb1]/90 text-[#0A1629] font-medium">
              Book a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services" className="flex items-center gap-2">
                Our Services <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
