import React from 'react';
import { Users, User } from 'lucide-react';

const Testimonials = () => {
  const committeeMembers = [
    {
      position: "President",
      name: "Mohamed Hakeem Mohamed Uvais"
    },
    {
      position: "Treasurer",
      name: "Mohamed Farzan Aboosaheed"
    },
    {
      position: "Secretary",
      name: "Thariq Mohamed Madardeen Abdeen"
    },
    {
      position: "Committee Member",
      name: "Manazir Hussain Munafdeen"
    },
    {
      position: "Committee Member",
      name: "Mirshad Ahmed Mohamed Mowjood"
    },
    {
      position: "Committee Member",
      name: "Malik Madardeen Abdeen"
    },
    {
      position: "Committee Member",
      name: "Mohamed Nasmi Mohamed Jameel"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Committee Members
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated committee members who oversee the Sri Lanka Muslim Janaza Fund SA 
            and ensure our community receives the best possible service.
          </p>
        </div>

        {/* Committee Members List */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-8 h-8 text-emerald-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">
              Sri Lanka Muslim Janaza Fund SA Committee
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committeeMembers.map((member, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
                <User className="w-6 h-6 text-emerald-600 mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 mb-1">
                    {member.name}
                  </div>
                  <div className="text-sm text-emerald-600 font-medium">
                    {member.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Dedicated to Serving Our Community
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Our committee works tirelessly to ensure that every family in our community 
            receives compassionate and professional Janaza services when they need them most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@slmjanazasa.org"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Committee
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;