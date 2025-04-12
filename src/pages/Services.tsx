
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { FileText, Users, Home, Building, FileCheck, Heart, FileSignature, Calendar, Landmark, Scale, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    icon: Heart,
    title: 'Personal & Family Matters',
    description: 'Legal assistance for all personal and family-related legal issues.',
    details: [
      'Civil Matters',
      'Family Matters',
      'Succession Certificate',
      'Legal Heirship Certificate',
      'Criminal Matters'
    ],
  },
  {
    icon: Building,
    title: 'Co-operative & Society Matters',
    description: 'Expert guidance for society formation and management legal requirements.',
    details: [
      'Co-operative Society Matters',
      'Formation of Society',
      'Conveyance Deed / Deemed Conveyance',
      'Search Reports'
    ],
  },
  {
    icon: FileText,
    title: 'Marriage & Deed Services',
    description: 'Professional services for marriage registration and various legal deeds.',
    details: [
      'Marriage Registration / Marriage Certificate',
      'Agreement for Sale',
      'Sale Deed',
      'Gift Deed',
      'Release Deed',
      'Correction Deed',
      'Partnership Deed',
      'MOU (Memorandum of Understanding)',
      'Will',
      'Power of Attorney'
    ],
  },
  {
    icon: FileCheck,
    title: 'Other Legal Services',
    description: 'Additional legal services to meet your various documentation needs.',
    details: [
      'Affidavit and Declaration',
      'E-Registration (Leave and License Agreement)',
      'Flat / Shop / Office registration online'
    ],
  },
  {
    icon: FileSignature,
    title: 'All Legal Drafting',
    description: 'Professional drafting of all types of legal documents tailored to your requirements.',
    details: [
      'Contracts and Agreements',
      'Legal Notices',
      'Petitions',
      'Applications',
      'Customized Legal Documents'
    ],
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Kavision Solutions</title>
        <meta name="description" content="Explore our comprehensive legal services including personal and family matters, co-operative society services, marriage and deed services, and more." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-20 pb-10 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4 font-playfair">Our Legal Services</h1>
              <p className="text-gray-600 mb-6">Comprehensive legal solutions tailored to your needs</p>
              <p className="text-gray-700">
                At Kavision Solutions, we provide a wide range of legal services covering personal matters, society issues, documentation services, and more. Our team of experienced attorneys is dedicated to delivering exceptional results while protecting your interests.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <h4 className="font-medium text-sm mb-2">Services Include:</h4>
                    <ul className="text-gray-700 text-sm space-y-1 list-disc pl-4 mb-4">
                      {service.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
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
              <p className="text-white/80 mb-6">
                Our team can create tailored legal solutions specific to your unique requirements.
                Contact us to discuss how we can assist with your particular legal needs.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>info@kavisionsolutions.com</span>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Request a Consultation</Link>
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
