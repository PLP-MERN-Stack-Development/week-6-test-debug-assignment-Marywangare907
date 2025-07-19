import React from 'react';

const quickLinks = [
  { label: 'Documentation', href: '/documentation', description: 'Complete guide to using the Bug Tracker system.' },
  { label: 'Support', href: '/support', description: 'Get help with Bug Tracker and contact our support team.' },
];

const Footer = () => (
  <footer className="bg-[#00394d] border-t border-[#00394d] py-4 mt-8">
    <div className="max-w-7xl mx-auto px-4 text-center text-blue-100 text-sm">
      <span className="text-white">&copy; {new Date().getFullYear()} Bug Tracker. All rights reserved.</span>
      <div className="mt-2 flex justify-center gap-6">
        {quickLinks.map(link => (
          <a key={link.href} href={link.href} className="text-blue-200 hover:text-white font-medium transition-colors duration-200" title={link.description}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
