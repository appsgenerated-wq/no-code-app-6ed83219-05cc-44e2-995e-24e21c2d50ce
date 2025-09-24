import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, UserIcon } from '@heroicons/react/24/outline';

const Card = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img 
          className="h-48 w-full object-cover"
          src={recipe.photoUrl || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'}
          alt={recipe.title} 
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate">
          {recipe.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {recipe.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1"/>
                <span>{recipe.author ? recipe.author.name : 'Unknown'}</span>
            </div>
             <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{recipe.prepTime}</span>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
