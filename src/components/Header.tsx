import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      {/* Contact Bar */}
      <div className="bg-emerald-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 text-sm">
          <Mail className="w-4 h-4" />
          <span className="font-semibold">Contact us: info@slmjanazasa.org</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <h1 className="text-xl font-bold text-gray-800">Sri Lanka Muslim Janaza Fund SA</h1>
            <p className="text-xs text-gray-600">في سبيل الله</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/services"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/contact"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mt-4">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-emerald-600 transition-colors"
              >
                About
              </Link>
              <Link 
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;