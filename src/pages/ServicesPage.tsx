import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { Clock, Phone, FileText, Users, Heart, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-600 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-emerald-500 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-purple-500 rotate-45"></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 border-2 border-blue-600 rotate-12"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Our <span className="text-blue-600">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive Janaza services designed to support families with 
            <span className="text-blue-700 font-semibold"> dignity, respect, and Islamic compliance</span>.
          </p>
          
          <div className="mt-12 mb-8">
            <img 
              src="https://ik.imagekit.io/monarclabs/Janzah/defrino-maasy-27eysQSwmuY-unsplash.jpg?updatedAt=1753058974481" 
              alt="Islamic prayer setting representing spiritual guidance"
              className="w-full max-w-4xl mx-auto h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-center">Emergency assistance available anytime</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <FileText className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Complete Documentation</h3>
              <p className="text-gray-600 text-center">All paperwork and legal requirements handled</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Shariah Compliant</h3>
              <p className="text-gray-600 text-center">Following Islamic principles and traditions</p>
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      {/* Detailed Service Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Detailed Service Information
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://ik.imagekit.io/monarclabs/Janzah/9143afad315187cb63588b70e66fe152.jpg?updatedAt=1753058965817" 
                alt="Lit candles symbolizing remembrance and peace"
                className="w-full h-[1000px] object-cover rounded-xl shadow-md"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Islamic Compliance</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Shariah Requirements</h4>
                      <p className="text-blue-700 text-sm mb-3">
                        All our services strictly follow Islamic guidelines:
                      </p>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Proper washing (Ghusl) arrangements</li>
                        <li>• Appropriate shrouding (Kafan)</li>
                        <li>• Timely burial within Islamic timeframes</li>
                        <li>• Qibla-facing burial orientation</li>
                        <li>• Gender-appropriate handling procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-amber-800 mb-2">
                    Religious Coordination
                  </h4>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Imam coordination for Janaza prayers</li>
                    <li>• Mosque booking and arrangements</li>
                    <li>• Community notification services</li>
                    <li>• Religious guidance for families</li>
                    <li>• Dua and remembrance coordination</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6 mt-12">Emergency Response Protocol</h3>
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-red-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Immediate Response</h4>
                      <p className="text-red-700 text-sm mb-3">
                        When you contact us, our emergency response team will:
                      </p>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Respond within 30 minutes of receiving your email</li>
                        <li>• Provide immediate guidance on next steps</li>
                        <li>• Coordinate with relevant authorities</li>
                        <li>• Begin funeral arrangement preparations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-emerald-800 mb-2">
                    What We Handle
                  </h4>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Death certificate processing and collection</li>
                    <li>• Burial permit applications</li>
                    <li>• Mosque and cemetery coordination</li>
                    <li>• Transportation arrangements</li>
                    <li>• Family notification assistance</li>
                    <li>• Post-funeral support services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Service Timeline
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding what happens when you contact us helps families prepare and know what to expect.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Initial Response</h3>
                <p className="text-gray-600 mb-3">
                  Our emergency team responds to your email and provides immediate guidance. 
                  We begin coordinating with authorities and start the documentation process.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Within 30 minutes of contact</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Documentation & Permits</h3>
                <p className="text-gray-600 mb-3">
                  We handle all necessary paperwork including death certificates, burial permits, 
                  and coordinate with hospitals, morgues, and government offices.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>1-4 hours after initial contact</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Funeral Arrangements</h3>
                <p className="text-gray-600 mb-3">
                  Complete coordination of Janaza prayers, burial site preparation, transportation, 
                  and notification of community members and family.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span>4-12 hours (depending on circumstances)</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Continued Support</h3>
                <p className="text-gray-600 mb-3">
                  We provide ongoing support to families including grief counseling resources, 
                  community assistance coordination, and help with any post-funeral needs.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Heart className="w-4 h-4 mr-2" />
                  <span>Continued support as needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Resources
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access important documents and resources to help you understand our services and membership requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Smithfield Burial Ground
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Information pertaining to the Muslim section of the Smithfield burial grounds
              </p>
              <a 
                target="_blank"
                href="/pdfs/SLJANAZA  MUSLIM BURIAL PLOT SMITHFIELD MP  INFO 2024.pdf"
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-sm inline-block"
              >
                View
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Coroner Information
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Common questions for the Corone's Office from SA that Muslims ask
              </p>
              <a 
                target="_blank"
                href="/pdfs/SLJANAZA common Questions for the Coroner.pdf"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm inline-block"
              >
                View
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Al-Salam Funeral Services
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Information pertaining to the Al-Salam funeral services
              </p>
              <a 
                target="_blank"
                href="/pdfs/SLJANAZA AL SALAM FUNERAL SERVICES 2024.pdf"
                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm inline-block"
              >
                View
              </a>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Resource Coming Soon
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                New Resources will be added here soon
              </p>
              <a 
                target="_blank"
                href="#"
                className="bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-sm inline-block"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;