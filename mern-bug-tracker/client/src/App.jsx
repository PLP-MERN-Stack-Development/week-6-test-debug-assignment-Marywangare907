import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import ErrorBoundary from '@/components/ErrorBoundary.jsx';
import Index from '@/pages/Index.jsx';
import Help from '@/pages/Help.jsx';
import Documentation from '@/pages/Documentation.jsx';
import Support from '@/pages/Support.jsx';
import Dashboard from '@/pages/Dashboard.jsx';
import NotFound from '@/pages/NotFound.jsx';
import Login from '@/pages/Login.jsx';
import Register from '@/pages/Register.jsx';
import Settings from '@/pages/Settings.jsx';
import { AuthProvider } from '@/context/AuthContext.jsx';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    // <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/help" element={<Help />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </AuthProvider>
        <Toaster />
      </QueryClientProvider>
    // </ErrorBoundary>
  );
}

export default App;


