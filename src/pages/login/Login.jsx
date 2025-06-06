import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');
    // TODO: Replace with actual authentication logic
    console.log('Login data:', { email, password, remember });
    navigate('/');
  };

  return (
    <div className="loginContainer">
      <h1>Log in to Spotify</h1>

      <form onSubmit={handleSubmit} className="loginForm">
        {error && <div className="errorMessage">{error}</div>}

        <label>Email address</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="loginOptions">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="loginBtn">Log In</button>
      </form>

      <p className="signupRedirect">
        Don't have an account? <Link to="/signup">Sign up for Spotify</Link>
      </p>
    </div>
  );
};

export default Login;
