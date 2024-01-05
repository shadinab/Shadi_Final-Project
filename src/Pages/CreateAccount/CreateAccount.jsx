
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    gender: '',
    birthday: '',
    hometown: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    // You can add validation logic here before moving to the next page
    // For simplicity, let's assume all fields are required
    // Move to the next page (interests page)
    navigate('/SignUp/CreateAccount/AcoountDetails', { state: { userData } });
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

        <label htmlFor="gender">Gender:</label>
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

        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={userData.birthday}
          onChange={handleChange}
        />

        <label htmlFor="hometown">Hometown:</label>
        <input
          type="text"
          id="hometown"
          name="hometown"
          value={userData.hometown}
          onChange={handleChange}
        />

        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default CreateAccount;
