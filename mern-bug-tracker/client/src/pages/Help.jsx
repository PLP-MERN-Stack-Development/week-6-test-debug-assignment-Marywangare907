import React from 'react';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

function Help() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Help &amp; FAQ</h1>
        <p className="text-gray-600">Find answers to common questions and learn how to use Bug Tracker.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Help;
