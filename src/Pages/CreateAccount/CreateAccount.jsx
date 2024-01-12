import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import { createUser } from '../../api/apiService';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    gender: '',
    liveIn: '',
    connectionId: '',
    // Correct the property name
  });

  useEffect(() => {
    // Retrieve connectionId from local storage
    const storedConnectionId = localStorage.getItem('connectionId');
    if (storedConnectionId) {
      setUserData((prevData) => ({
        ...prevData,
        connectionId: storedConnectionId,
      }));
    }
  }, []); // Run this effect only once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = async () => {
    // Assume userData is coming from props or state
    const response = await createUser(userData);

    if (response.success) {
      navigate('/SignUp/CreateAccount/AcoountDetails', { state: { userData } });
    } else {
      console.error('User creation failed:', response.error);
    }
  };

  return (
    <div>
      <h1>Create Account</h1>
      <div className="form-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />

        <label htmlFor="gender">Looking For:</label>
        <select
          id="gender"
          name="gender"
          value={userData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={userData.birthday}
          onChange={handleChange}
        /> */}

        <label htmlFor="liveIn">liveIn:</label>
        <input
          type="text"
          id="liveIn"
          name="liveIn"
          value={userData.liveIn}
          onChange={handleChange}
        />

        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default CreateAccount;




// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CreateAccount.css';
// import { createUser } from '../../api/apiService';

// const CreateAccount = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({
//     name: '',
//     gender: '',
//     liveIn: '',
//     connectionId: '',
//     // Correct the property name
//   });

//   useEffect(() => {
//     // Retrieve connectionId from local storage
//     const storedConnectionId = localStorage.getItem('connectionId');
//     if (storedConnectionId) {
//       setUserData((prevData) => ({
//         ...prevData,
//         connectionId: storedConnectionId,
//       }));
//     }
//   }, []); // Run this effect only once when the component mounts

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleNext = async () => {
//     // Assume userData is coming from props or state
//     const response = await createUser(userData);

//     if (response.success) {
//       navigate('/SignUp/CreateAccount/AcoountDetails', { state: { userData } });
//     } else {
//       console.error('User creation failed:', response.error);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Account</h1>
//       <div className="form-container">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={userData.name}
//           onChange={handleChange}
//         />

//         <label htmlFor="gender">Looking For:</label>
//         <select
//           id="gender"
//           name="gender"
//           value={userData.gender}
//           onChange={handleChange}
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>

//         <label htmlFor="birthday">Birthday:</label>
//         <input
//           type="date"
//           id="birthday"
//           name="birthday"
//           value={userData.birthday}
//           onChange={handleChange}
//         />

//         <label htmlFor="liveIn">liveIn:</label>
//         <input
//           type="text"
//           id="liveIn"
//           name="liveIn"
//           value={userData.liveIn}
//           onChange={handleChange}
//         />

//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default CreateAccount;
