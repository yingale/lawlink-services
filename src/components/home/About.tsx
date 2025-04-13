
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const benefits = [
    'Team of expert legal professionals',
    'Specialization in legal drafting and documentation',
    'Transparent and affordable fee structure',
    'Personalized attention and hassle-free service',
    'Trusted by clients across India'
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/uploads/hammer.jpeg" 
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
            Kavision Solutions was founded in 2022 with a clear mission — to simplify legal processes and provide accessible, reliable, and client-focused legal services across India.
            </p>
            <p className="text-gray-700 mb-6">
            We specialize in agreement drafting, property documentation, and out-of-court settlements, offering practical legal solutions with precision and integrity. Our team of experienced advocates and legal consultants brings a deep understanding of Indian law, enabling us to handle complex legal matters efficiently.
            </p>
            <p className="text-gray-700 mb-6">
            From family and civil disputes to property deeds, society formation, e-registrations, and affidavits, we offer a wide range of services tailored to individual, commercial, and co-operative needs.

</p>
            <div className="space-y-3 mb-8">
            
            <h2 className="text-lg font-medium italic">What Sets Us Apart</h2>

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
