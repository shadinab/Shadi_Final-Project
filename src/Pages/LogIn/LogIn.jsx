
// LogIn.// LogIn.jsx
import { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import './LogIn.css';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
  };

  const handleSignUp = () => {
    setShowSignUp(true);
    setShowLoginForm(false);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
    setShowLoginForm(true);
  };

  return (
    <div className="login-container">
      <div className={`login-box ${showSignUp ? 'sign-up-box' : ''}`}>
        {showLoginForm && <h2>Login</h2>}
        <form>
          {showLoginForm && (
            <>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="SignUpButton"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </>
          )}

          {showSignUp && <SignUp onClose={handleCloseSignUp} />}
        </form>
      </div>
    </div>
  );
};

export default LogIn;
