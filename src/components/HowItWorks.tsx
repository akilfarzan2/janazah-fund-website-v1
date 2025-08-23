import React from 'react';
import { Mail, FileText, Users, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Contact Us Immediately",
      description: "Call Brother Hakeem",
      details: [
        "Email info@slmjanazasa.org",
        "Provide basic information about the deceased",
        "Receive immediate guidance and support"
      ]
    },
    {
      number: "02",
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Documentation & Legal",
      description: "We assist with all required paperwork including death certificates, burial permits, and any government documentation needed.",
      details: [
        "Death certificate processing",
        "Burial permit applications",
        "Government and legal documentation"
      ]
    },
    {
      number: "03",
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Funeral Arrangements",
      description: "Our team coordinates all aspects of the Janaza including prayer arrangements, burial site preparation, and family notifications.",
      details: [
        "Janaza prayer coordination",
        "Burial site arrangements",
        "Family and community notifications"
      ]
    },
    {
      number: "04",
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Ongoing Support",
      description: "We provide continued support to the family, including grief counseling resources and assistance with any post-funeral needs.",
      details: [
        "Grief support resources",
        "Community assistance coordination",
        "Follow-up care and check-ins"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What to Do When Someone Passes Away
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In times of loss, knowing what steps to take can provide comfort and clarity. 
            Our experienced team will guide you through each step with compassion and care.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-24 bg-emerald-200 hidden lg:block"></div>
                )}
              </div>

              <div className="flex-1">
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
          <div className="flex items-start">
            <Mail className="w-6 h-6 text-red-600 mt-1 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Emergency Contact Information
              </h3>
              <p className="text-red-700 mb-3">
                Call Brother Hakeem for immediate assistance 24/7:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:info@slmjanazasa.org"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                >
                  Emergency: info@slmjanazasa.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;