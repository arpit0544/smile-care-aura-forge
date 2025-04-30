
import React, { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "General Dentistry",
      description: "Comprehensive dental exams, cleanings, fillings, and preventative care for the whole family.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with veneers, teeth whitening, bonding and aesthetic enhancements.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4Z" fill="currentColor"/>
          <path d="M12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z" fill="currentColor"/>
          <path d="M12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Orthodontics",
      description: "Straighten your teeth with modern braces, clear aligners and custom orthodontic solutions.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Dental Implants",
      description: "Replace missing teeth with permanent, natural-looking dental implants for improved function.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM15 9H9V11H15V9ZM15 13H9V15H15V13ZM18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V18C19 18.55 18.55 19 18 19Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Root Canal Therapy",
      description: "Painless root canal treatments to save damaged teeth using advanced techniques.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.73 12.02L22.3 14.5C22.7 14.72 22.7 15.28 22.3 15.5L19 17.25V21C19 21.55 18.55 22 18 22H16C15.45 22 15 21.55 15 21V18.75L12 20.5L2.7 15.5C2.3 15.28 2.3 14.72 2.7 14.5L7.27 12.02L2.7 9.5C2.3 9.28 2.3 8.72 2.7 8.5L12 3.5L21.3 8.5C21.7 8.72 21.7 9.28 21.3 9.5L16.73 12.02ZM12 6.92L5.33 10.5L12 14.08L18.67 10.5L12 6.92Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Pediatric Dentistry",
      description: "Child-friendly dental care in a comfortable environment focusing on prevention and education.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
        </svg>
      )
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
        <p className="section-subtitle">
          Comprehensive dental care tailored to your needs with cutting-edge technology and a gentle approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`relative bg-white p-8 rounded-2xl shadow-dental transition-all duration-500 transform ${
                hoveredIndex === index ? 'scale-105 shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                text-dental-purple mb-6 transition-all duration-500
                ${hoveredIndex === index ? 'text-white' : ''}
              `}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-heading">{service.title}</h3>
              <p className="text-dental-gray">{service.description}</p>
              
              {/* Hover background overlay */}
              <div 
                className={`absolute inset-0 bg-dental-gradient rounded-2xl opacity-0 transition-opacity duration-500 -z-10 ${
                  hoveredIndex === index ? 'opacity-100' : ''
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
