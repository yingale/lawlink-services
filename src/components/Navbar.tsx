
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
    <nav className="sticky top-0 z-50 bg-[#0A1629] text-white shadow-md px-4 py-3 md:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white overflow-hidden">
            <img 
              src="/uploads/kavisionsolutions-logo.png" 
              alt="Kavision Solutions Logo" 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-white font-playfair text-xl md:text-2xl font-bold">Kavision</span>&nbsp;
            <span className="text-[#4299e1] font-playfair text-xl md:text-2xl font-bold">Solutions</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-[#4299e1] font-medium transition-all">Home</Link>
          <Link to="/services" className="text-white hover:text-[#4299e1] font-medium transition-all">Services</Link>
          <Link to="/about" className="text-white hover:text-[#4299e1] font-medium transition-all">About Us</Link>
          <Link to="/team" className="text-white hover:text-[#4299e1] font-medium transition-all">Our Team</Link>
          <Link to="/contact" className="text-white hover:text-[#4299e1] font-medium transition-all">Contact</Link>
        </div>
        
        <div className="hidden md:flex items-center">
          <Button asChild className="bg-[#4299e1] hover:bg-[#4299e1]/90 text-white flex items-center gap-2">
            <Link to="/contact">
              <Phone size={18} />
              <span>Contact Now</span>
            </Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0A1629] shadow-md z-50 animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            <Link to="/" className="text-white hover:text-[#4299e1] py-2 font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-white hover:text-[#4299e1] py-2 font-medium" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="text-white hover:text-[#4299e1] py-2 font-medium" onClick={toggleMenu}>About Us</Link>
            <Link to="/team" className="text-white hover:text-[#4299e1] py-2 font-medium" onClick={toggleMenu}>Our Team</Link>
            <Link to="/contact" className="text-white hover:text-[#4299e1] py-2 font-medium" onClick={toggleMenu}>Contact</Link>
            <Button asChild className="bg-[#4299e1] hover:bg-[#4299e1]/90 text-white w-full flex items-center justify-center gap-2 mt-2">
              <Link to="/contact">
                <Phone size={18} />
                <span>Contact Now</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
