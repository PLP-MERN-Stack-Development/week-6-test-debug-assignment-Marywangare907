import React, { useState } from 'react';
import { useToast } from '@/components/ui/sonner';

function BugForm({ onSubmit }) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    reporter: '',
    assignee: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.title) {
      errors.title = 'Title is required';
    }
    if (!formData.description) {
      errors.description = 'Description is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      showToast('Bug reported successfully!');
      onSubmit(formData);
      setFormData({
        title: '',
        description: '',
        priority: 'Medium',
        reporter: '',
        assignee: '',
      });
    } else {
      showToast('Please fill all required fields.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 border border-gray-200 max-w-2xl mx-auto mt-8">
      <h3 className="text-lg font-semibold text-custom-blue mb-4 flex items-center gap-2">
        <span className="text-2xl font-bold">+</span> Report New Bug
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bug Title*</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue"
            placeholder="Enter bug title"
          />
          {formErrors.title && <span className="text-red-500 text-xs">{formErrors.title}</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue"
          placeholder="Describe the bug in detail..."
          rows={4}
        />
        {formErrors.description && <span className="text-red-500 text-xs">{formErrors.description}</span>}
        <div className="text-xs text-gray-400 text-right mt-1">{formData.description.length}/1000 characters</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Reporter*</label>
          <input
            type="text"
            name="reporter"
            value={formData.reporter}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Assignee</label>
          <input
            type="text"
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-custom-blue"
            placeholder="Assign to (optional)"
          />
        </div>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors">
        Create Bug Report
      </button>
    </form>
  );
}

export default BugForm;
