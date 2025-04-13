
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Kavision Solutions</title>
        <meta name="description" content="Get in touch with Kavision Solutions for expert legal services. We're here to help with your agreement drafting and settlement needs." />
      </Helmet>
      <Navbar />
      <main>
        <section className="pt-20 pb-10 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4 font-playfair">Contact Us</h1>
              <p className="text-gray-600 mb-6">We're here to assist with your legal needs</p>
              <p className="text-gray-700">
                Whether you have a question about our services, need legal assistance, or want to schedule a consultation, our team is ready to help. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6 font-playfair">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  Fill out the form below, and one of our representatives will get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="Your email address" required />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                    <select 
                      id="service" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="agreements">Personal & Family Matters</option>
                      <option value="settlements">Co-operative & Society Matters</option>
                      <option value="review">Marriage & Deed Services</option>
                      <option value="consultation">Other Legal Services</option>
                      <option value="dispute">All Legal Drafting</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <Textarea id="message" placeholder="Please describe your requirements..." rows={5} required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6 font-playfair">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Office Address</h3>
                        <p className="text-gray-600">
                        Office No. 9, Sai Vitthal Plaza,<br /> Dr. Babasaheb Ambedkar Chowk, <br />Lodha Heaven, Nilje,<br /> Dombivali - 421204
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Phone Numbers</h3>

                        <p className="text-gray-600">
                          Adv. Pritam Ohol: <a href='tel:+91 93262 68321'>+91 93262 68321</a> <br />
                          Sumit Kedare: <a href='tel:+91 95945 58335'>+91 95945 58335</a>
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Email Addresses</h3>
                        <p className="text-gray-600">
                        <a href='mailto:kavisionsolution@gmail.com'>kavisionsolution@gmail.com</a><br />
                        <a href='mailto:oholadv@gmail.com'>oholadv@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Saturday: 10:00 AM - 9:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="rounded-lg overflow-hidden h-80 shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7571457081663!2d73.07045117510796!3d19.162104935803793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfeff06f331b%3A0x694d8b7dc8d7b210!2sAmbedkar%20chowk%2C%20i%2013%2C%20Mumbai%2C%20Nilje%20Gaon%2C%20Maharashtra%20421204!5e0!3m2!1sen!2sin!4v1744436558059!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    title="Kavision Solutions office location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
