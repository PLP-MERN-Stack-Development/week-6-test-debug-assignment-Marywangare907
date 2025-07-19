import { useState, useCallback } from 'react';
import { fetchBugs, createBug, updateBug, deleteBug } from '../api';

function useBugs() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBugs = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchBugs();
      setBugs(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const create = useCallback(async (formData) => {
    setLoading(true);
    try {
      const bug = await createBug(formData);
      setBugs(prev => [bug, ...prev]);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateStatus = useCallback(async (bugId, newStatus) => {
    setLoading(true);
    try {
      const bug = await updateBug(bugId, { status: newStatus });
      setBugs(prev => prev.map(b => b.id === bugId ? bug : b));
    } finally {
      setLoading(false);
    }
  }, []);

  const remove = useCallback(async (bugId) => {
    setLoading(true);
    try {
      await deleteBug(bugId);
      setBugs(prev => prev.filter(b => b.id !== bugId));
    } finally {
      setLoading(false);
    }
  }, []);

  return { bugs, loading, loadBugs, createBug: create, updateBugStatus: updateStatus, deleteBug: remove };
}

export default useBugs;
