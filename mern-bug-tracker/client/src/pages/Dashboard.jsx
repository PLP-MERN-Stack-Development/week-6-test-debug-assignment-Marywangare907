import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import BugForm from '@/components/BugForm.jsx';
import BugList from '@/components/BugList.jsx';
import useBugs from '@/hooks/useBugs.jsx';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('view');
  const { bugs, loading, loadBugs, createBug, updateBugStatus, deleteBug } = useBugs();

  // Load bugs on mount to persist across reloads/navigation
  useEffect(() => {
    loadBugs();
  }, [loadBugs]);

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-2 text-custom-blue">Bug Tracking Dashboard</h1>
        <p className="text-blue-900 mb-8">Report, track, and manage software bugs efficiently</p>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="flex mb-4">
              <button
                className={`flex-1 py-2 rounded-tl rounded-bl font-semibold transition-colors duration-200 ${activeTab === 'report' ? 'bg-white text-custom-blue border-b-2 border-custom-blue' : 'bg-gray-100 text-gray-400'}`}
                onClick={() => setActiveTab('report')}
              >
                Report Bug
              </button>
              <button
                className={`flex-1 py-2 rounded-tr rounded-br font-semibold transition-colors duration-200 ${activeTab === 'view' ? 'bg-white text-custom-blue border-b-2 border-custom-blue' : 'bg-gray-100 text-gray-400'}`}
                onClick={() => setActiveTab('view')}
              >
                View Bugs ({bugs.length})
              </button>
            </div>
            {activeTab === 'report' && <BugForm onSubmit={createBug} />}
            {activeTab === 'view' && <BugList bugs={bugs} loading={loading} onStatusUpdate={updateBugStatus} onDelete={deleteBug} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
