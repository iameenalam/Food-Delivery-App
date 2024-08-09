import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import MyOrders from "./pages/MyOrders/MyOrders";
import Verify from "./pages/Verify/Verify";

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Conditionally render the LoginPopup if showLogin is true */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      
      <div className="app">
        {/* Pass setShowLogin to Navbar if needed for any login triggers */}
        <Navbar setShowLogin={setShowLogin} />
        
        {/* Pass setShowLogin to Cart to trigger the login popup from there */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart setShowLogin={setShowLogin}/>} />
          <Route path='/order' element={<PlaceOrder/>} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders/>} />
        </Routes>
      </div>
      
      <Footer />
    </>
  );
};

export default App;
