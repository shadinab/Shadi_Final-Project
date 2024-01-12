// InterestsPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InterestsPage.css';
import { updateUser } from '../../api/apiService';

const InterestsPage = ({ userData }) => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [otherInterest, setOtherInterest] = useState('');

const handleInterestToggle = (interest) => {
  setSelectedInterests((prevInterests) => {
    if (prevInterests.includes(interest)) {
      if (interest === 'Other') {
        // If 'Other' interest is unchecked, clear the otherInterest state
        setOtherInterest('');
      }
      return prevInterests.filter((item) => item !== interest);
    } else {
      if (interest === 'Other') {
        // If 'Other' interest is checked, set otherInterest as the default value or the user's input
        return [...prevInterests, interest];
      }
      return [...prevInterests, interest];
    }
  });
};

  const handleOtherInterestChange = (e) => {
    setOtherInterest(e.target.value);
  };

 const handleFinish = async () => {
   try {

      const updatedUserData = {
        ...userData,
        interests: selectedInterests.includes('Other')
          ? [...selectedInterests, otherInterest]
          : selectedInterests,
      };

      const response = await updateUser(updatedUserData);

     if (response.success) {
       // Navigate or perform additional actions after successful user creation
       navigate('/LogIn');
     } else {
       console.error('User creation failed:', response.error);
     }
   } catch (error) {
     console.error('An error occurred during user creation:', error.message);
   }
 };



   const onBack = () => {
     navigate('/SignUp/CreateAccount/AcoountDetails');
   };

  return (
    <div>
      <h1>Select Your Interests</h1>
      <div className="interests-container">
        <div>
          <p>Choose from the following interests:</p>
          <label className="Labeldiv">
            <input
              type="checkbox"
              value="Travelling"
              checked={selectedInterests.includes('Travelling')}
              onChange={() => handleInterestToggle('Travelling')}
            />
            Travelling
          </label>
          <label className="Labeldiv">
            <input
              type="checkbox"
              value="Sailing"
              checked={selectedInterests.includes('Sailing')}
              onChange={() => handleInterestToggle('Sailing')}
            />
            Sailing
          </label>
          <label className="Labeldiv">
            <input
              type="checkbox"
              value="Dancing"
              checked={selectedInterests.includes('Dancing')}
              onChange={() => handleInterestToggle('Dancing')}
            />
            Dancing
          </label>
          {/* Add more interests as needed */}

          <div>
            <label className="Labeldiv">
              <input
                type="checkbox"
                value="Other"
                checked={selectedInterests.includes('Other')}
                onChange={() => handleInterestToggle('Other')}
              />
              Other
            </label>
            {selectedInterests.includes('Other') && (
              <input
                type="text"
                placeholder="Type your other interest"
                value={otherInterest}
                onChange={handleOtherInterestChange}
              />
            )}
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={onBack}>Back</button>
        <button onClick={handleFinish}>Finish</button>
      </div>
    </div>
  );
};

export default InterestsPage;




// InterestsPage.jsx
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './InterestsPage.css';
// import { updateUser } from '../../api/apiService';

// const InterestsPage = ({ userData }) => {
//   const navigate = useNavigate();
//   const [selectedInterests, setSelectedInterests] = useState([]);
//   const [otherInterest, setOtherInterest] = useState('');

// const handleInterestToggle = (interest) => {
//   setSelectedInterests((prevInterests) => {
//     if (prevInterests.includes(interest)) {
//       if (interest === 'Other') {
//         // If 'Other' interest is unchecked, clear the otherInterest state
//         setOtherInterest('');
//       }
//       return prevInterests.filter((item) => item !== interest);
//     } else {
//       if (interest === 'Other') {
//         // If 'Other' interest is checked, set otherInterest as the default value or the user's input
//         return [...prevInterests, interest];
//       }
//       return [...prevInterests, interest];
//     }
//   });
// };

//   const handleOtherInterestChange = (e) => {
//     setOtherInterest(e.target.value);
//   };

//  const handleFinish = async () => {
//    try {

//       const updatedUserData = {
//         ...userData,
//         interests: selectedInterests.includes('Other')
//           ? [...selectedInterests, otherInterest]
//           : selectedInterests,
//       };

//       const response = await updateUser(updatedUserData);

//      if (response.success) {
//        // Navigate or perform additional actions after successful user creation
//        navigate('/LogIn');
//      } else {
//        console.error('User creation failed:', response.error);
//      }
//    } catch (error) {
//      console.error('An error occurred during user creation:', error.message);
//    }
//  };



//    const onBack = () => {
//      navigate('/SignUp/CreateAccount/AcoountDetails');
//    };

//   return (
//     <div>
//       <h1>Select Your Interests</h1>
//       <div className="interests-container">
//         <div>
//           <p>Choose from the following interests:</p>
//           <label className="Labeldiv">
//             <input
//               type="checkbox"
//               value="Travelling"
//               checked={selectedInterests.includes('Travelling')}
//               onChange={() => handleInterestToggle('Travelling')}
//             />
//             Travelling
//           </label>
//           <label className="Labeldiv">
//             <input
//               type="checkbox"
//               value="Sailing"
//               checked={selectedInterests.includes('Sailing')}
//               onChange={() => handleInterestToggle('Sailing')}
//             />
//             Sailing
//           </label>
//           <label className="Labeldiv">
//             <input
//               type="checkbox"
//               value="Dancing"
//               checked={selectedInterests.includes('Dancing')}
//               onChange={() => handleInterestToggle('Dancing')}
//             />
//             Dancing
//           </label>
//           {/* Add more interests as needed */}

//           <div>
//             <label className="Labeldiv">
//               <input
//                 type="checkbox"
//                 value="Other"
//                 checked={selectedInterests.includes('Other')}
//                 onChange={() => handleInterestToggle('Other')}
//               />
//               Other
//             </label>
//             {selectedInterests.includes('Other') && (
//               <input
//                 type="text"
//                 placeholder="Type your other interest"
//                 value={otherInterest}
//                 onChange={handleOtherInterestChange}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="buttons-container">
//         <button onClick={onBack}>Back</button>
//         <button onClick={handleFinish}>Finish</button>
//       </div>
//     </div>
//   );
// };

// export default InterestsPage;




