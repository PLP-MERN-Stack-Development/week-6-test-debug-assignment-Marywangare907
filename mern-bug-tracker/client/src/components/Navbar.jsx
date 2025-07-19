import React from 'react';
import { Bug } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.jsx';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-[#00394d] shadow-sm border-b border-[#00394d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              <Bug className="h-6 w-6 text-[#00394d]" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Bug Tracker</h1>
              <p className="text-sm text-blue-200">Project Management System</p>
            </div>
          </Link>
          <div className="flex items-center space-x-6">
            {isAuthPage ? (
              <>
                {location.pathname !== '/login' && <Link to="/login" className="text-white font-medium transition-colors duration-200 bg-custom-blue px-4 py-1 rounded hover:bg-blue-700">Login</Link>}
                {location.pathname !== '/register' && <Link to="/register" className="text-custom-blue bg-white border border-custom-blue font-medium transition-colors duration-200 px-4 py-1 rounded hover:bg-blue-50">Register</Link>}
              </>
            ) : user ? (
              <>
                <Link to="/dashboard" className="text-white hover:text-blue-300 font-medium transition-colors duration-200">Dashboard</Link>
                <a href="#reports" className="text-white hover:text-blue-300 font-medium transition-colors duration-200">Reports</a>
                <Link to="/settings" className="text-white hover:text-blue-300 font-medium transition-colors duration-200">Settings</Link>
                <button onClick={handleLogout} className="ml-4 bg-white text-custom-blue border border-custom-blue px-4 py-1 rounded font-medium hover:bg-blue-50 transition-colors">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white font-medium transition-colors duration-200 bg-custom-blue px-4 py-1 rounded hover:bg-blue-700">Login</Link>
                <Link to="/register" className="text-custom-blue bg-white border border-custom-blue font-medium transition-colors duration-200 px-4 py-1 rounded hover:bg-blue-50">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
