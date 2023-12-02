import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPerson, faCode, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [oldScrollY, setOldScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const newScrollY = window.scrollY;

    // Show the header whenever the user scrolls upwards
    if (newScrollY < oldScrollY) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }

    // Update the old scroll position
    setOldScrollY(newScrollY);
  };


  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [oldScrollY]);

  return (
    <header
      id="header-container"
      className={`fixed bottom-0 md:bottom-auto p-0 md:p-2 w-full transition-opacity z-10 ${
        isHeaderVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <nav>
        {/* Regular Navigation for Screens 650px and above */}
        <ul className={`hidden md:flex gap-5 justify-center px-4`}>
          <li>
            <button
              onClick={() => scrollToSection('hero-container')}
              className="cool-button bg-orange-700 hover:bg-blue-500 text-gray-50 transition-all px-5 rounded-full"
            >
              <FontAwesomeIcon icon={faHouse} size="xs" /> Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('aboutme-container')}
              className="cool-button bg-orange-700 hover:bg-blue-500 text-gray-50 transition-all px-5 rounded-full"
            >
              <FontAwesomeIcon icon={faPerson} size="xs" /> About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('experience-container')}
              className="cool-button bg-orange-700 hover:bg-blue-500 text-gray-50 transition-all px-5 rounded-full"
            >
              <FontAwesomeIcon icon={faCode} size="xs" /> Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('footer-container')}
              className="cool-button bg-orange-700 hover:bg-blue-500 text-gray-50 transition-all px-5 rounded-full"
            >
              <FontAwesomeIcon icon={faPhone} size="xs" /> Contacts
            </button>
          </li>
        </ul>
      </nav>
      <nav className='flex md:hidden'>
        <div className=' h-16 w-full bg-orange-500'>
        <ul className={` h-full flex items-center justify-between px-4`}>
          <li>
            <button
              onClick={() => scrollToSection('hero-container')}
              className="cool-button  text-gray-50 transition-all"
            >
              <FontAwesomeIcon icon={faHouse} /> <p>Home</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('aboutme-container')}
              className="cool-button text-gray-50 transition-all"
            >
              <FontAwesomeIcon icon={faPerson} size="lg" /> <p>About</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('experience-container')}
              className="cool-button text-gray-50 transition-all"
            >
              <FontAwesomeIcon icon={faCode}  /><p>Experience</p> 
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('footer-container')}
              className="cool-button text-gray-50 transition-all"
            >
              <FontAwesomeIcon icon={faPhone} /><p>Contacts</p>
            </button>
          </li>
        </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
