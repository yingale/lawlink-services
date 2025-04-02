
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Kavision Solutions</title>
        <meta name="description" content="Learn about Kavision Solutions and our expert legal team providing specialized agreement drafting and settlement services across India." />
      </Helmet>
      <Navbar />
      <main>
        <section className="py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4 font-playfair">About Kavision Solutions</h1>
              <p className="text-gray-600">Where Words Meet Protection</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Kavision Solutions Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -z-10 w-full h-full bg-primary/20 rounded-lg top-4 left-4"></div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4 font-playfair">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2018, Kavision Solutions has established itself as a trusted legal service provider specializing in agreement drafting and out-of-court settlements across India.
                </p>
                <p className="text-gray-700 mb-4">
                  Our journey began with a simple mission: to provide accessible, high-quality legal services to businesses and individuals who need expert guidance with their agreements and settlements.
                </p>
                <p className="text-gray-700">
                  Over the years, we have grown our team of experienced legal professionals who are dedicated to delivering personalized solutions that address the unique needs of each client.
                </p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center font-playfair">Our Mission & Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To provide exceptional legal services that protect our clients' interests through expertly crafted agreements and effective settlement strategies.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the most trusted legal service provider in India, known for our integrity, expertise, and client-centered approach.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center font-playfair">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Integrity</h3>
                  <p className="text-gray-700">
                    We uphold the highest ethical standards in all our interactions and services.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in everything we do, from client service to legal documentation.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">Client Focus</h3>
                  <p className="text-gray-700">
                    We put our clients first, ensuring their needs and goals guide our services.
                  </p>
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

export default About;
