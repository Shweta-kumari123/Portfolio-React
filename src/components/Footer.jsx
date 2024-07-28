import React from 'react';
import logo from '../assets/logo.png';
import dark_logo from '../assets/dark_logo.png';
import mail_icon from '../assets/mail_icon.png';
import mail_icon_dark from '../assets/mail_icon_dark.png';

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <img 
          src={logo} 
          alt="Company Logo" 
          className="w-36 mx-auto mb-2 dark:hidden" 
        />
        <img 
          src={dark_logo} 
          alt="Company Logo" 
          className="w-36 mx-auto mb-2 hidden dark:block" 
        />
        
        <div className="w-max flex items-center gap-2 mx-auto">
          <img 
            src={mail_icon} 
            alt="Mail Icon" 
            className="w-6 dark:hidden" 
          />
          <img 
            src={mail_icon_dark} 
            alt="Mail Icon" 
            className="w-6 hidden dark:block" 
          />
          <a href="mailto:sk1581151@gmail.com" className="ml-2">sk1581151@gmail.com</a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2024 Shweta Kumarie. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a 
              href="https://github.com/Shweta-kumari123" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/shweta-kumari123/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
          </li>
          <li>
           
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
