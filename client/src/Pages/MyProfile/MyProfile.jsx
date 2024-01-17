// MyProfile.js
import { useEffect, useState } from 'react';
import './MyProfile.css';
import { useGlobalSearchPage } from '../../context/SearchPageContext';
import {
  MyProfileConnectionId,
  MyProfileUpdateUser,
} from '../../api/apiService';
import ProfileUpdateForm from './ProfileUpdateForm';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyProfile = () => {
  const { MyData, setMyData } = useGlobalSearchPage();
  // const [MyData, setMyData] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await MyProfileConnectionId(MyData);
        console.log(`myprofileresponse- ${JSON.stringify(response)}`);

        if (response.success) {
          const profileData = response.data;
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
  }, [MyData, setMyData]);

  const handleUpdateClick = () => {
    setIsEditMode(true);
  };

  const handleUpdateFormSubmit = async (updatedData) => {
    try {
      setIsUpdating(true);
      const updatedProfile = await MyProfileUpdateUser({
        ...MyData,
        details: {
          ...MyData.details,
          liveIn: updatedData.liveIn,
          workAs: updatedData.workAs,
          education: updatedData.education,
        },
        // preferences: {
        //   ...MyData.preferences,
        //   ageRange: updatedData.ageRange,
        // },
        avatar: updatedData.avatar,
        name: updatedData.name,
        description: updatedData.description,
        background: updatedData.background,
        interests: updatedData.interests,
        lookingfor: updatedData.lookingfor,
        photos: updatedData.photos,
      });

      setMyData(updatedProfile);
      setIsEditMode(false);
      console.log('Update successful:', updatedProfile);
                     toast.success(
                       'Your account has been successfully updated!'
                     );

      navigate('/');
    } catch (error) {
      console.error('Update failed:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleUpdateFormCancel = () => {
    setIsEditMode(false);
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
      <ToastContainer />
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
        {isEditMode ? (
          <ProfileUpdateForm
            onUpdate={handleUpdateFormSubmit}
            onCancel={handleUpdateFormCancel}
            initialData={MyData}
          />
        ) : (
          <>
            <h2>{MyData.name}</h2>
            <div className="user-description center4">{MyData.description}</div>
            {/* <div className="user-description">
              {MyData.preferences.ageRange}
            </div> */}

            <div className="user-description">
              {Object.entries(MyData.details).map(([key, value]) => (
                <div key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                  {value}
                </div>
              ))}
            </div>
            <div>
              <h2>My interest</h2>
              <div className="user-description center4">
                {MyData.interests.join(', ')}
              </div>
            </div>

            <div className="user-additional-info">
              {MyData.preferences && (
                <>
                  <h3>Looking For</h3>
                  <p className="user-description">
                    {MyData.lookingfor}
                    {/* {MyData.preferences.ageRange} */}
                  </p>
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
            <button
              className="update-button top"
              onClick={handleUpdateClick}
              disabled={isUpdating}
            >
              {isUpdating ? 'Updating...' : 'Update Profile'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MyProfile;

// MyProfile.js
// import  { useEffect, useState } from 'react';
// import './MyProfile.css';
// import { useGlobalSearchPage } from '../../context/SearchPageContext';
// import {
//   MyProfileConnectionId,
//   MyProfileUpdateUser,
// } from '../../api/apiService';
// import ProfileUpdateForm from './ProfileUpdateForm';
// import { useNavigate } from 'react-router-dom';

// const MyProfile = () => {
//   const { MyData, setMyData } = useGlobalSearchPage();
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
// const navigate = useNavigate();
//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await MyProfileConnectionId(MyData);
//         console.log(`myprofileresponse- ${JSON.stringify(response)}`);

//         if (response.success) {
//           const profileData = response.data;
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
//   }, [MyData, setMyData]);

//   const handleUpdateClick = () => {
//     setIsEditMode(true);
//   };

//   const handleUpdateFormSubmit = async (updatedData) => {
//     try {
//       setIsUpdating(true);
//       const updatedProfile = await MyProfileUpdateUser({
//         ...MyData,
//         details: {
//           ...MyData.details,
//           workAs: updatedData.workAs,
//           education: updatedData.education,
//         },
//         preferences: {
//           ...MyData.preferences,
//           ageRange: updatedData.ageRange,
//         },
//         avatar: updatedData.avatar,
//         name: updatedData.name,
//         description: updatedData.description,
//         background: updatedData.background,
//         interests: updatedData.interests,
//         photos: updatedData.photos,
//       });

//       setMyData(updatedProfile);
//       setIsEditMode(false);
//       console.log('Update successful:', updatedProfile);
//             navigate('/');
//     } catch (error) {
//       console.error('Update failed:', error);
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   const handleUpdateFormCancel = () => {
//     setIsEditMode(false);
//   };

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
//         {isEditMode ? (
//           <ProfileUpdateForm
//             onUpdate={handleUpdateFormSubmit}
//             onCancel={handleUpdateFormCancel}
//             initialData={MyData}
//           />
//         ) : (
//           <>
//             <h2>{MyData.name}</h2>
//             <div className="user-description">{MyData.description}</div>
//             <div className="user-description">
//               {Object.entries(MyData.details).map(([key, value]) => (
//                 <div key={key}>
//                   <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
//                   {value}
//                 </div>
//               ))}
//             </div>
//             <div>
//               <h2>My interest</h2>
//               <div className="user-description">
//                 {MyData.interests.join(', ')}
//               </div>
//             </div>

//             <div className="user-additional-info">
//               {MyData.preferences && (
//                 <>
//                   <h3>Looking For</h3>
//                   <p className="user-description">
//                     {MyData.preferences.gender}, {MyData.preferences.ageRange}
//                   </p>
//                 </>
//               )}
//             </div>
//             <div className="user-photos">
//               <h3>User Photos</h3>
//               <div className="photos-container">
//                 {MyData.photos.map((photo, index) => (
//                   <img
//                     key={index}
//                     src={photo}
//                     alt={`Photo ${index + 1}`}
//                     className="user-photo"
//                   />
//                 ))}
//               </div>
//             </div>
//             <button
//               className="update-button top"
//               onClick={handleUpdateClick}
//               disabled={isUpdating}
//             >
//               {isUpdating ? 'Updating...' : 'Update Profile'}
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
