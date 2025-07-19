import React from 'react';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

function NotFound() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-gray-600">The page you are looking for does not exist.</p>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
