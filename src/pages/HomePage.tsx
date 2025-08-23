import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Donations from '../components/Donations';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Donations />
      <Testimonials />
    </>
  );
};

export default HomePage;