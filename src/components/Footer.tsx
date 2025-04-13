
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Link to="/" className="flex items-center">
                <span className="text-white font-playfair text-2xl font-bold">Kavision</span> &nbsp;
                <span className="text-secondary font-playfair text-2xl font-bold">Solution</span>
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Providing expert legal services with a focus on legal agreements and out-of-court settlements throughout India.
            </p>
            {/*<div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
             
            </div>*/}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-secondary transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Personal & Family Matters</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Co-operative & Society Matters</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Marriage & Deed Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Other Legal Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">All Legal Drafting</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-secondary" />
                <p className="text-gray-300">Office No. 9, Sai Vitthal Plaza, Dr. Babasaheb Ambedkar Chowk, Lodha Heaven, Nilje, Dombivali - 421204</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-secondary" />
                <p className="text-gray-300"><a href='tel:+91 93262 68321'>+91 93262 68321</a> / <a href='tel:+91 95945 58335'>+91 95945 58335</a></p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-secondary" />
                <p className="text-gray-300"><a href='mailto:kavisionsolution@gmail.com'>kavisionsolution@gmail.com</a> / <a href='mailto:oholadv@gmail.com'>oholadv@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Kavision Solution. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Developed and maintained by <a href="https://www.greenthread.in/" target='_blank'>Greenthread LLP</a>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-secondary text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;