import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import dark_logo from '../assets/dark_logo.png';
import header_bg_color from '../assets/header-bg-color.png';
import moon_icon from '../assets/moon_icon.png';
import sun_icon from '../assets/sun_icon.png';
import arrow_icon from '../assets/arrow-icon.png';
import arrow_icon_dark from '../assets/arrow-icon-dark.png';
import menu_black from '../assets/menu-black.png';
import menu_white from '../assets/menu-white.png';
import close_black from '../assets/close-black.png';
import close_white from '../assets/close-white.png';
//import './styles.css';  Ensure this is imported

const Navbar = () => {
  const sideMenuRef = useRef(null);
  const navRef = useRef(null);
  const navLinkRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(() => 
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setIsDarkMode(prevState => {
      const newDarkMode = !prevState;
      document.documentElement.classList.toggle('dark', newDarkMode);
      localStorage.theme = newDarkMode ? 'dark' : 'light';
      return newDarkMode;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add(
          'bg-white',
          'bg-opacity-50',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:bg-darkTheme',
          'dark:shadow-white/20'
        );
        navLinkRef.current.classList.remove(
          'bg-white',
          'shadow-sm',
          'bg-opacity-50',
          'dark:border',
          'dark:border-white/50',
          'dark:bg-transparent'
        );
      } else {
        navRef.current.classList.remove(
          'bg-white',
          'bg-opacity-50',
          'backdrop-blur-lg',
          'shadow-sm',
          'dark:bg-darkTheme',
          'dark:shadow-white/20'
        );
        navLinkRef.current.classList.add(
          'bg-white',
          'shadow-sm',
          'bg-opacity-50',
          'dark:border',
          'dark:border-white/50',
          'dark:bg-transparent'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src={header_bg_color} alt="Header Background" className="w-full" />
      </div>

      <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <img 
          src={isDarkMode ? dark_logo : logo} 
          alt="Logo" 
          className="w-28 cursor-pointer mr-14" 
        />

        <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/50 dark:bg-transparent">
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}>
            <img src={isDarkMode ? sun_icon : moon_icon} alt="Toggle Theme" className="w-6" />
          </button>

          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">
            Contact
            <img src={isDarkMode ? arrow_icon_dark : arrow_icon} alt="Arrow Icon" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <img src={isDarkMode ? menu_white : menu_black} alt="Menu Icon" className="w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul ref={sideMenuRef} className={`side-menu flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 font-Ovo dark:bg-darkHover dark:text-white ${isMenuOpen ? 'open' : ''}`}>
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <img src={isDarkMode ? close_white : close_black} alt="Close Menu" className="w-5 cursor-pointer" />
        </div>

        <li><a href="#top" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About me</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#work" onClick={closeMenu}>My Work</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
      </ul>
    </>
  );
};

export default Navbar;
