import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import { Users, Heart, Shield, Award, Clock, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-emerald-600 rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-500 rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-amber-500 rotate-45"></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 border-2 border-emerald-600 rotate-12"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            About <span className="text-emerald-600">Our Fund</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Learn about our mission, values, and commitment to serving the 
            <span className="text-emerald-700 font-semibold"> Sri Lankan Muslim community</span> in South Australia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Established 2014</h3>
              <p className="text-gray-600 text-center">Serving our community for over a decade</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Heart className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Driven</h3>
              <p className="text-gray-600 text-center">Built by the community, for the community</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Islamic Values</h3>
              <p className="text-gray-600 text-center">Rooted in Islamic principles and traditions</p>
            </div>
          </div>
        </div>
      </section>

      <About />
      
      {/* Additional About Content */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our History & Values
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://ik.imagekit.io/monarclabs/Janzah/How-to-Offer-the-Funeral-Prayer.jpg" 
                alt="Person comforting another during difficult times"
                className="w-full h-64 object-cover rounded-xl shadow-md mb-8"
              />
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Foundation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Sri Lanka Muslim Janaza Fund SA was established in 2014 when the growing 
                Sri Lankan Muslim community in South Australia recognized the urgent need for 
                a dedicated funeral fund. The community came together on March 1st, 2014, 
                with a shared vision of supporting families during their most difficult times.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are committed to providing dignified, respectful, and Shariah-compliant 
                funeral services to our community. Our fund operates on the principle of 
                mutual support, where community members contribute to help one another 
                during times of loss.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                <h4 className="font-semibold text-emerald-800 mb-2">
                  Community Support
                </h4>
                <p className="text-emerald-700 text-sm">
                  Every member's contribution helps ensure that no family faces 
                  the burden of funeral expenses alone during their time of grief.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Values</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Heart className="w-8 h-8 text-red-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Compassion</h4>
                    <p className="text-gray-600">We approach every family with empathy, understanding, and genuine care during their time of loss.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="w-8 h-8 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Religious Integrity</h4>
                    <p className="text-gray-600">All our services strictly adhere to Islamic principles and Shariah requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-8 h-8 text-emerald-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Community Unity</h4>
                    <p className="text-gray-600">We believe in the strength of our community and the importance of supporting one another.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="w-8 h-8 text-amber-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Excellence</h4>
                    <p className="text-gray-600">We strive to provide the highest quality services with attention to every detail.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Information */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Membership Information
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our community fund and ensure your family is supported when they need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
              <img 
                src="https://ik.imagekit.io/monarclabs/Janzah/masjid-pogung-raya-hizlrtbEWws-unsplash.jpg?updatedAt=1753058967918" 
                alt="Clasped hands representing unity and community support"
                className="w-full h-48 object-cover rounded-xl shadow-md mb-6"
              />
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Membership Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Financial assistance for funeral expenses</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">24/7 emergency support and guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Complete funeral arrangement coordination</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Documentation and legal support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Community support network</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-emerald-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">How to Join</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold mr-4">1</div>
                  <span className="text-gray-700">Contact us via email to express your interest</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold mr-4">2</div>
                  <span className="text-gray-700">Complete the membership application form</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold mr-4">3</div>
                  <span className="text-gray-700">Set up your monthly or annual contribution</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold mr-4">4</div>
                  <span className="text-gray-700">Receive confirmation and welcome materials</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-emerald-800 font-semibold text-center">
                  Membership: $10/month or $120/year
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
