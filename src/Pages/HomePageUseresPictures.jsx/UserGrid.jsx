import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserGrid.css';

const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [imagesPerRow, setImagesPerRow] = useState(5);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchData();

    const handleResize = () => {
      if (window.innerWidth < 822) {
        setImagesPerRow(2);
      } else if (window.innerWidth < 995) {
        setImagesPerRow(4);
      } else {
        setImagesPerRow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getUserInformations = (user) => {
    console.log('User Connection ID:', user.connectionId);
    localStorage.setItem('selectedUserId', JSON.stringify(user.connectionId));
    setSelectedUser(user);
  };

  return (
    <div className="user-grid">
      {users.map((user) => (
        <div className="user-item" key={user._id}>
          <button
            className="makeitinsideimage"
            onClick={() => getUserInformations(user)}
          >
            <Link key={user.connectionId} to={`/${user.connectionId}`}>
              <img src={user.avatar} alt={user.name} className="user-picture" />
              <div>{user.name}</div>
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserGrid;




// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './UserGrid.css';

// const UserGrid = () => {
//   const [users, setUsers] = useState([]);
//   const [imagesPerRow, setImagesPerRow] = useState(5);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/users');
//         setUsers(response.data.data);
//       } catch (error) {
//         console.error('Error fetching user data:', error.message);
//       }
//     };

//     fetchData();

//     const handleResize = () => {
//       if (window.innerWidth < 822) {
//         setImagesPerRow(2);
//       } else if (window.innerWidth < 995) {
//         setImagesPerRow(4);
//       } else {
//         setImagesPerRow(5);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const getUserInformations = (userId) => {
//     console.log('User ID:', userId._id);
//     localStorage.setItem('selectedUserId', JSON.stringify(userId._id));
//     setSelectedUser(userId);
//   };

//   return (
//     <div className="user-grid">
//       {users.map((user) => (
//         <div className="user-item" key={user._id}>
//           <button
//             className="makeitinsideimage"
//             onClick={() => getUserInformations(user)}
//           >
//             <Link key={user._id} to={`/${user._id}`}>
//               <img src={user.avatar} alt={user.name} className="user-picture" />
//             </Link>
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserGrid;
