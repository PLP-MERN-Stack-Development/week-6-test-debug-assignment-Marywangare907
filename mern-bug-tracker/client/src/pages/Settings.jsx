import React, { useState } from 'react';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import { useAuth } from '@/context/AuthContext.jsx';
import { updateProfile } from '@/api.user.js';

function Settings() {
  const { user, login } = useAuth();
  const [form, setForm] = useState({
    username: user?.username || '',
    email: user?.email || '',
  });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSaving(true);
    setSuccess('');
    setError('');
    try {
      const updated = await updateProfile(form);
      login(updated); // update user in context
      setSuccess('Profile updated!');
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-custom-blue">Account Settings</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 max-w-lg mx-auto border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          {success && <div className="text-green-600 mb-2">{success}</div>}
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors" disabled={saving}>
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
        <div className="text-xs text-gray-400 text-center mt-6">More account features coming soon.</div>
      </main>
      <Footer />
    </div>
  );
}

export default Settings;
