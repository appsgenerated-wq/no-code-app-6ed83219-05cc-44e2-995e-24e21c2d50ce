import React from 'react';

const Input = ({ label, type = 'text', name, value, onChange, required = false, error, placeholder }) => {
  const id = name || label.toLowerCase().replace(' ', '-');
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name || id}
          type={type}
          autoComplete={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
        />
         {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
