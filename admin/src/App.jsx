import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import LoginPopup from './pages/Login/Login'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "https://food-del-backend-6so3.onrender.com";

  // State for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true); 
  const [loading, setLoading] = useState(true); // State to handle loading

  // Check localStorage for authentication status on initial load
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(storedAuthStatus);
    setShowLogin(!storedAuthStatus); // Show login popup if not authenticated
    setLoading(false); // Set loading to false after checking auth status
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); 
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); 
    setShowLogin(true);
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while checking authentication
  }

  return (
    <div>
      <ToastContainer />
      <Navbar onLogout={handleLogout} />
      <hr />
      <div className="app-content">
        <Sidebar />
        {showLogin ? (
          <LoginPopup setShowLogin={setShowLogin} onLoginSuccess={handleLogin} />
        ) : (
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
