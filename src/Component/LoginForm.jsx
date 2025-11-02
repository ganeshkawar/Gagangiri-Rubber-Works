import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const ADMIN_CREDENTIALS = { username: "shivaji", password: "shivadnya2024" };

  const [adminInput, setAdminInput] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAdminChange = (e) => {
    setAdminInput({ ...adminInput, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      adminInput.username === ADMIN_CREDENTIALS.username &&
      adminInput.password === ADMIN_CREDENTIALS.password
    ) {
      console.log("Login successful! Redirecting...");
      navigate("/admindashboard"); // Redirect to Admin Dashboard
    } else {
      setError("Invalid Username or Password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Side - Form */}
        <div className="login-form">
          <h2>Admin Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleLogin}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={adminInput.username}
              onChange={handleAdminChange}
              required
              autoComplete="off"
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={adminInput.password}
              onChange={handleAdminChange}
              required
            />

            <button type="submit" className="login-button">Login</button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="login-image">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg"
            alt="Admin Login"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
