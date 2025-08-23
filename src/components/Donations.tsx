import React, { useState } from 'react';
import { Heart, CreditCard, Banknote, Smartphone, DollarSign } from 'lucide-react';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = ['1000', '2500', '5000', '10000', '25000'];

  const impactPoints = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Helps Families in Need",
      description: "Your donation directly supports families who cannot afford funeral expenses."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: "Maintains Quality Services",
      description: "Ensures we can continue providing high-quality, dignified services to all."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: "Expands Community Reach",
      description: "Helps us serve more Sri Lankan Muslim families."
    }
  ];

  return (
    <section id="donations" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Support Our Mission
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your generous donations help us serve families in their time of greatest need. 
            Every contribution makes a meaningful difference in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bank Details */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bank Details for Donations</h3>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-emerald-500 mb-6">
              <div className="flex items-start">
                <Banknote className="w-8 h-8 text-emerald-600 mt-1 mr-4" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">
                    Australian Bank Account
                  </h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold">Account Name:</span>
                      <span>SRILANKA MUSLIM JANAZA FUND SA</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold">BSB:</span>
                      <span>085-196</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold">Account Number:</span>
                      <span>848410162</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-semibold">Bank:</span>
                      <span>NAB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Membership:</span>
                      <span className="text-emerald-600 font-semibold">$10/month or $120/Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl mb-6">
              <div className="flex items-start">
                <DollarSign className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">
                    How to Donate
                  </h4>
                  <ol className="text-sm text-blue-700 space-y-1">
                    <li>1. Use the bank details above for direct transfer</li>
                    <li>2. Include "Donation + Your Name" as reference</li>
                    <li>3. Email us at info@slmjanazasa.org to confirm your donation</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 text-center">
              All donations help support families in their time of need
            </p>
          </div>

          {/* Impact Information */}
          <div>
            <img 
              src="https://ik.imagekit.io/monarclabs/Janzah/images.jpeg?updatedAt=1753058965610" 
              alt="Person in prayer representing spiritual support and guidance"
              className="w-full h-64 object-cover rounded-xl shadow-md mb-8"
            />
            
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Your Impact
            </h3>
            
            <div className="space-y-6 mb-8">
              {impactPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{point.title}</h4>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-emerald-500">
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                ABN Details
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">54 195 176 901</div>
                  <div className="text-sm text-gray-600">Sri Lanka Muslim Janaza SA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5069</div>
                  <div className="text-sm text-gray-600">Business Location</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;