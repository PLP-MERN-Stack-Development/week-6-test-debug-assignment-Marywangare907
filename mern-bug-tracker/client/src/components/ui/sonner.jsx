import React, { useEffect, useState } from 'react';

// Simple toast context and provider
const ToastContext = React.createContext({
  showToast: (msg) => {},
});

export function useToast() {
  return React.useContext(ToastContext);
}

export function Toaster() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
      {toasts.map((toast, idx) => (
        <div key={idx} style={{ marginBottom: 8, background: '#333', color: '#fff', padding: '12px 24px', borderRadius: 6, minWidth: 200 }}>
          {toast}
        </div>
      ))}
      <ToastContext.Provider value={{ showToast: (msg) => setToasts((prev) => [...prev, msg]) }} />
    </div>
  );
}
