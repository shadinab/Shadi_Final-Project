
// LogIn.// LogIn.jsx
import { useState } from 'react';
import SignUp from '../SignUp/SignUp';
// import MyProfile from '../MyProfile/MyProfile';
// import { useUser } from '../../context/UserContext'; // Update the path

import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';
import './LogIn.css';


const LogIn = () => {
//  const { login,user } = useUser(); 
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleLogin = async () => {
    try {
      // Make a login request to your back-end API using Axios
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email: username, // Assuming email is the same as the username for simplicity
          password: password,
        }
      );

      console.log('Axios login response:', response);

     if (response.data.success) {
            localStorage.setItem(
              'tokenconnectionId',
              response.data.connectionId
            );
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






// // LogIn.// LogIn.jsx
// import { useState } from 'react';
// import SignUp from '../SignUp/SignUp';
// // import MyProfile from '../MyProfile/MyProfile';
// // import { useUser } from '../../context/UserContext'; // Update the path

// import axios from 'axios'; // Import Axios
// import { useNavigate } from 'react-router-dom';
// import './LogIn.css';


// const LogIn = () => {
// //  const { login,user } = useUser(); 
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(true);
//   // const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   const handleLogin = async () => {
//     try {
//       // Make a login request to your back-end API using Axios
//       const response = await axios.post(
//         'http://localhost:5000/api/auth/login',
//         {
//           email: username, // Assuming email is the same as the username for simplicity
//           password: password,
//         }
//       );

//       console.log('Axios login response:', response);

//      if (response.data.success) {
//       // login(response); // Set login status to true
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

