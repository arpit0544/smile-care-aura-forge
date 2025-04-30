
import React from 'react';
import ThreeBackground from '../ui/ThreeBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <ThreeBackground />
      
      <div className="container mx-auto px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-heading">
                Advanced Dental Care for Your
                <span className="gradient-text block"> Perfect Smile</span>
              </h1>
              <p className="text-lg md:text-xl text-dental-gray mb-8">
                Experience premium, modern dental treatment with Dr. Rajkumar Yadav at Smile Care Dental Clinic. Cutting-edge technology with a gentle touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-dental-purple hover:bg-dental-purple-dark text-white px-8 py-3 rounded-full transition-all duration-300 font-medium text-center"
                >
                  Book Appointment
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-dental-purple text-dental-purple px-8 py-3 rounded-full hover:bg-dental-purple hover:text-white transition-all duration-300 font-medium text-center"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative rounded-full w-full max-w-lg mx-auto overflow-hidden shadow-2xl animate-float">
              <div className="aspect-square w-full rounded-full overflow-hidden border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop" 
                  alt="Smile Care Dental Clinic" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 -right-8 w-28 h-28 bg-dental-blue rounded-full opacity-20 animate-pulse-subtle"></div>
              <div className="absolute -bottom-10 -left-8 w-36 h-36 bg-dental-purple rounded-full opacity-20 animate-pulse-subtle"></div>
            </div>
            
            {/* Floating badges */}
            <div className="hidden md:block absolute top-10 -right-12 glass p-3 rounded-xl shadow-dental animate-float">
              <div className="flex items-center">
                <div className="bg-dental-purple rounded-full w-10 h-10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Advanced Technology</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute bottom-10 -left-8 glass p-3 rounded-xl shadow-dental animate-float" style={{animationDelay: "1s"}}>
              <div className="flex items-center">
                <div className="bg-dental-blue rounded-full w-10 h-10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Expert Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
