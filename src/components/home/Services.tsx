
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Scale, Gavel, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: FileText,
    title: 'Legal Agreements',
    description: 'Expertly drafted legal documents tailored to your specific requirements, ensuring your interests are protected.',
  },
  {
    icon: Handshake,
    title: 'Out-of-Court Settlements',
    description: 'Strategic negotiation and mediation services to resolve disputes without lengthy court proceedings.',
  },
  {
    icon: Scale,
    title: 'Contract Review',
    description: 'Comprehensive analysis of agreements to identify risks and ensure favorable terms for your business or personal needs.',
  },
  {
    icon: Users,
    title: 'Legal Consultation',
    description: 'Personalized advisory services providing clarity on legal matters with practical guidance for your situation.',
  },
  {
    icon: Gavel,
    title: 'Dispute Resolution',
    description: 'Effective strategies to resolve conflicts through negotiation, mediation, or arbitration when necessary.',
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1629] mb-4 font-playfair">Our Legal Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive legal solutions with a focus on drafting agreements and facilitating settlements outside the courtroom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all hover:border-[#4299e1]">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-[#0A1629]/10 text-[#0A1629] rounded-full flex items-center justify-center mb-4">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <Link to="/services" className="text-[#0A1629] hover:text-[#4299e1] font-medium inline-flex items-center transition-colors">
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-[#0A1629] hover:bg-[#0A1629]/90">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
