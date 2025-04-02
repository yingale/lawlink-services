
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-4 py-3 md:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-primary font-playfair text-2xl md:text-3xl font-bold">LawLink</span>
          <span className="text-secondary font-playfair text-2xl md:text-3xl font-bold">India</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-primary font-medium transition-all">Home</Link>
          <Link to="/services" className="text-gray-800 hover:text-primary font-medium transition-all">Services</Link>
          <Link to="/about" className="text-gray-800 hover:text-primary font-medium transition-all">About Us</Link>
          <Link to="/team" className="text-gray-800 hover:text-primary font-medium transition-all">Our Team</Link>
          <Link to="/contact" className="text-gray-800 hover:text-primary font-medium transition-all">Contact</Link>
        </div>
        
        <div className="hidden md:flex items-center">
          <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
            <Phone size={18} />
            <span>Contact Now</span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            <Link to="/" className="text-gray-800 hover:text-primary py-2 font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-gray-800 hover:text-primary py-2 font-medium" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="text-gray-800 hover:text-primary py-2 font-medium" onClick={toggleMenu}>About Us</Link>
            <Link to="/team" className="text-gray-800 hover:text-primary py-2 font-medium" onClick={toggleMenu}>Our Team</Link>
            <Link to="/contact" className="text-gray-800 hover:text-primary py-2 font-medium" onClick={toggleMenu}>Contact</Link>
            <Button className="bg-primary hover:bg-primary/90 text-white w-full flex items-center justify-center gap-2 mt-2">
              <Phone size={18} />
              <span>Contact Now</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
