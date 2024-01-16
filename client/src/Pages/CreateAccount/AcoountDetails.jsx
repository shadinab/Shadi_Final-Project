import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import { updateUser } from '../../api/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AcoountDetails = () => {
  // State to hold form data
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    avatar: '',
    background: '',
    description: '',
    details: {
      liveIn: '',
      workAs: '',
      education: '',
    },
    preferences: {
      gender: '',
      ageRange: '',
    },
    photos: [], // Added photos field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const newData = { ...prevData };

      if (name.startsWith('details.')) {
        newData.details = { ...newData.details, [name.slice(8)]: value };
      } else if (name.startsWith('preferences.')) {
        newData.preferences = {
          ...newData.preferences,
          [name.slice(12)]: value,
        };
      } else if (name.startsWith('photos.')) {
        const index = parseInt(name.slice(7), 10);
        if (!isNaN(index) && index > 0) {
          newData.photos[index - 1] = value;
        }
      } else {
        newData[name] = value;
      }

      return newData;
    });
  };

  // const onBack = () => {
  //   navigate('/SignUp/CreateAccount');
  // };

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
            liveIn: '',
            workAs: '',
            education: '',
          },
          preferences: {
            gender: '',
            ageRange: '',
          },
          photos: [],
        });
              toast.success('Data has been updated successfully!');

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
      <ToastContainer/>
      <h2>Please fill in the details</h2>
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

        <label htmlFor="gender">My Gender</label>
        <select
          id="gender"
          name="preferences.gender"
          value={formData.preferences.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="liveIn">liveIn:</label>
        <input
          type="text"
          id="liveIn"
          name="details.liveIn"
          value={formData.details.liveIn}
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

        <label>My Age:</label>
        <input
          className="input"
          type="text"
          name="preferences.ageRange"
          value={formData.preferences.ageRange}
          onChange={handleChange}
        />

        {[1, 2, 3].map((index) => (
          <div key={index}>
            <label>{`Add Image ${index}:`}</label>
            <input
              className="input"
              type="text"
              name={`photos.${index}`}
              value={formData.photos[index - 1] || ''}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* <button onClick={onBack}>Back</button> */}
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

//   const [formData, setFormData] = useState({
//     avatar: '',
//     background: '',
//     description: '',
//     details: {
//       liveIn: '',
//       workAs: '',
//       education: '',
//     },
//     preferences: {
//       gender: '',
//       ageRange: '',
//     },
//     photos: [], // Added photos field
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => {
//       const newData = { ...prevData };

//       if (name.startsWith('details.')) {
//         newData.details = { ...newData.details, [name.slice(8)]: value };
//       } else if (name.startsWith('preferences.')) {
//         newData.preferences = {
//           ...newData.preferences,
//           [name.slice(12)]: value,
//         };
//       } else if (name.startsWith('photos.')) {
//         const index = parseInt(name.slice(7), 10);
//         if (!isNaN(index) && index > 0) {
//           newData.photos[index - 1] = value;
//         }
//       } else {
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
//       const response = await updateUser(formData);

//       if (response.success) {
//         setFormData({
//           avatar: '',
//           background: '',
//           description: '',
//           details: {
//             liveIn: '',
//             workAs: '',
//             education: '',
//           },
//           preferences: {
//             gender: '',
//             ageRange: '',
//           },
//           photos: [],
//         });

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
//       <h2>Please fill in the details</h2>
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

//         <label htmlFor="gender">My Gender</label>
//         <select
//           id="gender"
//           name="preferences.gender"
//           value={formData.preferences.gender}
//           onChange={handleChange}
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>

//         <label htmlFor="liveIn">liveIn:</label>
//         <input
//           type="text"
//           id="liveIn"
//           name="details.liveIn"
//           value={formData.details.liveIn}
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

//         {[1, 2, 3].map((index) => (
//           <div key={index}>
//             <label>{`Add Image ${index}:`}</label>
//             <input
//               className="input"
//               type="text"
//               name={`photos.${index}`}
//               value={formData.photos[index - 1] || ''}
//               onChange={handleChange}
//             />
//           </div>
//         ))}

//         <button onClick={onBack}>Back</button>
//         <button onClick={handleNext}>Next</button>
//       </form>
//     </div>
//   );
// };

// export default AcoountDetails;