import { useEffect, useState } from 'react';
// import axios from 'axios';
import './MyProfile.css';
import {useGlobalSearchPage} from '../../context/SearchPageContext'
import {
  MyProfileConnectionId,
  MyProfileUpdateUser,
} from '../../api/apiService';

const MyProfile = () => {
  const { MyData, setMyData } = useGlobalSearchPage();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({ ...MyData });

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
          console.error('Error fetching profile data:', response.error);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error.message);
      }
    };

    fetchProfileData();
  }, []);

   const handleEditClick = () => {
     setIsEditing(true);
   };

   const handleSaveClick = async () => {
     try {
       const response = await MyProfileUpdateUser(editedProfileData);
       console.log(`saveProfileChanges response - ${JSON.stringify(response)}`);

       if (response.success) {
         setMyData(editedProfileData);
         setIsEditing(false);
       } else {
         console.error('Error saving profile changes:', response.error);
       }
     } catch (error) {
       console.error('Error saving profile changes:', error.message);
     }
   };

   const handleCancelClick = () => {
     setIsEditing(false);
     setEditedProfileData({ ...MyData });
   };

  if (!MyData) {
    return (
      <div className="center-container">
        <p className="login-message">Please Log In....</p>
      </div>
    );
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
          {Object.entries(
            isEditing ? editedProfileData.details : MyData.details
          ).map(([key, value]) => (
            <div key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {isEditing ? (
                <input
                  type="text"
                  value={value}
                  onChange={(e) =>
                    setEditedProfileData({
                      ...editedProfileData,
                      details: {
                        ...editedProfileData.details,
                        [key]: e.target.value,
                      },
                    })
                  }
                />
              ) : (
                value
              )}
            </div>
          ))}
        </div>
        <div className="user-additional-info">
          {isEditing ? (
            <>
              <h3>Looking For</h3>
              <label>
                Gender:
                <input
                  type="text"
                  value={editedProfileData.preferences.gender}
                  onChange={(e) =>
                    setEditedProfileData({
                      ...editedProfileData,
                      preferences: {
                        ...editedProfileData.preferences,
                        gender: e.target.value,
                      },
                    })
                  }
                />
              </label>
              <label>
                Age Range:
                <input
                  type="text"
                  value={editedProfileData.preferences.ageRange}
                  onChange={(e) =>
                    setEditedProfileData({
                      ...editedProfileData,
                      preferences: {
                        ...editedProfileData.preferences,
                        ageRange: e.target.value,
                      },
                    })
                  }
                />
              </label>
              {/* ... (other preferences editing) */}
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <>
              {MyData.preferences && (
                <>
                  <h3>Looking For</h3>
                  <p className="user-description">
                    {MyData.preferences.gender}, {MyData.preferences.ageRange}
                  </p>
                  {/* ... (other preferences rendering) */}
                </>
              )}
              <button onClick={handleEditClick}>Edit Profile</button>
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



// import { useEffect, useState } from 'react';
// // import axios from 'axios';
// import './MyProfile.css';
// import {useGlobalSearchPage} from '../../context/SearchPageContext'
// import {
//   MyProfileConnectionId,
//   MyProfileUpdateUser,
// } from '../../api/apiService';

// const MyProfile = () => {
//   const { MyData, setMyData } = useGlobalSearchPage();
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfileData, setEditedProfileData] = useState({ ...MyData });

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await MyProfileConnectionId(MyData);
//         console.log(`myprofileresponse- ${JSON.stringify(response)}`);

//         if (response.success) {
//           const profileData = response.data; // Assuming response.data is already a JSON object
//           setMyData(profileData);
//           console.log(profileData);
//         } else {
//           console.error('Error fetching profile data:', response.error);
//         }
//       } catch (error) {
//         console.error('Error fetching profile data:', error.message);
//       }
//     };

//     fetchProfileData();
//   }, []);

//    const handleEditClick = () => {
//      setIsEditing(true);
//    };

//    const handleSaveClick = async () => {
//      try {
//        const response = await MyProfileUpdateUser(editedProfileData);
//        console.log(`saveProfileChanges response - ${JSON.stringify(response)}`);

//        if (response.success) {
//          setMyData(editedProfileData);
//          setIsEditing(false);
//        } else {
//          console.error('Error saving profile changes:', response.error);
//        }
//      } catch (error) {
//        console.error('Error saving profile changes:', error.message);
//      }
//    };

//    const handleCancelClick = () => {
//      setIsEditing(false);
//      setEditedProfileData({ ...MyData });
//    };

//   if (!MyData) {
//     return (
//       <div className="center-container">
//         <p className="login-message">Please Log In....</p>
//       </div>
//     );
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
//           {Object.entries(
//             isEditing ? editedProfileData.details : MyData.details
//           ).map(([key, value]) => (
//             <div key={key}>
//               <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={value}
//                   onChange={(e) =>
//                     setEditedProfileData({
//                       ...editedProfileData,
//                       details: {
//                         ...editedProfileData.details,
//                         [key]: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               ) : (
//                 value
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="user-additional-info">
//           {isEditing ? (
//             <>
//               <h3>Looking For</h3>
//               <label>
//                 Gender:
//                 <input
//                   type="text"
//                   value={editedProfileData.preferences.gender}
//                   onChange={(e) =>
//                     setEditedProfileData({
//                       ...editedProfileData,
//                       preferences: {
//                         ...editedProfileData.preferences,
//                         gender: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </label>
//               <label>
//                 Age Range:
//                 <input
//                   type="text"
//                   value={editedProfileData.preferences.ageRange}
//                   onChange={(e) =>
//                     setEditedProfileData({
//                       ...editedProfileData,
//                       preferences: {
//                         ...editedProfileData.preferences,
//                         ageRange: e.target.value,
//                       },
//                     })
//                   }
//                 />
//               </label>
//               {/* ... (other preferences editing) */}
//               <button onClick={handleSaveClick}>Save</button>
//               <button onClick={handleCancelClick}>Cancel</button>
//             </>
//           ) : (
//             <>
//               {MyData.preferences && (
//                 <>
//                   <h3>Looking For</h3>
//                   <p className="user-description">
//                     {MyData.preferences.gender}, {MyData.preferences.ageRange}
//                   </p>
//                   {/* ... (other preferences rendering) */}
//                 </>
//               )}
//               <button onClick={handleEditClick}>Edit Profile</button>
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

// import { useEffect } from 'react';
// // import axios from 'axios';
// import './MyProfile.css';
// import {useGlobalSearchPage} from '../../context/SearchPageContext'
// import { MyProfileConnectionId } from '../../api/apiService';
// // import { useUser } from '../../context/UserContext';

// const MyProfile = () => {
//   const { MyData, setMyData } = useGlobalSearchPage();
//  useEffect(() => {
//    const fetchProfileData = async () => {
//      try {
//        const response = await MyProfileConnectionId(MyData);
//        console.log(`myprofileresponse- ${JSON.stringify(response)}`);

//        if (response.success) {
//          const profileData = response.data; // Assuming response.data is already a JSON object
//          setMyData(profileData);
//          console.log(profileData);
//        } else {
//          console.error('Error fetching profile data:', response.error);
//        }
//      } catch (error) {
//        console.error('Error fetching profile data:', error.message);
//      }
//    };

//    fetchProfileData();
//  }, []);

// if (!MyData) {
//   return (
//     <div className="center-container">
//       <p className="login-message">Please Log In....</p>
//     </div>
//   );
// }
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
