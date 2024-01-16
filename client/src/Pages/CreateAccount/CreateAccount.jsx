import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import { createUser } from '../../api/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    connectionId: '',
    lookingfor: '',
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
      toast.success('Data has been saved successfully!');

      navigate('/SignUp/CreateAccount/AcoountDetails', { state: { userData } });
    } else {
      console.error('User creation failed:', response.error);
    }
  };

  return (
    <div>
      <ToastContainer />
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
        <label htmlFor="gender">looking for</label>
        <select
          id="gender"
          name="lookingfor"
          value={userData.lookingfor}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default CreateAccount;

{
  /* <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={userData.birthday}
          onChange={handleChange}
        /> */
}

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CreateAccount.css';
// import { createUser } from '../../api/apiService';

// const CreateAccount = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({
//     name: '',
//     connectionId: '',
//     birthday: '',
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

//         <label htmlFor="birthday">Birthday:</label>
//         <input
//           type="date"
//           id="birthday"
//           name="birthday"
//           value={userData.birthday}
//           onChange={handleChange}
//         />

//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default CreateAccount;
