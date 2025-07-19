export const API_BASE_URL = 'http://localhost:5000/api';

export function getToken() {
  return localStorage.getItem('token');
}

export async function fetchBugs() {
  const res = await fetch(`${API_BASE_URL}/bugs`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch bugs');
  return res.json();
}

export async function createBug(bugData) {
  const res = await fetch(`${API_BASE_URL}/bugs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(bugData),
  });
  if (!res.ok) throw new Error('Failed to create bug');
  return res.json();
}

export async function updateBug(id, bugData) {
  const res = await fetch(`${API_BASE_URL}/bugs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(bugData),
  });
  if (!res.ok) throw new Error('Failed to update bug');
  return res.json();
}

export async function deleteBug(id) {
  const res = await fetch(`${API_BASE_URL}/bugs/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  if (!res.ok) throw new Error('Failed to delete bug');
  return res.json();
}
