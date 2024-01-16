import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useParams } from '/react-router-dom';
import './UserProfile.css';
// import Chat from '../Chat/Chat';
import { Link } from 'react-router-dom';
import { useGlobalSearchPage } from '../../context/SearchPageContext';

import { apiService } from '../../api/apiService'; // Import your exported apiService
import Spinner from '../../utils/Spinner';
// import Video from '../VideoCall/Video'

const UserProfile = () => {
  console.log('hi');
  const location = useLocation();
  const { MyData } = useGlobalSearchPage();
  const [userData, setUserData] = useState(null);
  // const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const getUserSelectedData = JSON.parse(
    localStorage.getItem('selectedUserId')
  );
  const tokenconnectionId = localStorage.getItem('tokenconnectionId');
  console.log('tokenconnectionId.', tokenconnectionId);
  var pathname = location.pathname;
  var parts = pathname.split('/');
  var id = parts[parts.length - 1];
  console.log('Original Path:', pathname);
  console.log('c ID:', id);
  console.log('getUserSelectedData._id.', getUserSelectedData);

  const fetchUserData = async () => {
    try {
      if (pathname.includes('/search/')) {
        // If 'id' is available, fetch data by ID
        const response = await apiService.get(`/usersById/${id}`);
        console.log('User by ID Response:', response.data);
        setUserData(response.data.data);
      } else if (getUserSelectedData) {
        // If 'getUserSelectedData' is available, fetch data using it
        const response = await apiService.get(`/users/${getUserSelectedData}`);
        console.log('User Response:', response.data);
        setUserData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  // const fetchUserData = async () => {
  //   try {
  //     if (pathname.includes('/search/')) {
  //       // If 'id' is available, fetch data by ID
  //       const response = await axios.get(
  //         `http://localhost:5000/api/usersById/${id}`
  //       );
  //       console.log('User by ID Response:', response.data);
  //       setUserData(response.data.data);
  //     } else if (getUserSelectedData) {
  //       // If 'getUserSelectedData' is available, fetch data using it
  //       const response = await axios.get(
  //         `http://localhost:5000/api/users/${getUserSelectedData}`
  //       );
  //       console.log('User Response:', response.data);
  //       setUserData(response.data.data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user data:', error.message);
  //   }
  // };

  useEffect(() => {
    fetchUserData();
  }, [id, getUserSelectedData]); // Add

  if (!userData) {
    // Show a loading indicator or message while data is being fetched
    return (
      <div className="spinner-container1">
        <Spinner loading={loading} />
      </div>
    );
  }

  return (
    <div className="user-profile">
      <div className="profile-background">
        {/* <Video /> */}

        <img
          src={userData.background}
          alt="Profile Background"
          className="background-image"
        />
        {/* tokenconnectionId !== getUserSelectedData && */}
        {MyData && (
          <Link to={`/${getUserSelectedData}/chat`}>
            <button className="center">
              Send a Message To {userData.name}
            </button>
          </Link>
        )}

       {MyData && (
          <Link to={`/${getUserSelectedData}/video`}>
            <button className="center">
              Start Video Chat with {userData.name}
            </button>
          </Link>
        )}

        {/* {tokenconnectionId !== getUserSelectedData && if (!MyData)  (
          <Link to={`/${getUserSelectedData}/chat`}>
            <button className="center">
              Send a Message To {userData.name}
            </button>
          </Link>
        )} */}
      </div>
      <div className="user-details">
        <img
          src={userData.avatar}
          alt={userData.name}
          className="user-picture-large"
        />
        <div>
          <h2>{userData.name}</h2>
          <div className="user-description">{userData.description}</div>
        </div>
        <div>
          <h2>My interest</h2>
          <div className="user-description">
            {userData.interests.join(', ')}
          </div>
        </div>

        <div className="user-description">
          <h2>More Aboute Me</h2>
          {Object.entries(userData.details).map(([key, value]) => (
            <div key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {value}
            </div>
          ))}
        </div>

        <div className="user-additional-info">
          {userData.preferences && (
            <>
              <h3>Looking For</h3>
              <p className="user-description">
                {userData.lookingfor} {userData.preferences.ageRange}
              </p>
              {/* ... (other preferences rendering) */}
            </>
          )}
        </div>
        <div className="user-photos">
          <h3>User Photos</h3>
          <div className="photos-container">
            {userData.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className="user-photo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './UserProfile.css';
// // import Chat from '../Chat/Chat';
// import { Link } from 'react-router-dom';

// const UserProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const { id } = useParams();
//   const getUserSelectedData = JSON.parse(
//     localStorage.getItem('selectedUserId')
//   );
//   const tokenconnectionId = (
//     localStorage.getItem('tokenconnectionId')
//   );
//   console.log('tokenconnectionId.', tokenconnectionId);

//   console.log('getUserSelectedData._id.', getUserSelectedData);
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/api/users/${getUserSelectedData}`
//         );
//         console.log('Response:', response.data);
//         setUserData(response.data.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error.message);
//       }
//     };

//     fetchUserData();
//   }, [id]); // Add 'id' as a dependency

//   if (!userData) {
//     // Show a loading indicator or message while data is being fetched
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="user-profile">
//       <div className="profile-background">
//         <img
//           src={userData.background}
//           alt="Profile Background"
//           className="background-image"
//         />
//         {tokenconnectionId !== getUserSelectedData && (
//           <Link to={`/${getUserSelectedData}/chat`}>
//             <button className="center">
//               Send a Message To {userData.name}
//             </button>
//           </Link>
//         )}
//       </div>
//       <div className="user-details">
//         <img
//           src={userData.avatar}
//           alt={userData.name}
//           className="user-picture-large"
//         />
//         <div>
//           <h2>{userData.name}</h2>
//           <div className="user-description">{userData.description}</div>
//         </div>
//         <div>
//           <h2>My interest</h2>
//           <div className="user-description">
//             {userData.interests.join(', ')}
//           </div>
//         </div>

//         <div className="user-description">
//           <h2>More Aboute Me</h2>
//           {Object.entries(userData.details).map(([key, value]) => (
//             <div key={key}>
//               <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
//               {value}
//             </div>
//           ))}
//         </div>

//         <div className="user-additional-info">
//           {userData.preferences && (
//             <>
//               <h3>Looking For</h3>
//               <p className="user-description">
//                 {userData.preferences.gender} {userData.preferences.ageRange}
//               </p>
//               {/* ... (other preferences rendering) */}
//             </>
//           )}
//         </div>
//         <div className="user-photos">
//           <h3>User Photos</h3>
//           <div className="photos-container">
//             {userData.photos.map((photo, index) => (
//               <img
//                 key={index}
//                 src={photo}
//                 alt={`Photo ${index + 1}`}
//                 className="user-photo"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
