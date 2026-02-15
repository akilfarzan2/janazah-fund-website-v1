import React from 'react';
import { Star, Award, Clock, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Sri Lanka Muslim Janaza Fund SA
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established to serve the Muslim community with dignity and respect, 
            providing comprehensive Janaza services rooted in Islamic traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In the recent past the number of Sri Lankan Muslims
making South Australia their home has increased. With the increase, the
fledgling community also has many needs. The community has unanimously
noted that one of the pressing needs is to set up a Janaza Fund and collect
subscriptions from its members and to help defray the cost of burgeoning
funeral expenses in the case of an eventuality. With this in mind the
community met on 1 st March 2014 and formed the above fund.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Vision</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
             The Fund is empowered to <br/>
<br/>i) to collect subscriptions from its members to be directly credited into
the Bank AC to be set up as Sri Lanka Muslim Janaza Fund SA and to
be disbursed upon application by its members. <br/>
<br/>ii) Work with groups of a similar nature and exchange information,
advice and knowledge with them, including cooperation with other
voluntary bodies, charities, statutory and non statutory
organisations. <br/>
<br/>iii) Take any form of action that is lawful, which is necessary to achieve
the objects of the Group. <br/>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <Award className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-emerald-600">10+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Families Served</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-600">24/7</div>
                <div className="text-sm text-gray-600">Emergency Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://ik.imagekit.io/monarclabs/Janzah/50a896ed95c5c011b555ce0bf9435757.jpg" 
              alt="Hands holding white flowers symbolizing remembrance and compassion"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
