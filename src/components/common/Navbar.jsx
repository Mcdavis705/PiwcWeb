import React from 'react';
import { Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Sermons', path: '/sermons' },
  { label: 'Ministries', path: '/ministries' },
  { label: 'About Us', path: '/aboutus' },
  { label: 'Visit Us', path: '/visitus' },
];

function navigateToHome() {
  window.location.href = '/';
}
  
function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white/30 backdrop-blur-lg shadow-md z-50">
      {/* Logo */}
      <div 
        onClick={navigateToHome}
        className="flex items-center space-x-2 text-2xl font-bold text-indigo-800">
          {/* <img src={churchLogo} alt="churchlogo" className="w-10 h-10" /> */}
            <span>PIWC Barcelona</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="text-gray-600 hover:text-indigo-600 transition duration-150 isActive:text-indigo-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User + Mobile Menu */}
      <div className="flex items-center space-x-4">
        <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-150">
          <User className="w-5 h-5 text-gray-700" />
        </button>

        {/* Mobile menu */}
        <div className="dropdown dropdown-mobile md:hidden ">
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content absolute left-1/2 -translate-x-1/2 mt-3 w-52 p-2 bg-base-100 rounded-box shadow z-[1]"
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-indigo-600 transition duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}


export default NavBar;
