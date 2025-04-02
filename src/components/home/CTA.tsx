
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-[#0A1629] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Scale className="text-[#4299e1]" size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-playfair">
            Where Words Meet Protection
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Our team of experienced attorneys is just a call away. Schedule a consultation today to discuss your legal needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#4299e1] hover:bg-[#4299e1]/90 text-white font-medium">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
