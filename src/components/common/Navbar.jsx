import React from 'react';
import { Menu, User } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Sermons', path: '/sermons' },
  { label: 'Ministries', path: '/ministries' },
  { label: 'About Us', path: '/aboutus' },
  { label: 'Visit Us', path: '/visitus' },
];

function NavBar() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white/70 backdrop-blur-lg shadow-sm z-50">
      {/* Logo */}
      <div 
        onClick={() => navigate('/')}
        className="flex items-center space-x-2 text-2xl font-bold text-indigo-800 cursor-pointer">
            <span>PIWC Barcelona</span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `transition duration-150 font-medium ${
                    isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

          {/* Mobile menu */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn m-1">
            <Menu className="w-6 h-6 text-gray-700" />
          </div>
          <ul
            tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
    </header>
  );
}

export default NavBar;