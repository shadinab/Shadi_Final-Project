import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateAccount from '../CreateAccount/CreateAccount';
import './SignUp.css';
import { createSignUpUser } from '../../api/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [showRegistration, setShowRegistration] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const usernameRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

    const isUsernameValid = () => usernameRegex.test(username);
    const isPasswordValid = () => passwordRegex.test(password);


const handleSignUp = async () => {

  setUsernameError('');
  setPasswordError('');

  if (!isUsernameValid()) {
    setUsernameError(
      'Invalid username format '
    );
        toast.error('Invalid username format');

    return;
  }
  ggggg

  if (!isPasswordValid()) {
    setPasswordError(
      'Invalid password format'
    );
        toast.error('Invalid password format');

    return;
  }
 
 
  try {
    const response = await createSignUpUser({
      name: username,
      email: username,
      password: password,
    });

    if (response.success) {
       localStorage.setItem('connectionId', response.connectionId);
       console.log(`connectionId---${response.connectionId}`);
      setShowRegistration(true);
      navigate('/SignUp/CreateAccount');
        toast.success('Signup successful!');


    } else {
      console.error('Registration failed:', response.error);
        toast.error(`Signup failed: ${response.error}`);

    }
  } catch (error) {
    console.error('An error occurred during registration:', error.message);
      toast.error(`An error occurred: ${error.message}`);

  }
};
  const onClose = () => {
    // Perform sign-up logic here...
    navigate('/Login');

    // Once sign-up is successful, show the CreateAccount
    setShowRegistration(true);
  };

  return (
    <div>
      <ToastContainer />
      {showRegistration ? (
        <CreateAccount onClose={() => setShowRegistration(false)} />
      ) : (
        <div className="SignUpContainer">
          <div className="SignUpBox">
            <h2>Sign Up</h2>
            <form>
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

              {/* Add more sign-up form elements as needed */}

              <button className="SignUpButton" type="button" onClick={onClose}>
                Close
              </button>
              <button type="button" onClick={handleSignUp}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// import CreateAccount from '../CreateAccount/CreateAccount';
// import './SignUp.css';
// import { createSignUpUser } from '../../api/apiService';


// const SignUp = () => {
//   const navigate = useNavigate();
//   const [showRegistration, setShowRegistration] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  
// const handleSignUp = async () => {
//   try {
//     const response = await createSignUpUser({
//       name: username,
//       email: username,
//       password: password,
//     });

//     if (response.success) {
//        localStorage.setItem('connectionId', response.connectionId);
//        console.log(`connectionId---${response.connectionId}`);
//       setShowRegistration(true);
//       navigate('/SignUp/CreateAccount');
//     } else {
//       console.error('Registration failed:', response.error);
//     }
//   } catch (error) {
//     console.error('An error occurred during registration:', error.message);
//   }
// };
//   const onClose = () => {
//     // Perform sign-up logic here...
//     navigate('/Login');

//     // Once sign-up is successful, show the CreateAccount
//     setShowRegistration(true);
//   };

//   return (
//     <div>
//       {showRegistration ? (
//         <CreateAccount onClose={() => setShowRegistration(false)} />
//       ) : (
//         <div className="SignUpContainer">
//           <div className="SignUpBox">
//             <h2>Sign Up</h2>
//             <form>
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

//               {/* Add more sign-up form elements as needed */}

//               <button className="SignUpButton" type="button" onClick={onClose}>
//                 Close
//               </button>
//               <button type="button" onClick={handleSignUp}>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUp;

