import React from 'react';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';

function Documentation() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
        <p className="text-gray-600 mb-8">Complete guide to using the Bug Tracker system.</p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
          <p className="text-gray-700 mb-2">Learn how to report, manage, and resolve bugs efficiently in your projects.</p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Fill out all required fields when reporting a bug.</li>
            <li>Choose the appropriate priority level for each bug.</li>
            <li>Provide detailed descriptions to help with resolution.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Bug Statuses</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li><strong>Open:</strong> Newly reported bug.</li>
            <li><strong>In Progress:</strong> Bug is being worked on.</li>
            <li><strong>Resolved:</strong> Bug has been fixed and is ready for testing.</li>
            <li><strong>Closed:</strong> Bug has been verified and completed.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Priority Levels</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li><strong>Critical:</strong> System crashes or data loss.</li>
            <li><strong>High:</strong> Major functionality broken.</li>
            <li><strong>Medium:</strong> Minor functionality issues.</li>
            <li><strong>Low:</strong> Cosmetic or enhancement requests.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Best Practices</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Keep bug reports clear and concise.</li>
            <li>Update bug statuses as work progresses.</li>
            <li>Communicate with your team for faster resolution.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Documentation;
