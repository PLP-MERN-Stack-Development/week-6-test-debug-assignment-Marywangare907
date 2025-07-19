import React from 'react';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4 text-custom-blue">Welcome to Bug Tracker</h1>
        <p className="text-blue-900 mb-8">Track, manage, and resolve bugs efficiently.</p>
        <div className="flex gap-4">
          <Link to="/login" className="bg-custom-blue text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-colors">Login</Link>
          <Link to="/register" className="bg-white border border-custom-blue text-custom-blue px-6 py-2 rounded font-semibold hover:bg-blue-50 transition-colors">Register</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
