import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after selecting
  };

  return (
    <>
      <div className="navbar-container fixed top-0 right-0 h-full z-50">
        <button
          className="hamburger-icon bg-gray-900 text-gray-50 p-3 fixed top-5 right-5 z-50 w-16 h-16"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
        </button>

        <div
          className={`menu w-full md:w-1/4 flex justify-center bg-gray-300 text-gray-50 fixed top-0 right-0 h-full  transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <ul className="menu-list text-gray-900 flex flex-col justify-center items-center  space-y-8">
            <li>
              <button
                onClick={() => scrollToSection('hero-container')}
                className="text-2xl hover:text-orange-500 transition-all"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('aboutme-container')}
                className="text-2xl hover:text-orange-500 transition-all"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('experience-container')}
                className="text-2xl hover:text-orange-500 transition-all"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('footer-container')}
                className="text-2xl hover:text-orange-500 transition-all"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
