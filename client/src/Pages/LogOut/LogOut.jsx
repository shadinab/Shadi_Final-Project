// Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      localStorage.removeItem('tokenconnectionId');
      localStorage.removeItem('selectedUserId');
      navigate('/');
      window.location.reload(); // Reload the page
    };

    // Execute the logout action immediately when the component mounts
    handleLogout();
  }, [navigate]); // Add navigate as a dependency to useEffect

  // Return null (no visible content)
  return null;
};

export default Logout;

// Logout.jsx
// import { useNavigate } from 'react-router-dom';
// import './LogOut.css'

// const Logout = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('tokenconnectionId');
//     localStorage.removeItem('selectedUserId');
//         navigate('/');
//     window.location.reload(); // Reload the page
//   };

//   return (
//     <div className="logout-container">
//       <button className="navLink center" onClick={handleLogout}>
//         You have successfully logged out <br/><br/> Please Click Me!!!
//       </button>
//     </div>
//   );
// };

// export default Logout;
