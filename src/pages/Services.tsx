
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText, Users, Scale, Gavel, Handshake, FileCheck, Building, Landmark } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet';

const servicesData = [
  {
    icon: FileText,
    title: 'Legal Agreements',
    description: 'Expertly drafted legal documents tailored to your specific requirements, ensuring your interests are protected.',
    details: 'Our team specializes in drafting various agreements including employment contracts, non-disclosure agreements, partnership agreements, and more.',
  },
  {
    icon: Handshake,
    title: 'Out-of-Court Settlements',
    description: 'Strategic negotiation and mediation services to resolve disputes without lengthy court proceedings.',
    details: 'We help parties find common ground through expert negotiation strategies, saving time and resources while maintaining relationships.',
  },
  {
    icon: Scale,
    title: 'Contract Review',
    description: 'Comprehensive analysis of agreements to identify risks and ensure favorable terms for your business or personal needs.',
    details: 'Our attorneys meticulously review contracts to identify potential legal issues, unfavorable terms, and suggest improvements to protect your interests.',
  },
  {
    icon: Users,
    title: 'Legal Consultation',
    description: 'Personalized advisory services providing clarity on legal matters with practical guidance for your situation.',
    details: 'Get expert advice on complex legal matters through one-on-one consultations with our experienced attorneys.',
  },
  {
    icon: Gavel,
    title: 'Dispute Resolution',
    description: 'Effective strategies to resolve conflicts through negotiation, mediation, or arbitration when necessary.',
    details: 'We offer alternative dispute resolution methods that are faster, less expensive, and more private than traditional litigation.',
  },
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'Thorough verification of legal documents to ensure compliance with relevant laws and regulations.',
    details: 'Our experts verify the authenticity and legality of documents, ensuring they meet all statutory requirements and industry standards.',
  },
  {
    icon: Building,
    title: 'Corporate Legal Services',
    description: 'Comprehensive legal support for businesses, from incorporation to day-to-day operations and compliance.',
    details: 'We provide legal guidance for corporate governance, regulatory compliance, and business transactions to help businesses operate smoothly.',
  },
  {
    icon: Landmark,
    title: 'Real Estate Documentation',
    description: 'Specialized services for property transactions, lease agreements, and property-related disputes.',
    details: 'Our team assists with drafting, reviewing, and negotiating real estate contracts, ensuring your property interests are protected.',
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Kavision Solutions</title>
        <meta name="description" content="Explore our comprehensive legal services including agreement drafting, settlement services, contract review, and legal consultation." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-20 pb-10 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4 font-playfair">Our Legal Services</h1>
              <p className="text-gray-600 mb-6">Comprehensive legal solutions tailored to your needs</p>
              <p className="text-gray-700">
                At Kavision Solutions, we provide a wide range of legal services with a focus on drafting agreements and facilitating settlements. Our team of experienced attorneys is dedicated to delivering exceptional results while protecting your interests.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all hover:border-primary/30">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      <service.icon size={24} />
                    </div>
                    <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    <p className="text-gray-700 text-sm mb-4">{service.details}</p>
                    <Button variant="outline" className="text-primary hover:bg-primary/10">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 font-playfair">Need Customized Legal Services?</h2>
              <p className="text-white/80 mb-8">
                Our team can create tailored legal solutions specific to your unique requirements.
                Contact us to discuss how we can assist with your particular legal needs.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Request a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
