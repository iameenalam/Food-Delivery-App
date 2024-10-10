import React, { useState } from "react";
import "./Login.css";

const LoginPopup = ({ setShowLogin, onLoginSuccess }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  
  const [error, setError] = useState("");

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = (event) => {
    event.preventDefault();
    const { email, password } = data;

    // Check user credentials
    if (
      email === process.env.REACT_APP_LOGIN_EMAIL &&
      password === process.env.REACT_APP_LOGIN_PASSWORD
    ) {
      onLoginSuccess(); // Call the success function passed as a prop
      setShowLogin(false); // Close the login popup
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Login</h2>
        </div>
        <div className="login-popup-inputs">
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </form>
    </div>
  );
};

export default LoginPopup;
