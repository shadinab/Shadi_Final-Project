// SignUp.jsx
import '../LogIn/LogIn.css'; // Reuse the styles from LogIn.css

const SignUp = ({ onClose }) => {
  const handleSignUp = () => {
    console.log('Signing up...');
  };

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter your username" />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
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
  );
};

export default SignUp;

// // SignUp.jsx
// import '../LogIn/LogIn.css'; // Reuse the styles from LogIn.css

// const SignUp = ({ onClose }) => {
//   const handleSignUp = () => {
//     console.log('Signing up...');
//   };

//   return (
//     <div >
//       <div >
//         <form>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" placeholder="Enter your username" />

//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//           />

//           {/* Add more sign-up form elements as needed */}

//           <div className="button-container">
//             <button type="button" onClick={handleSignUp}>
//               Submit
//             </button>
//             <button type="button" onClick={onClose}>
//               Close
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
