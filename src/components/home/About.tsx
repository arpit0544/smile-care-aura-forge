
import React from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';

const About: React.FC = () => {
  const stats = [
    { value: 15, label: "Years Experience" },
    { value: 2500, label: "Happy Patients" },
    { value: 12, label: "Dental Awards" },
    { value: 25, label: "Staff Members" },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=900&auto=format&fit=crop" 
                  alt="Dr. Rajkumar Yadav" 
                  className="object-cover h-full w-full"
                />
              </div>
              
              <div className="glass p-6 rounded-xl absolute -bottom-10 -right-10 max-w-xs shadow-lg">
                <h3 className="text-xl font-bold mb-3">Dr. Rajkumar Yadav</h3>
                <p className="text-sm mb-2">
                  <span className="text-dental-purple font-semibold">Founder & Lead Dentist</span>
                </p>
                <p className="text-dental-gray text-sm">
                  "I believe every patient deserves a personalized approach to dental care that combines advanced technology with compassion."
                </p>
              </div>
              
              <div className="absolute -z-10 -left-6 -top-6 w-full h-full rounded-2xl border-2 border-dental-purple"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              About <span className="gradient-text">Smile Care</span>
            </h2>
            
            <p className="text-dental-gray mb-6">
              Smile Care Dental Clinic was founded with a simple mission: to provide exceptional dental care in a comfortable, state-of-the-art environment. Led by Dr. Rajkumar Yadav, our clinic combines advanced technology with compassionate care.
            </p>
            
            <p className="text-dental-gray mb-6">
              Our team consists of highly trained professionals dedicated to ensuring your dental experience is positive, from routine check-ups to complex procedures. We emphasize preventative care and patient education to help you maintain optimal oral health.
            </p>
            
            <p className="text-dental-gray mb-10">
              At Smile Care, we pride ourselves on staying at the forefront of dental innovation, implementing the latest techniques and technologies to deliver superior results with minimal discomfort.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.value === 15 ? "+" : stat.value === 2500 ? "+" : stat.value === 12 ? "+" : "+"}
                    delay={index * 200}
                  />
                  <p className="text-dental-gray mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
