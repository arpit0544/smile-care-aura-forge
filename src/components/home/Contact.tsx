
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Format the message for WhatsApp
    const whatsappMessage = `New appointment request from ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
    
    // Replace this with your clinic's WhatsApp number
    const whatsappNumber = "15551234567"; // Format: country code + number without +
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact <span className="gradient-text">Us</span></h2>
        <p className="section-subtitle">
          Schedule an appointment or ask questions about our services. We're here to help!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6 font-heading">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-purple bg-opacity-10 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-dental-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Address</h4>
                    <p className="text-dental-gray">123 Dental Avenue, Medical District<br />City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-purple bg-opacity-10 rounded-full p-3">
                    <Phone className="w-6 h-6 text-dental-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-dental-gray">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-purple bg-opacity-10 rounded-full p-3">
                    <Mail className="w-6 h-6 text-dental-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-dental-gray">info@smilecare.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-dental-purple bg-opacity-10 rounded-full p-3">
                    <Clock className="w-6 h-6 text-dental-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Hours</h4>
                    <p className="text-dental-gray">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden shadow-dental h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986613799748!3d40.69714941118613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Smile Care Dental Clinic Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-dental p-8">
              <h3 className="text-2xl font-bold mb-6 font-heading">Book an Appointment</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dental-gray-dark mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-purple focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dental-gray-dark mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-purple focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="email" className="block text-sm font-medium text-dental-gray-dark mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-purple focus:border-transparent"
                  />
                </div>
                
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-dental-gray-dark mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Describe your dental concern or preferred appointment time..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-purple focus:border-transparent resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="mt-8 w-full bg-dental-gradient text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center space-x-2"
                >
                  <span>Book via WhatsApp</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4 3.6C18.2 1.3 15.2 0 12 0C5.5 0 0.1 5.4 0.1 11.9C0 14 0.6 16 1.7 17.8L0 24L6.3 22.3C8 23.3 9.9 23.8 11.9 23.8C18.4 23.8 23.8 18.4 23.8 11.9C23.9 8.7 22.7 5.8 20.4 3.6ZM12 21.8C10.3 21.8 8.6 21.3 7.1 20.4L6.8 20.2L3 21.2L4 17.5L3.8 17.1C2.8 15.6 2.3 13.8 2.3 12C2.3 6.5 6.6 2.2 12.1 2.2C14.7 2.2 17.2 3.2 19.1 5C20.9 6.9 22 9.3 22 12C21.9 17.5 17.5 21.8 12 21.8ZM17.4 14.4C17.1 14.3 15.6 13.5 15.4 13.5C15.1 13.4 14.9 13.4 14.7 13.7C14.5 14 13.9 14.7 13.7 14.9C13.5 15.1 13.3 15.1 13 15C11.3 14.2 10.2 13.5 9.1 11.6C8.8 11.1 9.4 11.1 9.9 10.1C10 9.9 10 9.7 9.9 9.5C9.8 9.3 9.3 7.8 9 7.2C8.8 6.6 8.5 6.7 8.3 6.7C8.1 6.7 7.9 6.7 7.7 6.7C7.5 6.7 7.1 6.8 6.9 7.1C6.6 7.4 5.8 8.2 5.8 9.7C5.8 11.2 6.9 12.7 7.1 12.9C7.3 13.1 9.3 16 12.1 17.3C14.1 18.3 14.9 18.3 15.9 18.2C16.5 18.1 17.7 17.4 18 16.7C18.3 16 18.3 15.4 18.2 15.3C18.1 15.1 17.8 15 17.4 14.4Z" fill="white"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
