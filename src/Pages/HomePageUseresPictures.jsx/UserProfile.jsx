
// UserProfile.jsx
import React from 'react';
import './UserProfile.css';

// Updated Sample Data for UserProfile
const sampleUserData = {
  id: 1,
  name: 'John Doe',
  avatar:
    'https://img.freepik.com/premium-photo/generative-ai-portrait-young-woman-outdoors-backlight_108985-4148.jpg',
  background:
    'https://wallpapers.com/images/hd/view-background-h2vrunctbg1saqor.jpg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa vel leo consectetur fermentum nec non dolor.',
  details: {
    liveIn: 'Madrid, Spain',
    workAs: 'MakeUp Artist',
    education: 'Bachelors degree',
    know: 'English, Spanish',
    relationship: 'Single',
    haveKids: 'No',
    smoke: 'Never',
    drink: 'Occasionally',
    height: '5\'8"',
    bodyType: 'Athletic',
    eyes: 'Blue',
    hair: 'Black',
  },
  interests: [
    'Reading books',
    'Sports',
    'Museums & Art',
    'Music & Concerts',
    'Travelling',
  ],
  preferences: {
    gender: 'Male',
    ageRange: '18 and older',
    idealMan: {
      character: 'Strong character',
      job: 'Good job',
      senseOfHumor: 'Great sense of humor',
      grooming: 'Well-groomed',
      physique: 'Not pumped-up',
      arms: 'Strong arms',
      back: 'Stately back',
    },
    interests: ['Traveling', 'Outdoor activities', 'Hobbies'],
    personalityTraits: [
      'Well-mannered',
      'Complimentary',
      'Attentive',
      'Generous',
      'Kind',
    ],
    idealDynamic: 'Looking for a man beside whom I could be weak.',
  },
  photos: [
    'https://img.freepik.com/free-photo/empty-wooden-dock-lake-during-breathtaking-sunset-cool-background_181624-27469.jpg',
    'https://img.freepik.com/free-photo/empty-wooden-dock-lake-during-breathtaking-sunset-cool-background_181624-27469.jpg',
    'https://img.freepik.com/free-photo/empty-wooden-dock-lake-during-breathtaking-sunset-cool-background_181624-27469.jpg',
  ],
};
const UserProfile = ({ user = sampleUserData, onClose }) => {
  return (
    <div className="user-profile" onClick={onClose}>
      <div className="profile-background">
        {/* Profile background image */}
        <img
          src={user.background}
          alt="Profile Background"
          className="background-image"
        />
      </div>
      <div className="user-details">
        {/* Profile image */}
        <img src={user.avatar} alt={user.name} className="user-picture-large" />
        {/* User basic information */}
        <div>
          <h2>{user.name}</h2>
         <div  className="user-description">{user.description} </div>
        </div>
        {/* Profile details */}
        <div className="user-description">
          {Object.entries(user.details).map(([key, value]) => (
            <div key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {value}
            </div>
          ))}
        </div>
        {/* Additional user information */}
        <div className="user-additional-info">
          <h3>Looking For</h3>
          <p className="user-description">
            {user.preferences.gender}, {user.preferences.ageRange}
          </p>

          <h3>Ideal Man</h3>
          <ul className="user-description">
            {Object.entries(user.preferences.idealMan).map(([key, value]) => (
              <li key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                {value}
              </li>
            ))}
          </ul>

          <h3>Interests</h3>
          <ul className="user-description">
            {user.preferences.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>

          <h3>Personality Traits</h3>
          <ul className="user-description">
            {user.preferences.personalityTraits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>

          <h3>Ideal Dynamic</h3>
          <p className="user-description">{user.preferences.idealDynamic}</p>
        </div>
        {/* User photos */}
        <div className="user-photos">
          <h3>User Photos</h3>
          <div className="photos-container">
            {user.photos.map((photo, index) => (
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


