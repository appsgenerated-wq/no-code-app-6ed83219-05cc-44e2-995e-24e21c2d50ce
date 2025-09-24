import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border border-gray-200">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-blue-600">
        {icon}
      </div>
      <div className="mt-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
