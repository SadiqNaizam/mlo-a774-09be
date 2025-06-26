import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 mt-auto border-t border-gray-200 bg-white">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
        <p className="mb-2 sm:mb-0">
          &copy; {currentYear} QuickAccess Inc. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link to="#" className="hover:text-gray-800 transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-gray-800 transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;