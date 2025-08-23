import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold">Sri Lanka Muslim Janaza Fund SA</h3>
              <p className="text-gray-400 text-sm">Serving with Dignity & Respect</p>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing compassionate, professional, and Shariah-compliant Janaza services 
              to the Sri Lankan Muslim community. Available 24/7 for emergency support.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-red-400">Emergency 24/7</div>
                  <a href="mailto:info@slmjanazasa.org" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    info@slmjanazasa.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">General Inquiries</div>
                  <a href="mailto:info@slmjanazasa.org" className="text-gray-300 hover:text-emerald-400 transition-colors">
                    info@slmjanazasa.org
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  Adelaide, Australia<br />
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-red-900/30 border border-red-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-red-300 mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Emergency Contact Information
            </h4>
            <p className="text-gray-300 mb-4">
              If you need immediate assistance due to a death in the family, please email our 24/7 emergency address:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:info@slmjanazasa.org"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
              >
                Call Brother Hakeem
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sri Lankan Muslim Janaza Fund. All rights reserved.
          </p>
          
          <div className="flex items-center gap-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for our community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;