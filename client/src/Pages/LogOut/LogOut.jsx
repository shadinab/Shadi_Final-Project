

// Logout.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../utils/Spinner';

const Logout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLogout = () => {
      try {
        localStorage.removeItem('tokenconnectionId');
        localStorage.removeItem('selectedUserId');

            // Navigate and reload the page after the toast
            navigate('/');
            window.location.reload(); // Reload the page
            setLoading(false);

      } catch (error) {
        console.error('Logout failed', error);
        setLoading(false);
      }
    };

    // Execute the logout action immediately when the component mounts
    handleLogout(          
);
  }, [navigate]); // Add navigate as a dependency to useEffect

  // Return null (no visible content)
  return (
    <>
      <Spinner loading={loading} />
    </>
  );
};

export default Logout;



// // Logout.jsx
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Spinner from '../../utils/Spinner';

// const Logout = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const handleLogout = () => {
//       try {
//         localStorage.removeItem('tokenconnectionId');
//         localStorage.removeItem('selectedUserId');
//         toast.success('Logout successful!'); // Display success toast
//         navigate('/');
//         window.location.reload(); // Reload the page
//         setLoading(false);
//       } catch (error) {
//         console.error('Logout failed', error);
//         toast.error('Logout failed. Please try again.'); // Display error toast
//         setLoading(false);
//       }
//     };

//     // Execute the logout action immediately when the component mounts
//     handleLogout();
//   }, [navigate]); // Add navigate as a dependency to useEffect

//   // Return null (no visible content)
//   return (
//     <>
//       <ToastContainer />
//       <Spinner loading={loading} />
//     </>
//   );
// };

// export default Logout;
