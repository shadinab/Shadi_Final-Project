import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import CreateAccount from '../CreateAccount/CreateAccount';
import './SignUp.css';
import { createSignUpUser } from '../../api/apiService';

const SignUp = () => {
  const navigate = useNavigate();
  const [showRegistration, setShowRegistration] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
const handleSignUp = async () => {
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
    } else {
      console.error('Registration failed:', response.error);
    }
  } catch (error) {
    console.error('An error occurred during registration:', error.message);
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
//        localStorage.setItem('connectionId', response.data.connectionId);
//        console.log(`connectionId---${response.data.connectionId}`);
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

