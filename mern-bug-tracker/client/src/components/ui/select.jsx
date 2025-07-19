import React from 'react';

export function Select({ className = '', children, ...props }) {
  return (
    <select
      className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children, ...props }) {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectTrigger({ children, ...props }) {
  return <>{children}</>;
}

export function SelectValue({ children }) {
  return <>{children}</>;
}
