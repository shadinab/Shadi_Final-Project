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
        return prevInterests.filter((item) => item !== interest);
      } else {
        return [...prevInterests, interest];
      }
    });
  };

  const handleOtherInterestChange = (e) => {
    setOtherInterest(e.target.value);
  };

 const handleFinish = async () => {
   try {
     // Combine selected interests with the "Other" interest if provided
     const response = await updateUser({
       ...userData,
       interests: selectedInterests,
     });

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



// // InterestsPage.jsx
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './InterestsPage.css';

// const InterestsPage = ({ userData }) => {
//   const navigate = useNavigate();
//   const [selectedInterests, setSelectedInterests] = useState([]);
//   const [otherInterest, setOtherInterest] = useState('');

//   const handleInterestToggle = (interest) => {
//     setSelectedInterests((prevInterests) => {
//       if (prevInterests.includes(interest)) {
//         return prevInterests.filter((item) => item !== interest);
//       } else {
//         return [...prevInterests, interest];
//       }
//     });
//   };

//   const handleOtherInterestChange = (e) => {
//     setOtherInterest(e.target.value);
//   };

//   const handleFinish = () => {
//     // Combine selected interests with the "Other" interest if provided
//     const finalInterests = otherInterest
//       ? [...selectedInterests, otherInterest]
//       : selectedInterests;

//     // You can perform any action needed with the final interests
//     console.log('Selected Interests:', finalInterests);

//     // For now, let's navigate back to the home page
//     navigate('/LogIn');
//   };
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
