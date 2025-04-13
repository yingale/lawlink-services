
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const teamMembers = [
  {
    name: 'Pritam Ohol',
    title: 'Advocate High Court',
    expertise: '15+ years of experience',
    education: 'LLB, National Law School of India University',
    description: 'Pritam leads our corporate practice with extensive experience in drafting and negotiating complex business agreements. She has advised numerous multinational corporations on their legal strategy and documentation needs.'

  },
  {
    name: 'Sumit Kedare',
    title: 'Managing Partner',
    expertise: '12+ years of experience',
    education: 'LLB, National Law School of India University',
    description: 'Sumit specializes in dispute resolution and out-of-court settlements. His strategic approach has helped clients resolve complex disputes efficiently, saving them time and resources.'


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
              <Card key={index} className="border shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 bg-primary/10">
                      <AvatarFallback className="text-primary font-medium">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                      <p className="text-primary/70 font-medium">{member.title}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <p>{member.education}</p>
                    <p>{member.expertise}</p>
                  </div>
                  <p className="mt-4 text-gray-700 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*<section className="py-16 bg-primary text-white">
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
      </section>*/}
    </main>
    <Footer />
  </>
  );
};

export default Team;
