// ProfileUpdateForm.js
import { useState } from 'react';

const ProfileUpdateForm = ({ onUpdate, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    avatar: initialData.avatar,
    workAs: initialData.details.workAs,
    education: initialData.details.education,
    ageRange: initialData.preferences.ageRange,
    name: initialData.name,
    description: initialData.description,
    background: initialData.background,
    interests: initialData.interests,
    photos: initialData.photos,
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedPhotos = [...prevData.photos];
      updatedPhotos[index] = value;
      return {
        ...prevData,
        [name]:
          name === 'interests'
            ? value.split(',').map((item) => item.trim())
            : value,
        photos: updatedPhotos,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Avatar:</label>
        <input
          type="text"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Work As:</label>
        <input
          type="text"
          name="workAs"
          value={formData.workAs}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Education:</label>
        <input
          type="text"
          name="education"
          value={formData.education}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Interests:</label>
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age Range:</label>
        <input
          type="text"
          name="ageRange"
          value={formData.ageRange}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Background:</label>
        <input
          type="text"
          name="background"
          value={formData.background}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>photo 1</label>
        <input
          type="text"
          name="photos[0]"
          value={formData.photos[0]}
          onChange={(e) => handleChange(e, 0)}
        />
      </div>
      <div>
        <label>photo 2</label>
        <input
          type="text"
          name="photos[1]"
          value={formData.photos[1]}
          onChange={(e) => handleChange(e, 1)}
        />
      </div>
      <div>
        <label>photo 3</label>
        <input
          type="text"
          name="photos[2]"
          value={formData.photos[2]}
          onChange={(e) => handleChange(e, 2)}
        />
      </div>
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default ProfileUpdateForm;

// ProfileUpdateForm.js
// import { useState } from 'react';

// const ProfileUpdateForm = ({ onUpdate, onCancel, initialData }) => {
//   const [formData, setFormData] = useState({
//     avatar: initialData.avatar,
//     workAs: initialData.details.workAs,
//     education: initialData.details.education,
//     ageRange: initialData.preferences.ageRange,
//     name: initialData.name,
//     description: initialData.description,
//     background: initialData.background,
//     interests: initialData.interests,
//     photos: initialData.photos,
//     });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [name]: value,
//   //   }));
//   // };

//     const handleChange = (e, index) => {
//       const { name, value } = e.target;
//       setFormData((prevData) => {
//         const updatedPhotos = [...prevData.photos];
//         updatedPhotos[index] = value;
//         return {
//           ...prevData,
//           [name]:
//             name === 'interests'
//               ? value.split(',').map((item) => item.trim())
//               : value,
//           photos: updatedPhotos,
//         };
//       });
//     };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Description:</label>
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Avatar:</label>
//         <input
//           type="text"
//           name="avatar"
//           value={formData.avatar}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Work As:</label>
//         <input
//           type="text"
//           name="workAs"
//           value={formData.workAs}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Education:</label>
//         <input
//           type="text"
//           name="education"
//           value={formData.education}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Interests:</label>
//         <input
//           type="text"
//           name="interests"
//           value={formData.interests}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Age Range:</label>
//         <input
//           type="text"
//           name="ageRange"
//           value={formData.ageRange}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Background:</label>
//         <input
//           type="text"
//           name="background"
//           value={formData.background}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>photo 1</label>
//         <input
//           type="text"
//           name="photos[0]"
//           value={formData.photos[0]}
//           onChange={(e) => handleChange(e, 0)}
//         />
//       </div>
//       <div>
//         <label>photo 2</label>
//         <input
//           type="text"
//           name="photos[1]"
//           value={formData.photos[1]}
//           onChange={(e) => handleChange(e, 1)}
//         />
//       </div>
//       <div>
//         <label>photo 3</label>
//         <input
//           type="text"
//           name="photos[2]"
//           value={formData.photos[2]}
//           onChange={(e) => handleChange(e, 2)}
//         />
//       </div>
//       <button type="submit">Update</button>
//       <button type="button" onClick={onCancel}>
//         Cancel
//       </button>
//     </form>
//   );
// };

// export default ProfileUpdateForm;
