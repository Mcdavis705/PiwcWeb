


  
import React from 'react';
import { Facebook, Twitter, Instagram, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

function navigateToHome() {
  window.location.href = '/';
}


const footerLinks = {
  'Quick Links': [{label: 'Services', path: '/services'}, {label: 'Events', path: '/events'}, {label: 'Sermons', path: '/sermonsPage'}, {label: 'About Us', path: '/aboutus'}],
  'Support': [{label: 'Contact Us', path: '/contact'}, {label: 'FAQ', path: '/faq'}, {label: 'Privacy Policy', path: '/privacy'}, {label: 'Terms of Use', path: '/terms'}],
};

function Footer() {
  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8">
          
          {/* Logo */}
          <div 
          onClick={navigateToHome}
          className="flex items-center space-x-2 text-2xl font-bold text-indigo-800 mb-6 md:mb-0">
            <span>PIWC Barcelona</span>
          </div>

          {/* Navigation Categories */}
          <div className="flex flex-wrap gap-8 md:gap-16 text-sm">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="mb-4 sm:mb-0">
                <h4 className="font-bold text-gray-800 mb-3">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-gray-600 hover:text-indigo-600 transition duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col sm:flex-row justify-between items-center pt-4">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            © 2025 PIWC Barcelona. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a href="#facebook" aria-label="Facebook" className="text-gray-500 hover:text-indigo-600 transition duration-150">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#twitter" aria-label="Twitter" className="text-gray-500 hover:text-indigo-600 transition duration-150">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#instagram" aria-label="Instagram" className="text-gray-500 hover:text-indigo-600 transition duration-150">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;