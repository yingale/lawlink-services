
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet';

const teamMembers = [
  {
    name: 'Ananya Sharma',
    title: 'Senior Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expertise: 'Corporate Law, Agreements',
    education: 'LLB, National Law School of India University',
    experience: '15+ years of experience',
    description: 'Ananya leads our corporate practice with extensive experience in drafting and negotiating complex business agreements. She has advised numerous multinational corporations on their legal strategy and documentation needs.'
  },
  {
    name: 'Vikram Mehta',
    title: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expertise: 'Dispute Resolution, Settlements',
    education: 'LLB, Delhi University',
    experience: '12+ years of experience',
    description: 'Vikram specializes in dispute resolution and out-of-court settlements. His strategic approach has helped clients resolve complex disputes efficiently, saving them time and resources.'
  },
  {
    name: 'Priya Patel',
    title: 'Legal Consultant',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expertise: 'Contract Law, Mediation',
    education: 'LLB, Mumbai University',
    experience: '8+ years of experience',
    description: 'Priya is an expert in contract law and mediation. She helps clients navigate complex contractual relationships and facilitates mediated solutions to business disagreements.'
  },
  {
    name: 'Rajiv Kumar',
    title: 'Senior Associate',
    image: 'https://images.unsplash.com/photo-1542190497-0cb529b707a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expertise: 'Real Estate Law, Documentation',
    education: 'LLB, Bangalore University',
    experience: '10+ years of experience',
    description: 'Rajiv specializes in real estate documentation and property-related legal matters. He has handled numerous property transactions and resolved complicated title disputes.'
  },
  {
    name: 'Meera Verma',
    title: 'Legal Associate',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expertise: 'Corporate Agreements, Compliance',
    education: 'LLB, Symbiosis Law School',
    experience: '5+ years of experience',
    description: 'Meera focuses on corporate agreements and compliance matters. She ensures that businesses maintain regulatory compliance while achieving their strategic objectives.'
  },
  {
    name: 'Arjun Singh',
    title: 'Legal Associate',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expertise: 'Commercial Contracts, Negotiation',
    education: 'LLB, Punjab University',
    experience: '7+ years of experience',
    description: 'Arjun specializes in commercial contracts and negotiation strategies. He has a strong track record of securing favorable terms for clients in business negotiations.'
  },
];

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Kavision Solutions</title>
        <meta name="description" content="Meet our experienced team of legal professionals dedicated to providing expert legal services across India." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-20 pb-10 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4 font-playfair">Meet Our Legal Experts</h1>
              <p className="text-gray-600 mb-6">A team of dedicated professionals working for your success</p>
              <p className="text-gray-700">
                Our team combines expertise, experience, and a client-centered approach to deliver exceptional legal services. Each member brings specialized knowledge in different areas of law to address your unique needs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg">
                  <div className="h-72 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-primary/70 font-medium">{member.title}</p>
                    <p className="text-gray-600 mt-2">{member.expertise}</p>
                    <div className="mt-4 space-y-2 text-sm text-gray-700">
                      <p>{member.education}</p>
                      <p>{member.experience}</p>
                    </div>
                    <p className="mt-4 text-gray-700 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 font-playfair">Join Our Team</h2>
              <p className="text-white/80 mb-8">
                We're always looking for talented legal professionals to join our growing team.
                If you're passionate about providing excellent legal services, we'd love to hear from you.
              </p>
              <a href="mailto:careers@kavisionsolutions.com" className="inline-block bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-medium">
                Send Us Your Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Team;
