// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import LoginPopup from './pages/Login/Login'; // Ensure you import LoginPopup
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "https://food-del-backend-6so3.onrender.com";
  
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [showLogin, setShowLogin] = useState(true); // State to control the visibility of the login popup

  useEffect(() => {
    // Check local storage for the authentication state
    const loggedIn = localStorage.getItem('isAuthenticated');
    if (loggedIn === 'true') {
      setIsAuthenticated(true); // Set authenticated state if the user was logged in
      setShowLogin(false); // Hide the login popup
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true); // Update authentication state
    setShowLogin(false); // Hide login popup on successful login
    localStorage.setItem('isAuthenticated', 'true'); // Store the authentication state in local storage
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Update authentication state to false
    setShowLogin(true); // Show the login popup again
    localStorage.removeItem('isAuthenticated'); // Clear the authentication state from local storage
  };

  return (
    <div>
      <ToastContainer />
      <Navbar onLogout={handleLogout} /> {/* Pass the handleLogout function to Navbar */}
      <hr />
      <div className="app-content">
        <Sidebar />
        {showLogin && !isAuthenticated ? ( // Conditional rendering based on authentication and popup state
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
