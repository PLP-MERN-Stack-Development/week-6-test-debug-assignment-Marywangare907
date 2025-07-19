import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition-colors border-4 border-red-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
