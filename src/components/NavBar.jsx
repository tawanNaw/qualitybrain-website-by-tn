import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-12 w-auto" src="./logo/qb_LOGO.png" alt="Logo" />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="relative">
                  <button onClick={toggleDropdown} className="text-gray-800 hover:text-gray-600">Home</button>
                  <div className={`absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">Home</h3>
                      <ul>
                        <li><a href="#" className="block py-1">Home</a></li>
                        <li><a href="#" className="block py-1">Our Solution</a></li>
                        <li><a href="#" className="block py-1">Our Products</a></li>
                        <li><a href="#" className="block py-1">Our Projects</a></li>
                        <li><a href="#" className="block py-1">About Us</a></li>
                        <li><a href="#" className="block py-1">Contact</a></li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <a href="#" className="text-gray-800 hover:text-gray-600">Solution</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">Products</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">Our Projects</a>
                {/* <a href="#" className="text-gray-800 hover:text-gray-600">Blog</a> */}
                <a href="#" className="text-gray-800 hover:text-gray-600">About Us</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">Contact Us</a>
             
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-gray-800 hover:text-gray-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6h4m-2 2v12"></path>
              </svg>
            </button>
            <button className="ml-4 text-gray-800 hover:text-gray-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h3m-3 0h-3m3 0V9m0 3v3m0-3h-3m0 0V9m0 3v3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
