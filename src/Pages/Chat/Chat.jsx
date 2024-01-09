// Chat.js
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Chat.css';

const socket = io('http://localhost:5000'); // Replace with your server URL

const Chat = ({ user }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    // Listen for messages from the server
    socket.on('message', (data) => {
      setChatHistory((prevChat) => [...prevChat, data]);
    });

    return () => {
      // Disconnect the socket when the component is unmounted
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        user,
        text: message,
      };

      // Send a message to the server
      socket.emit('message', newMessage);

      // Update the local chat history
      setChatHistory((prevChat) => [...prevChat, newMessage]);

      // Clear the input field
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={msg.user === user ? 'message sent' : 'message received'}
          >
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

// // Chat.js
// import  { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import './Chat.css'

// const socket = io('http://localhost:3001'); // Replace with your server URL

// const Chat = ({ user }) => {
//   const [message, setMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   useEffect(() => {
//     // Listen for messages from the server
//     socket.on('message', (data) => {
//       setChatHistory((prevChat) => [...prevChat, data]);
//     });

//     return () => {
//       // Disconnect the socket when the component is unmounted
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() !== '') {
//       const newMessage = {
//         user,
//         text: message,
//       };

//       // Send a message to the server
//       socket.emit('message', newMessage);

//       // Update the local chat history
//       setChatHistory((prevChat) => [...prevChat, newMessage]);

//       // Clear the input field
//       setMessage('');
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-history">
//         {chatHistory.map((msg, index) => (
//           <div
//             key={index}
//             className={msg.user === user ? 'message sent' : 'message received'}
//           >
//             <strong>{msg.user}:</strong> {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chat;
