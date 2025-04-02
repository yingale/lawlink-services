
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Ananya Sharma',
    title: 'Senior Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expertise: 'Corporate Law, Agreements',
  },
  {
    name: 'Vikram Mehta',
    title: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expertise: 'Dispute Resolution, Settlements',
  },
  {
    name: 'Priya Patel',
    title: 'Legal Consultant',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    expertise: 'Contract Law, Mediation',
  },
];

const Team = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Legal Experts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced attorneys brings diverse expertise to deliver exceptional legal services tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
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
                <p className="text-secondary font-medium">{member.title}</p>
                <p className="text-gray-600 mt-2">{member.expertise}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link to="/team" className="text-primary hover:text-secondary font-medium">
                  View Profile
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/team">View Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
