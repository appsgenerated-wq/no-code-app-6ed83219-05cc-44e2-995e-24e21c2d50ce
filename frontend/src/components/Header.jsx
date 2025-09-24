import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import { FireIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const { user, logout } = useAuth();

  const navLinkClasses = ({ isActive }) => 
    `text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-100 text-gray-900' : ''}`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <FireIcon className="h-8 w-auto text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">BrownFood</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/dashboard" className={navLinkClasses}>Recipes</NavLink>
                {user && <NavLink to="/my-recipes" className={navLinkClasses}>My Recipes</NavLink>}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-2">
              {user ? (
                <>
                  <span className="text-gray-600 text-sm">Hi, {user.name}</span>
                   <Link to="/recipes/new">
                    <Button variant="primary" size="sm">New Recipe</Button>
                  </Link>
                  <Button variant="secondary" size="sm" onClick={logout}>Logout</Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="secondary" size="sm">Sign In</Button>
                  </Link>
                  <Link to="/register">
                    <Button size="sm">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
