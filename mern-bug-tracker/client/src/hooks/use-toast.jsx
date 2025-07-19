import { useState } from 'react';

function useToast() {
  const [toasts, setToasts] = useState([]);
  const showToast = (msg) => setToasts((prev) => [...prev, msg]);
  return { showToast, toasts };
}

export default useToast;
