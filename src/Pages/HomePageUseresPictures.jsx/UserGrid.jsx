// UserGrid.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserGrid.css';
import UserProfile from './UserProfile';

const UserGrid = () => {
  const users = [
    {
      id: 1,
      name: 'User 1',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    {
      id: 2,
      name: 'User 2',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    {
      id: 3,
      name: 'User 3',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    {
      id: 4,
      name: 'User 4',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    {
      id: 5,
      name: 'User 5',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    {
      id: 6,
      name: 'User 6',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    {
      id: 7,
      name: 'User 7',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    {
      id: 8,
      name: 'User 8',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    {
      id: 9,
      name: 'User 9',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    {
      id: 10,
      name: 'User 10',
      avatar:
        'https://img.freepik.com/premium-photo/generative-ai-portrait-woman-looking-camera-serene-confident_108985-2050.jpg',
    },
    // Add more user data as needed
  ];

  const [selectedUser, setSelectedUser] = useState(null);
  const [imagesPerRow, setImagesPerRow] = useState(5); // Set the number of images per row

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of images per row based on the screen width
      if (window.innerWidth < 822) {
        setImagesPerRow(2);
      } else if (window.innerWidth < 995) {
        setImagesPerRow(4);
      } else {
        setImagesPerRow(5); // Adjust as needed
      }
    };

    // Initial call and add event listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  const renderImageRows = () => {
    const rows = [];
    for (let i = 0; i < users.length; i += imagesPerRow) {
      const row = users.slice(i, i + imagesPerRow);
      rows.push(
        <div className="user-row" key={i}>
          {row.map((user) => (
            <Link key={user.id} to={`/HomePage/${user.id}`}>
              <img
                src={user.avatar}
                alt={user.name}
                className="user-picture"
                onClick={() => handleClick(user)}
              />
            </Link>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="user-grid">
      {renderImageRows()}
      {selectedUser && (
        <UserProfile
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default UserGrid;
