
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CreateAccount/CreateAccount.css';
import CreateAccount from '../CreateAccount/CreateAccount'

const SignUp = ({ onClose }) => {
  const navigate = useNavigate();
  const [showRegistration, setShowRegistration] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSignUp = () => {
    // Perform sign-up logic here...
    navigate('/SignUp/CreateAccount');

    // Once sign-up is successful, show the CreateAccount
    setShowRegistration(true);
  };

  return (
    <div>
      
      {showRegistration ? (
        <CreateAccount onClose={() => setShowRegistration(false)} />
      ) : (
        <div>
          <h2>Sign Up</h2>
          <form>
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

            {/* Add more sign-up form elements as needed */}

            <button className="SignUpButton" type="button" onClick={onClose}>
              Close
            </button>
            <button type="button" onClick={handleSignUp}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
