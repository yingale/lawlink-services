
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const benefits = [
    'Expert team of experienced attorneys',
    'Specialized in agreement drafting and settlements',
    'Client-focused approach with personalized attention',
    'Transparent fee structure with no hidden costs',
    'Proven track record with satisfied clients across India'
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Legal professionals working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 w-full h-full bg-[#4299e1]/20 rounded-lg top-4 left-4"></div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-[#4299e1]" size={24} />
              <h2 className="text-lg font-medium italic">Where Words Meet Protection</h2>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1629] mb-6 font-playfair">About Kavision Solutions</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2018, Kavision Solutions has established itself as a trusted legal service provider specializing in agreement drafting and out-of-court settlements across India.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of experienced attorneys brings diverse expertise and a deep understanding of Indian legal frameworks to provide practical solutions tailored to each client's unique needs.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-[#4299e1] flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-[#0A1629] hover:bg-[#0A1629]/90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
