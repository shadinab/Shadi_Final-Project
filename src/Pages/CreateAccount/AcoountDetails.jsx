import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import { updateUser } from '../../api/apiService';

const AcoountDetails = () => {
  // State to hold form data
  const navigate = useNavigate();
// const { userId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    background: '',
    description: '',
    details: {
      liveIn: '',
      workAs: '',
      education: '',
      know: '',
      relationship: '',
      haveKids: '',
      smoke: '',
      drink: '',
      height: '',
      bodyType: '',
      eyes: '',
      hair: '',
    },
    interests: [],
    preferences: {
      gender: '',
      ageRange: '',
      idealMan: {
        character: '',
        job: '',
        senseOfHumor: '',
        grooming: '',
        physique: '',
        arms: '',
        back: '',
      },
      interests: [],
      personalityTraits: [],
      idealDynamic: '',
    },
    photos: [],
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      details: {
        ...prevData.details,
        [name.startsWith('details.') ? name.slice(8) : name]: value,
      },
      preferences: {
        ...prevData.preferences,
        [name.startsWith('preferences.') ? name.slice(12) : name]: value,
        idealMan: {
          ...prevData.preferences.idealMan,
          [name.startsWith('preferences.idealMan.') ? name.slice(23) : name]:
            value,
        },
      },
    }));
  };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };


  const onBack = () => {
    navigate('/SignUp/CreateAccount');
  };

  const handleNext = async (e) => {
    e.preventDefault();

    try {
      // Assume formData is coming from props or state
      const response = await updateUser(userId,formData);

      if (response.success) {
        // Reset the form after successful user creation
        setFormData({
          avatar: '',
          background: '',
          description: '',
          details: {
            workAs: '',
            education: '',
            know: '',
            relationship: '',
            haveKids: '',
            smoke: '',
            drink: '',
            height: '',
            bodyType: '',
            eyes: '',
            hair: '',
          },
          interests: [],
          preferences: {
            ageRange: '',
            idealMan: {
              character: '',
              job: '',
              senseOfHumor: '',
              grooming: '',
              physique: '',
              arms: '',
              back: '',
            },
            personalityTraits: [],
            idealDynamic: '',
          },
          photos: [],
        });

        // Navigate to the next page
        navigate('/SignUp/CreateAccount/AcoountDetails/interests', {
          state: { formData },
        });
      } else {
        console.error('User creation failed:', response.error);
      }
    } catch (error) {
      console.error('An error occurred during user creation:', error.message);
    }
  };

  return (
    <div className="registration-container">
      <h2>Please fill the details</h2>
      <form className="form-container">
        <label>Avatar Image:</label>
        <input
          className="input"
          type="text"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
        />

        <label>Background Image:</label>
        <input
          className="input"
          type="text"
          name="background"
          value={formData.background}
          onChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          className="input"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label>Work As:</label>
        <input
          className="input"
          type="text"
          name="details.workAs"
          value={formData.details.workAs}
          onChange={handleChange}
        />

        <label>Education:</label>
        <input
          className="input"
          type="text"
          name="details.education"
          value={formData.details.education}
          onChange={handleChange}
        />

        <label>Age Range:</label>
        <input
          className="input"
          type="text"
          name="preferences.ageRange"
          value={formData.preferences.ageRange}
          onChange={handleChange}
        />
        {/* Add more input fields for the 'details', 'interests', and 'preferences' sections similarly */}
        <button onClick={onBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default AcoountDetails;






// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CreateAccount.css';

// const AcoountDetails = () => {
//   // State to hold form data
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     avatar: '',
//     background: '',
//     description: '',
//     details: {
//       liveIn: '',
//       workAs: '',
//       education: '',
//       know: '',
//       relationship: '',
//       haveKids: '',
//       smoke: '',
//       drink: '',
//       height: '',
//       bodyType: '',
//       eyes: '',
//       hair: '',
//     },
//     interests: [],
//     preferences: {
//       gender: '',
//       ageRange: '',
//       idealMan: {
//         character: '',
//         job: '',
//         senseOfHumor: '',
//         grooming: '',
//         physique: '',
//         arms: '',
//         back: '',
//       },
//       interests: [],
//       personalityTraits: [],
//       idealDynamic: '',
//     },
//     photos: [],
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//    const onBack = () => {
//      navigate('/SignUp/CreateAccount');
//    };

//   const handleNext = (e) => {
//     e.preventDefault();
//     // Reset the form after submission
//     setFormData({
//       avatar: '',
//       background: '',
//       description: '',
//       details: {
//         workAs: '',
//         education: '',
//         know: '',
//         relationship: '',
//         haveKids: '',
//         smoke: '',
//         drink: '',
//         height: '',
//         bodyType: '',
//         eyes: '',
//         hair: '',
//       },
//       interests: [],
//       preferences: {
//         ageRange: '',
//         idealMan: {
//           character: '',
//           job: '',
//           senseOfHumor: '',
//           grooming: '',
//           physique: '',
//           arms: '',
//           back: '',
//         },
//         personalityTraits: [],
//         idealDynamic: '',
//       },
//       photos: [],
//     });
//     navigate('/SignUp/CreateAccount/AcoountDetails/interests', {
//       state: { formData },
//     });
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="registration-container">
//       <h2>Please fill the details</h2>
//       <form className="form-container">
//         <label>Avatar Image:</label>
//         <input
//           className="input"
//           type="text"
//           name="avatar"
//           value={formData.avatar}
//           onChange={handleChange}
//         />

//         <label>Background Image:</label>
//         <input
//           className="input"
//           type="text"
//           name="background"
//           value={formData.background}
//           onChange={handleChange}
//         />

//         <label>Description:</label>
//         <textarea
//           className="input"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         ></textarea>

//         <label>Work As:</label>
//         <input
//           className="input"
//           type="text"
//           name="details.workAs"
//           value={formData.details.workAs}
//           onChange={handleChange}
//         />

//         <label>Education:</label>
//         <input
//           className="input"
//           type="text"
//           name="details.education"
//           value={formData.details.education}
//           onChange={handleChange}
//         />

//         <label>Age Range:</label>
//         <input
//           className="input"
//           type="text"
//           name="preferences.ageRange"
//           value={formData.preferences.ageRange}
//           onChange={handleChange}
//         />
//         {/* Add more input fields for the 'details', 'interests', and 'preferences' sections similarly */}
//         <button onClick={onBack}>Back</button>
//         <button onClick={handleNext}>Next</button>
//       </form>
//     </div>
//   );
// };

// export default AcoountDetails;
