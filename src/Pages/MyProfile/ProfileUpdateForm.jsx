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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default ProfileUpdateForm;



// // ProfileUpdateForm.js
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
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

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
//       <button type="submit">Update</button>
//       <button type="button" onClick={onCancel}>
//         Cancel
//       </button>
//     </form>
//   );
// };

// export default ProfileUpdateForm;
