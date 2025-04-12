
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const team = [
  {
    name: 'Ananya Sharma',
    title: 'Senior Partner',
    expertise: 'Corporate Law, Agreements',
  },
  {
    name: 'Vikram Mehta',
    title: 'Managing Partner',
    expertise: 'Dispute Resolution, Settlements',
  },
  {
    name: 'Priya Patel',
    title: 'Legal Consultant',
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
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
                    <p className="text-secondary font-medium">{member.title}</p>
                  </div>
                </div>
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
