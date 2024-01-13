import './Chat.css';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import Chat2 from './Chat2';
import { useGlobalSearchPage } from '../../context/SearchPageContext';


// const socket = io.connect('http://localhost:5000');
const socket = io.connect('https://shadi-dating-app.onrender.com');


function Chat() {
  const { MyData } = useGlobalSearchPage();
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);
 
  useEffect(() => {
    // Retrieve selectedUserId from local storage on component mount
    const selectedUserId = localStorage.getItem('selectedUserId');
 const cleanedUserId = selectedUserId.replace(/"/g, ''); // Remove double quotes
 console.log(`selectedUserId=${cleanedUserId}`);
    if (MyData.name && cleanedUserId) {
      // Automatically join the chat room
      socket.emit('join_room', cleanedUserId);
      setShowChat(true);
      setUsername(MyData.name);
      setRoom(cleanedUserId);
      console.log(`username=${MyData.name}`);
    }
  }, [MyData.name]); // Ensure this effect runs only once on component mount

  return (
    <div className="App">
      {showChat ? (
        <Chat2 socket={socket} username={username} room={room} />
      ) : null}
    </div>
  );
}

export default Chat;




// import './Chat.css';
// import io from 'socket.io-client';
// import { useState, useEffect } from 'react';
// import Chat2 from './Chat2';
// import { useGlobalSearchPage } from '../../context/SearchPageContext';

// const socket = io.connect('http://localhost:5000');

// function Chat() {
//   const { MyData } = useGlobalSearchPage();
//   const [username, setUsername] = useState('');
//   const [room, setRoom] = useState('');
//   const [showChat, setShowChat] = useState(false);

//   useEffect(() => {
//     // Retrieve selectedUserId from local storage on component mount
//     const selectedUserId = localStorage.getItem('selectedUserId');
//     console.log(`selectedUserId=${selectedUserId}`);

//     if (MyData.name && selectedUserId) {
//       // Automatically join the chat room
//       socket.emit('join_room', selectedUserId);
//       setShowChat(true);
//       setUsername(MyData.name);
//       setRoom(selectedUserId);
//       console.log(`username=${MyData.name}`);
//     }
//   }, [MyData.name]); // Ensure this effect runs only once on component mount

//   return (
//     <div className="App">
//       {showChat ? (
//         <Chat2 socket={socket} username={username} room={room} />
//       ) : null}
//     </div>
//   );
// }

// export default Chat;



// ----------------------------------------------

// [dated]
// -------------------------------------------------
// import './Chat.css';
// import io from 'socket.io-client';
// import { useState, useEffect } from 'react';
// import Chat2 from './Chat2';
// import { useGlobalSearchPage } from '../../context/SearchPageContext';

// const socket = io.connect('http://localhost:5000');

// function Chat() {
//   const { MyData } = useGlobalSearchPage();
//   const [username, setUsername] = useState('');
//   const [room, setRoom] = useState('');
//   const [showChat, setShowChat] = useState(false);

//   useEffect(() => {
//     // Retrieve selectedUserId from local storage on component mount
//     const selectedUserId = localStorage.getItem('selectedUserId');
//     console.log(`selectedUserId=${selectedUserId}`);

//     if (MyData.name && selectedUserId) {
//       // Automatically join the chat room
//       socket.emit('join_room', selectedUserId);
//       setShowChat(true);
//       setUsername(MyData.name);
//       setRoom(selectedUserId);
//       console.log(`username=${MyData.name}`);
//     }
//   }, [MyData.name]); // Ensure this effect runs only once on component mount

//   return (
//     <div className="App">
//       {showChat ? (
//         <Chat2 socket={socket} username={username} room={room} />
//       ) : null}
//     </div>
//   );
// }

// export default Chat;


// import './Chat.css';
// import io from 'socket.io-client';
// import { useState } from 'react';
// import Chat2 from './Chat2';

// const socket = io.connect('http://localhost:5000');

// function Chat() {
//   const [username, setUsername] = useState('');
//   const [room, setRoom] = useState('');
//   const [showChat, setShowChat] = useState(false);

//   const joinRoom = () => {
//     if (username !== '' && room !== '') {
//       socket.emit('join_room', room);
//       setShowChat(true);
//     }
//   };

//   return (
//     <div className="App">
//       {!showChat ? (
//         <div className="joinChatContainer">
//           <h3>Join A Chat</h3>
//           <input
//             type="text"
//             placeholder="John..."
//             onChange={(event) => {
//               setUsername(event.target.value);
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Room ID..."
//             onChange={(event) => {
//               setRoom(event.target.value);
//             }}
//           />
//           <button onClick={joinRoom}>Join A Room</button>
//         </div>
//       ) : (
//         <Chat2 socket={socket} username={username} room={room} />
//       )}
//     </div>
//   );
// }

// export default Chat;
