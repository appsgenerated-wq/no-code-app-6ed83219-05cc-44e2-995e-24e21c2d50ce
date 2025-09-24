import React from 'react';
import { Link } from 'react-router-dom';
import { FireIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <Link to="/" className="flex items-center">
                <FireIcon className="h-8 w-auto text-orange-400" />
                <span className="ml-2 text-xl font-bold text-white">BrownFood</span>
             </Link>
            <p className="text-gray-400 text-base">
              Sharing the warmth of home cooking.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/dashboard" className="text-base text-gray-400 hover:text-white">Recipes</Link></li>
                  <li><Link to="/register" className="text-base text-gray-400 hover:text-white">Sign Up</Link></li>
                  <li><Link to="/login" className="text-base text-gray-400 hover:text-white">Sign In</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="#" className="text-base text-gray-400 hover:text-white">Privacy</Link></li>
                  <li><Link to="#" className="text-base text-gray-400 hover:text-white">Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2024 BrownFood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
