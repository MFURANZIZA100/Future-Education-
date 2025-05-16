import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Menu, X, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Book className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Future Education</span>
            </Link>
            
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/') ? 'border-primary-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Home
              </Link>
              <Link to="/courses" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/courses') ? 'border-primary-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Courses
              </Link>
              <Link to="/events" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/events') ? 'border-primary-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Events
              </Link>
              <Link to="/about" className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${isActive('/about') ? 'border-primary-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                About
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            {isAuthenticated ? (
              <div className="ml-4 flex items-center">
                <Link to="/admin/dashboard" className="btn btn-outline mr-3">
                  Dashboard
                </Link>
                <button onClick={logout} className="btn btn-primary">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/admin/login" className="flex items-center btn btn-primary">
                <LogIn className="h-4 w-4 mr-2" />
                Admin Login
              </Link>
            )}
          </div>
          
          <div className="flex items-center md:hidden">
            <button onClick={toggleMobileMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/') ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`}>
              Home
            </Link>
            <Link to="/courses" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/courses') ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`}>
              Courses
            </Link>
            <Link to="/events" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/events') ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`}>
              Events
            </Link>
            <Link to="/about" className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive('/about') ? 'bg-primary-50 border-primary-500 text-primary-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`}>
              About
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/admin/dashboard" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 text-base font-medium">
                  Dashboard
                </Link>
                <button onClick={logout} className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 text-base font-medium">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/admin/login" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 text-base font-medium">
                Admin Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
 