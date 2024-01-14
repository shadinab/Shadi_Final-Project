// LogIn.// LogIn.jsx
import { useState } from 'react';
import SignUp from '../SignUp/SignUp';
// import MyProfile from '../MyProfile/MyProfile';
// import { useUser } from '../../context/UserContext'; // Update the path

import { apiService } from '../../api/apiService'; // Import your exported apiService

// import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
  //  const { login,user } = useUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Regular expressions for validation
  const usernameRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Alphanumeric, underscores, and hyphens, 3 to 16 characters
  const passwordRegex = /^[a-zA-Z0-9]{6,}$/; // Minimum eight characters, at least one letter and one number

  // Function to check if the username is valid
  const isUsernameValid = () => usernameRegex.test(username);

  // Function to check if the password is valid
  const isPasswordValid = () => passwordRegex.test(password);

  const handleLogin = async () => {
    setUsernameError('');
    setPasswordError('');

    if (!isUsernameValid()) {
      setUsernameError('Invalid username format');
      return;
    }

    if (!isPasswordValid()) {
      setPasswordError('Invalid password format');
      return;
    }

    try {
      // Make a login request to your back-end API using Axios
      const response = await apiService.post('/auth/login', {
        email: username, // Assuming email is the same as the username for simplicity
        password: password,
      });

      //    const handleLogin = async () => {
      // try {
      //   // Make a login request to your back-end API using Axios
      //   const response = await axios.post(
      //     'http://localhost:5000/api/auth/login',
      //     {
      //       email: username, // Assuming email is the same as the username for simplicity
      //       password: password,
      //     }
      //   );

      console.log('Axios login response:', response);

      if (response.data.success) {
        localStorage.setItem('tokenconnectionId', response.data.connectionId);
        console.log(`logininconnectionId-${response.data.connectionId}`);

        // login(response); // Set login status to true
        navigate('/');
      } else {
        console.error('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error('An error occurred during login:', error.message);
    }
  };

  const handleSignUp = () => {
    navigate('/SignUp');
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
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError('');
                }}
              />
              <span className="error-message">{usernameError}</span>

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError('');
                }}
              />
              <span className="error-message">{passwordError}</span>

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

// LogIn.// LogIn.jsx
// import { useState } from 'react';
// import SignUp from '../SignUp/SignUp';
// // import MyProfile from '../MyProfile/MyProfile';
// // import { useUser } from '../../context/UserContext'; // Update the path

// import { apiService } from '../../api/apiService'; // Import your exported apiService

// // import axios from 'axios'; // Import Axios
// import { useNavigate } from 'react-router-dom';
// import './LogIn.css';

// const LogIn = () => {
//   //  const { login,user } = useUser();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(true);
//   // const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   const handleLogin = async () => {
//     try {
//       // Make a login request to your back-end API using Axios
//       const response = await apiService.post('/auth/login', {
//         email: username, // Assuming email is the same as the username for simplicity
//         password: password,
//       });

//       //    const handleLogin = async () => {
//       // try {
//       //   // Make a login request to your back-end API using Axios
//       //   const response = await axios.post(
//       //     'http://localhost:5000/api/auth/login',
//       //     {
//       //       email: username, // Assuming email is the same as the username for simplicity
//       //       password: password,
//       //     }
//       //   );

//       console.log('Axios login response:', response);

//       if (response.data.success) {
//         localStorage.setItem('tokenconnectionId', response.data.connectionId);
//         console.log(`logininconnectionId-${response.data.connectionId}`);

//         // login(response); // Set login status to true
//         navigate('/');
//       } else {
//         console.error('Login failed:', response.data.error);
//       }
//     } catch (error) {
//       console.error('An error occurred during login:', error.message);
//     }
//   };

//   const handleSignUp = () => {
//     navigate('/SignUp');
//     setShowSignUp(true);
//     setShowLoginForm(false);
//   };

//   const handleCloseSignUp = () => {
//     setShowSignUp(false);
//     setShowLoginForm(true);
//   };

//   return (
//     <div className="login-container">
//       <div className={`login-box ${showSignUp ? 'sign-up-box' : ''}`}>
//         {showLoginForm && <h2>Login</h2>}
//         <form>
//           {showLoginForm && (
//             <>
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />

//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 className="SignUpButton"
//                 type="button"
//                 onClick={handleSignUp}
//               >
//                 Sign Up
//               </button>
//               <button type="button" onClick={handleLogin}>
//                 Login
//               </button>
//             </>
//           )}

//           {showSignUp && <SignUp onClose={handleCloseSignUp} />}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LogIn;

// LogIn.// LogIn.jsx
// import { useState } from 'react';
// import SignUp from '../SignUp/SignUp';
// // import MyProfile from '../MyProfile/MyProfile';
// // import { useUser } from '../../context/UserContext'; // Update the path

// import { apiService } from '../../api/apiService'; // Import your exported apiService

// // import axios from 'axios'; // Import Axios
// import { useNavigate } from 'react-router-dom';
// import './LogIn.css';

// const LogIn = () => {
//   //  const { login,user } = useUser();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(true);
//   // const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   const handleLogin = async () => {
//     try {
//       // Make a login request to your back-end API using Axios
//       const response = await apiService.post('/auth/login', {
//         email: username, // Assuming email is the same as the username for simplicity
//         password: password,
//       });

//       //    const handleLogin = async () => {
//       // try {
//       //   // Make a login request to your back-end API using Axios
//       //   const response = await axios.post(
//       //     'http://localhost:5000/api/auth/login',
//       //     {
//       //       email: username, // Assuming email is the same as the username for simplicity
//       //       password: password,
//       //     }
//       //   );

//       console.log('Axios login response:', response);

//       if (response.data.success) {
//         localStorage.setItem('tokenconnectionId', response.data.connectionId);
//         console.log(`logininconnectionId-${response.data.connectionId}`);

//         // login(response); // Set login status to true
//         navigate('/');
//       } else {
//         console.error('Login failed:', response.data.error);
//       }
//     } catch (error) {
//       console.error('An error occurred during login:', error.message);
//     }
//   };

//   const handleSignUp = () => {
//     navigate('/SignUp');
//     setShowSignUp(true);
//     setShowLoginForm(false);
//   };

//   const handleCloseSignUp = () => {
//     setShowSignUp(false);
//     setShowLoginForm(true);
//   };

//   return (
//     <div className="login-container">
//       <div className={`login-box ${showSignUp ? 'sign-up-box' : ''}`}>
//         {showLoginForm && <h2>Login</h2>}
//         <form>
//           {showLoginForm && (
//             <>
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />

//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 className="SignUpButton"
//                 type="button"
//                 onClick={handleSignUp}
//               >
//                 Sign Up
//               </button>
//               <button type="button" onClick={handleLogin}>
//                 Login
//               </button>
//             </>
//           )}

//           {showSignUp && <SignUp onClose={handleCloseSignUp} />}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LogIn;
