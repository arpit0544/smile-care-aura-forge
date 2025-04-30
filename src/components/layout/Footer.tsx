
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo and About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-dental-purple font-heading">Smile Care</h3>
            <p className="text-dental-gray mb-4">
              Premium dental care focused on comfort, innovation, and lasting results. 
              Led by Dr. Rajkumar Yadav, we transform smiles and lives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-dental-purple flex items-center justify-center text-white hover:bg-dental-purple-dark transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-dental-purple flex items-center justify-center text-white hover:bg-dental-purple-dark transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.363 13.175l-.365 1.5c-.219.22-1.72 1.064-4.96-1.843-3.915-3.515-2.407-5.152-2.209-5.452l.058-.104.045-.026 1.5-.364c.5-.146.911.327.953.5l.418 1.396c.043.155-.073.289-.219.408l-.564.387c-.14.187-.058 1.645 2.666 3.106 2.804 1.502 3.702-.155 3.857-.252l.281-.281c.155-.155.418-.23.564-.155l1.396.418c.173.043.646.453.5.953l-.364 1.5-.057.327z" />
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-dental-purple flex items-center justify-center text-white hover:bg-dental-purple-dark transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dental-purple mt-1" />
                <p className="text-dental-gray">123 Dental Avenue, Medical District, City, State 12345</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-dental-purple" />
                <p className="text-dental-gray">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-dental-purple" />
                <p className="text-dental-gray">info@smilecare.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-dental-purple mt-1" />
                <div>
                  <p className="text-dental-gray">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-dental-gray">Sat: 9:00 AM - 2:00 PM</p>
                  <p className="text-dental-gray">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-dental-gray hover:text-dental-purple transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-dental-gray hover:text-dental-purple transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-dental-gray hover:text-dental-purple transition-colors">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-dental-gray hover:text-dental-purple transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-dental-gray hover:text-dental-purple transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-dental-gray">&copy; {new Date().getFullYear()} Smile Care Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
