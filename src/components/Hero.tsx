import React from 'react';
import { Heart, Users, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-emerald-600 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-500 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-amber-500 rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 border-2 border-emerald-600 rotate-12"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
           "Verily, to <span className="text-emerald-600">Allah </span>
            we belong, <br /> and to Him we will return"
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Surah Al-Baqarah 2:156<br />
            <span className="text-emerald-700 font-semibold">Available 24/7 for the Muslim community.</span>
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Heart className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-center">Supporting families with empathy and understanding during difficult times</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Shariah Compliant</h3>
              <p className="text-gray-600 text-center">All services follow Islamic principles and traditional practices</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Focused</h3>
              <p className="text-gray-600 text-center">Dedicated to serving the Muslim community in South Australia</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;