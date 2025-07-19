import React from 'react';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

function Support() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-custom-blue">Support</h1>
        <p className="text-blue-900 mb-6">Get help with Bug Tracker and contact our support team.</p>
        <div className="bg-white rounded-lg shadow p-8 max-w-lg mx-auto border-t-4 border-custom-blue">
          <h2 className="text-xl font-semibold text-custom-blue mb-2">Contact Us</h2>
          <p className="text-gray-700 mb-4">We're here to help! Reach out to us using the details below:</p>
          <ul className="text-blue-900 space-y-2">
            <li><span className="font-semibold">Email:</span> <a href="mailto:support@bugtracker.com" className="text-custom-blue underline">support@bugtracker.com</a></li>
            <li><span className="font-semibold">Phone:</span> <a href="tel:+1234567890" className="text-custom-blue underline">+1 (234) 567-890</a></li>
            <li><span className="font-semibold">Live Chat:</span> <a href="#" className="text-custom-blue underline">Start a chat</a></li>
            <li><span className="font-semibold">Address:</span> 123 Bug Tracker Lane, Suite 100, Debug City, 12345</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Support;
