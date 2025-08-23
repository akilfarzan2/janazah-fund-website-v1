import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import { Mail, MapPin, Clock, Phone, Users, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-red-50 to-emerald-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-red-600 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-emerald-500 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-blue-500 rotate-45"></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 border-2 border-red-600 rotate-12"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Contact <span className="text-red-600">Us</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We're here to help you 24/7. Reach out for 
            <span className="text-red-700 font-semibold"> emergency assistance or general inquiries</span>.
          </p>
          
          <div className="mt-12 mb-8">
            <img 
              src="https://ik.imagekit.io/monarclabs/Janzah/izuddin-helmi-adnan-JFirQekVo3U-unsplash.jpg?updatedAt=1753058974459" 
              alt="Compassionate support during difficult times"
              className="w-full max-w-4xl mx-auto h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <AlertTriangle className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Emergency Support</h3>
              <p className="text-gray-600 text-center">Immediate assistance when you need it most</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Mail className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Communication</h3>
              <p className="text-gray-600 text-center">Professional email support and documentation</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Care</h3>
              <p className="text-gray-600 text-center">Dedicated committee members ready to help</p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      
      {/* Contact Information Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help you 24/7. Choose the appropriate contact method based on your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Emergency Contact */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-800">Emergency Contact</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-100 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">When someone has passed away</h4>
                  <p className="text-red-700 text-sm mb-3">
                    Contact us immediately for urgent assistance with funeral arrangements.
                  </p>
                  <a 
                    href="mailto:info@slmjanazasa.org"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
                  >
                    Emergency: Call Brother Hakeem
                  </a>
                </div>
                
                <div className="flex items-center text-red-700">
                  <Clock className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Available 24/7</span>
                </div>
                
                <div className="flex items-center text-red-700">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Response within 30 minutes</span>
                </div>
              </div>
            </div>

            {/* General Inquiries */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Info className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-emerald-800">General Inquiries</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-emerald-100 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-800 mb-2">For membership & information</h4>
                  <p className="text-emerald-700 text-sm mb-3">
                    Questions about membership, services, or general information about our fund.
                  </p>
                  <a 
                    href="mailto:info@slmjanazasa.org"
                    className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-block"
                  >
                    General: info@slmjanazasa.org
                  </a>
                </div>
                
                <div className="flex items-center text-emerald-700">
                  <Clock className="w-5 h-5 mr-3" />
                  <span className="font-semibold">Business hours response</span>
                </div>
                
                <div className="flex items-center text-emerald-700">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Contact */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Committee Contact Information
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <Users className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800">President</h3>
                <p className="text-emerald-600 font-semibold">Mohamed Hakeem Mohamed Uvais</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  For executive decisions and major inquiries
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800">Treasurer</h3>
                <p className="text-blue-600 font-semibold">Mohamed Farzan Aboosaheed</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  For financial matters and membership payments
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800">Secretary</h3>
                <p className="text-purple-600 font-semibold">Thariq Mohamed Madardeen Abdeen</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  For administrative matters and documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Service Area
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://ik.imagekit.io/monarclabs/Janzah/masjid-pogung-raya-hizlrtbEWws-unsplash.jpg?updatedAt=1753058967918" 
                alt="Person in prayer representing spiritual support"
                className="w-full h-64 object-cover rounded-xl shadow-md mb-8"
              />
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Primary Service Area</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Adelaide Metropolitan Area</h4>
                    <p className="text-gray-600 text-sm">
                      We primarily serve the greater Adelaide area and surrounding suburbs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Regional South Australia</h4>
                    <p className="text-gray-600 text-sm">
                      Extended services available for regional areas upon request.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-purple-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Interstate Coordination</h4>
                    <p className="text-gray-600 text-sm">
                      We can coordinate with interstate services when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Important Notes</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-800 mb-2">Email Only</h4>
                  <p className="text-emerald-700 text-sm">
                    We operate primarily through email communication to ensure all requests 
                    are properly documented and tracked.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-2">Response Times</h4>
                  <p className="text-blue-700 text-sm">
                    Emergency situations: Within 30 minutes<br />
                    General inquiries: Within 24 hours
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-800 mb-2">Language Support</h4>
                  <p className="text-amber-700 text-sm">
                    We provide support in English, Sinhala, and Tamil to better serve 
                    our diverse community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;