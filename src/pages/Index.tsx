
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      
      {/* WhatsApp Button - Replace with your clinic's number */}
      <WhatsAppButton phoneNumber="15551234567" />
    </div>
  );
};

export default Index;
