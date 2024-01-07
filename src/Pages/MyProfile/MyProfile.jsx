import { useEffect } from 'react';
// import axios from 'axios';
import './MyProfile.css';
import {useGlobalSearchPage} from '../../context/SearchPageContext'
import { MyProfileConnectionId } from '../../api/apiService';
// import { useUser } from '../../context/UserContext';

const MyProfile = () => {
  const { MyData, setMyData, loading, setLoading } = useGlobalSearchPage();
 useEffect(() => {
   const fetchProfileData = async () => {
     try {
       const response = await MyProfileConnectionId(MyData);
       console.log(`myprofileresponse- ${JSON.stringify(response)}`);

       if (response.success) {
         const profileData = response.data; // Assuming response.data is already a JSON object
         setMyData(profileData);
         console.log(profileData);
       } else {
         setLoading(false);
         console.error('Error fetching profile data:', response.error);
       }
     } catch (error) {
       setLoading(false);
       console.error('Error fetching profile data:', error.message);
     }
   };

   fetchProfileData();
 }, []);




  if (!MyData) {
    return <p>Error fetching profile data</p>;
  }
  return (
    <div className="user-profile">
      <div className="profile-background">
        <img
          src={MyData.background}
          alt="Profile Background"
          className="background-image"
        />
      </div>
      <div className="user-details">
        <img
          src={MyData.avatar}
          alt={MyData.name}
          className="user-picture-large"
        />
        <div>
          <h2>{MyData.name}</h2>
          <div className="user-description">{MyData.description}</div>
        </div>
        <div className="user-description">
          {Object.entries(MyData.details).map(([key, value]) => (
            <div key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {value}
            </div>
          ))}
        </div>
        <div className="user-additional-info">
          {MyData.preferences && (
            <>
              <h3>Looking For</h3>
              <p className="user-description">
                {MyData.preferences.gender}, {MyData.preferences.ageRange}
              </p>
              {/* ... (other preferences rendering) */}
            </>
          )}
        </div>
        <div className="user-photos">
          <h3>User Photos</h3>
          <div className="photos-container">
            {MyData.photos.map((photo, index) => (
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

export default MyProfile;


// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await myProfileConnectionId(user);
//       const connectionId = localStorage.getItem('connectionId');

//       if (response.success) {
//         const profileData = response.data;
//         setMyData(profileData);
//         console.log(profileData);
//       } else {
//         setLoading(false);
//         console.error('Error fetching profile data:', response.error);
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error('Error fetching profile data:', error.message);
//     }
//   };

//   fetchData(); // Call fetchData here
// }, [user]); 






















// import { useEffect } from 'react';
// // import axios from 'axios';
// import './MyProfile.css';
// import {useGlobalSearchPage} from '../../context/SearchPageContext'
// import {myProfileConnectionId} from '../../api/apiService'
// const MyProfile = () => {
//   const { MyData, setMyData, loading, setLoading } = useGlobalSearchPage();

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await myProfileConnectionId(MyData);

//       if (response.success) {
//         const profileData = response.data;
//         setMyData(profileData);
//         console.log(profileData);
//       } else {
//         setLoading(false);
//         console.error('Error fetching profile data:', response.error);
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error('Error fetching profile data:', error.message);
//     }
//   };

//   fetchData(); // Call fetchData here
// }, []); 

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!MyData) {
//     return <p>Error fetching profile data</p>;
//   }
//   return (
//     <div className="user-profile">
//       <div className="profile-background">
//         <img
//           src={MyData.background}
//           alt="Profile Background"
//           className="background-image"
//         />
//       </div>
//       <div className="user-details">
//         <img
//           src={MyData.avatar}
//           alt={MyData.name}
//           className="user-picture-large"
//         />
//         <div>
//           <h2>{MyData.name}</h2>
//           <div className="user-description">{MyData.description}</div>
//         </div>
//         <div className="user-description">
//           {Object.entries(MyData.details).map(([key, value]) => (
//             <div key={key}>
//               <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
//               {value}
//             </div>
//           ))}
//         </div>
//         <div className="user-additional-info">
//           {MyData.preferences && (
//             <>
//               <h3>Looking For</h3>
//               <p className="user-description">
//                 {MyData.preferences.gender}, {MyData.preferences.ageRange}
//               </p>
//               {/* ... (other preferences rendering) */}
//             </>
//           )}
//         </div>
//         <div className="user-photos">
//           <h3>User Photos</h3>
//           <div className="photos-container">
//             {MyData.photos.map((photo, index) => (
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

// export default MyProfile;
