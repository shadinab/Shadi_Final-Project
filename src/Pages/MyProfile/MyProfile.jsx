import { useEffect } from 'react';
import axios from 'axios';
import './MyProfile.css';
import {useGlobalSearchPage} from '../../context/SearchPageContext'
const MyProfile = () => {
  const { MyData, setMyData, loading, setLoading } = useGlobalSearchPage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/users/65932968b763d501d309042c'
        );
        const profileData = response.data.data;
        setMyData(profileData);
        console.log(profileData);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

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

// // MyProfile.jsx
// import './MyProfile.css';

// const MyProfile = () => {
//  const profileData = {
//    id: 1,
//    name: 'John Doe',
//    avatar:
//      'https://img.freepik.com/premium-photo/generative-ai-portrait-young-woman-outdoors-backlight_108985-4148.jpg',
//    background:
//      'https://wallpapers.com/images/hd/view-background-h2vrunctbg1saqor.jpg',
//    description:
//      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa vel leo consectetur fermentum nec non dolor.',
//    details: {
//      liveIn: 'Madrid, Spain',
//      workAs: 'MakeUp Artist',
//      education: 'Bachelors degree',
//      know: 'English, Spanish',
//      relationship: 'Single',
//      haveKids: 'No',
//      smoke: 'Never',
//      drink: 'Occasionally',
//      height: '5\'8"',
//      bodyType: 'Athletic',
//      eyes: 'Blue',
//      hair: 'Black',
//    },
//    interests: [
//      'Reading books',
//      'Sports',
//      'Museums & Art',
//      'Music & Concerts',
//      'Travelling',
//    ],
//    preferences: {
//      gender: 'Male',
//      ageRange: '18 and older',
//      idealMan: [
//        'Strong character',
//        'Good job',
//        'Great sense of humor',
//        'Well-groomed',
//      ],
//      interests: ['Traveling', 'Outdoor activities', 'Hobbies'],
//      personalityTraits: [
//        'Well-mannered',
//        'Complimentary',
//        'Attentive',
//        'Generous',
//        'Kind',
//      ],
//      idealDynamic: 'Looking for a man beside whom I could be weak.',
//    },
//    photos: [
//      'https://img.freepik.com/free-photo/empty-wooden-dock-lake-during-breathtaking-sunset-cool-background_181624-27469.jpg',
//      'https://img.freepik.com/free-photo/empty-wooden-dock-lake-during-breathtaking-sunset-cool-background_181624-27469.jpg',
//      'https://img.freepik.com/free-photo/empty-wooden-dock-lake-during-breathtaking-sunset-cool-background_181624-27469.jpg',
//    ],
//  };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <img
//           className="background-image"
//           src={profileData.background}
//           alt="Background"
//         />
//         <div className='profile1'>
//           <img className="avatar" src={profileData.avatar} alt="Avatar" />
//           <h1>{profileData.name}</h1>
//         </div>
//       </div>
//       <div className="profile-details">
//         <h2>About Me</h2>
//         <p>{profileData.description}</p>
//         <h2>Details</h2>
//         <ul>
//           {Object.entries(profileData.details).map(([key, value]) => (
//             <li key={key}>
//               <strong>{key}:</strong> {value}
//             </li>
//           ))}
//         </ul>
//         <h2>Interests</h2>
//         <ul>
//           {profileData.interests.map((interest, index) => (
//             <li key={index}>{interest}</li>
//           ))}
//         </ul>
//         <h2>Preferences</h2>
//         <ul>
//           {Object.entries(profileData.preferences).map(([key, value]) => (
//             <li key={key}>
//               <strong>{key}:</strong>{' '}
//               {Array.isArray(value) ? value.join(', ') : value}
//             </li>
//           ))}
//         </ul>
//         <h2>Ideal Man</h2>
//         <ul>
//           {Object.entries(profileData.preferences.idealMan).map(
//             ([key, value]) => (
//               <li key={key}>
//                 <strong>{key}:</strong> {value}
//               </li>
//             )
//           )}
//         </ul>
//       </div>
//       <div className="profile-photos">
//         <h2>Photos</h2>
//         <div className="photo-gallery">
//           {profileData.photos.map((photo, index) => (
//             <img key={index} src={photo} alt={`Photo ${index + 1}`} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
