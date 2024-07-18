import React, { useState } from 'react';
import './Loginform.css'; 
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const validEmail = 'mustafamasoud0112@gmail.com';
    const validPassword = '123456'; // Set the valid password

    if (email === validEmail && password === validPassword) {
      navigate('/dashboard');
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-title">Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className="form-label">
          Email:
          <input
            type="text"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Password:
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="form-button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div className="form-links">
        <a href="/create-account">Create Account</a> | <a href="/forgot-password">Forgot Password</a>
      </div>
    </div>
  );
};

export default Loginform;
