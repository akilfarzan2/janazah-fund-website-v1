import React from 'react';
import { FileText, Mail, Users, MapPin, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Mail className="w-8 h-8 text-emerald-600" />,
      title: "24/7 Emergency Email Support",
      description: "Immediate email assistance available at any time, ensuring prompt response when families need us most.",
      features: ["Immediate email support", "Emergency coordination", "Rapid mobilization"]
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Documentation & Legal Support",
      description: "Complete assistance with death certificates, burial permits, and all necessary paperwork.",
      features: ["Death certificate processing", "Burial permits", "Government documentation"]
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Funeral Arrangement",
      description: "Full coordination of Janaza prayers, burial arrangements, and family support services.",
      features: ["Janaza prayer coordination", "Burial site arrangements", "Family liaison"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-amber-600" />,
      title: "Transportation Services",
      description: "Dignified transportation of the deceased and support for family travel arrangements.",
      features: ["Hearse services", "Transportation of the decreased", "International liaison"]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
      title: "Religious Compliance",
      description: "Ensuring all services strictly adhere to Islamic principles and Shariah requirements.",
      features: ["Shariah-compliant practices", "Islamic burial rituals", "Religious guidance"]
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: "Grief Support",
      description: "Ongoing emotional and spiritual support for families during their time of mourning.",
      features: ["Counseling services", "Community support", "Continued care"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Comprehensive Services
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide complete Janaza services with dignity, respect, and adherence to Islamic traditions, 
            ensuring families can focus on mourning while we handle all arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
