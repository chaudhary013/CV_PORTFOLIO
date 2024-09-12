import React, { useState, useEffect } from 'react';
import { Button } from 'antd'; // Ant Design Button

const NavBar = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 h-full w-60 p-6 bg-white bg-opacity-30 light:bg-gray-800 dark:bg-opacity-30 shadow-md backdrop-blur-sm transition-transform duration-300 ${
          scrolling ? 'translate-y-[-100%]' : 'translate-y-0'
        }`}
      >
        <ul className="flex flex-col space-y-6">
          <li>
            <a href="#home" className="text-lg hover:text-blue-500 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-lg hover:text-blue-500 transition-colors duration-200">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="text-lg hover:text-blue-500 transition-colors duration-200">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg hover:text-blue-500 transition-colors duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#blogs" className="text-lg hover:text-blue-500 transition-colors duration-200">
              Blogs
            </a>
          </li>
          <li>
            <a href="#experience" className="text-lg hover:text-blue-500 transition-colors duration-200">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg hover:text-blue-500 transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>
        <div className="mt-auto pt-6">
          <Button type="primary" onClick={() => setDarkMode(!darkMode)} className="w-full">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>
      </nav>

      {scrolling && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default NavBar;
