
import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Patient",
      quote: "Dr. Yadav and the Smile Care team completely changed my perspective on dental visits. They made the process comfortable, explained everything clearly, and gave me the confidence to smile again!",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "Patient",
      quote: "The technology at Smile Care is impressive, but what really stands out is how much they care. My dental implant procedure was smooth and the results are better than I could have hoped for.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Patient",
      quote: "After years of dental anxiety, I finally found a clinic where I feel at ease. The Smile Care team is patient, gentle, and truly dedicated to making sure you're comfortable throughout your visit.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop",
      rating: 5
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-dental-purple text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dental-purple-darker rounded-full opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-dental-purple-light rounded-full opacity-20 translate-y-1/4 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 font-heading">What Our Patients Say</h2>
        <p className="text-lg md:text-xl text-dental-purple-light text-center max-w-3xl mx-auto mb-16">
          Don't just take our word for it - hear what our patients have to say about their experiences at Smile Care Dental Clinic.
        </p>

        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="max-w-3xl bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-6 flex justify-center">
                {/* Stars */}
                <div className="flex">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-dental-gray text-lg italic">"{testimonials[activeIndex].quote}"</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-dental-purple">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-bold text-lg text-dental-purple">{testimonials[activeIndex].name}</h4>
                <p className="text-dental-gray text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={handlePrev} 
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            onClick={handleNext} 
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
