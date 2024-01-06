import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import { updateUser } from '../../api/apiService';

const AcoountDetails = () => {
  // State to hold form data
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    avatar: '',
    background: '',
    description: '',
    details: {
      workAs: '',
      education: '',
    },
    preferences: {
      ageRange: '',
    },
    photos: [], // Added photos field
  });

 const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      // Use a copy of the previous data
      const newData = { ...prevData };

      // Check if the input field is nested under 'details' or 'preferences'
      if (name.startsWith('details.')) {
        newData.details = { ...newData.details, [name.slice(8)]: value };
      } else if (
        name.startsWith('preferences.')  ) {
        newData.preferences = {
          ...newData.preferences,
          [name.slice(12)]: value,
        };
      } else if (name.startsWith('photos.')) {
        // Handle each photo input individually
        const index = parseInt(name.slice(7), 10);
        if (!isNaN(index) && index > 0) {
          newData.photos[index - 1] = value;
        }
      } else {
        // If it's a top-level property, update it directly
        newData[name] = value;
      }

      return newData;
    });
  };


  const onBack = () => {
    navigate('/SignUp/CreateAccount');
  };

  const handleNext = async (e) => {
    e.preventDefault();

    try {
      const response = await updateUser(formData);

      if (response.success) {
        setFormData({
          avatar: '',
          background: '',
          description: '',
          details: {
            workAs: '',
            education: '',
          },
          preferences: {
            ageRange: '',
          },
          photos: [], // Reset photos field
        });

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

        {/* Adding multiple image inputs */}

        {[1, 2, 3].map((index) => (
          <div key={index}>
            <label>{`Add Image ${index}:`}</label>
            <input
              className="input"
              type="text"
              name={`photos.${index}`}
              value={formData.photos[index - 1] || ''} // Adjusted to use 0-based index
              onChange={handleChange}
            />
          </div>
        ))}

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
// import { updateUser } from '../../api/apiService';

// const AcoountDetails = () => {
//   // State to hold form data
//   const navigate = useNavigate();
// // const { userId } = useParams();
//   const [formData, setFormData] = useState({
//     avatar: '',
//     background: '',
//     description: '',
//     details: {
//       workAs: '',
//       education: '',
//     },
//     preferences: {
//       ageRange: '',
//     }

//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => {
//       // Use a copy of the previous data
//       const newData = { ...prevData };

//       // Check if the input field is nested under 'details' or 'preferences'
//       if (name.startsWith('details.')) {
//         newData.details = { ...newData.details, [name.slice(8)]: value };
//       } else if (name.startsWith('preferences.')) {
//         newData.preferences = {
//           ...newData.preferences,
//           [name.slice(12)]: value,
//         };
//       } else {
//         // If it's a top-level property, update it directly
//         newData[name] = value;
//       }

//       return newData;
//     });
//   };

//   const onBack = () => {
//     navigate('/SignUp/CreateAccount');
//   };

//   const handleNext = async (e) => {
//     e.preventDefault();

//     try {
//       // Assume formData is coming from props or state
//       const response = await updateUser(formData);

//       if (response.success) {
//         // Reset the form after successful user creation
//         setFormData({
//           avatar: '',
//           background: '',
//           description: '',
//           details: {
//             workAs: '',
//             education: '',
//           },
//           preferences: {
//             ageRange: '',
//           },
//         });

//         // Navigate to the next page
//         navigate('/SignUp/CreateAccount/AcoountDetails/interests', {
//           state: { formData },
//         });
//       } else {
//         console.error('User creation failed:', response.error);
//       }
//     } catch (error) {
//       console.error('An error occurred during user creation:', error.message);
//     }
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
