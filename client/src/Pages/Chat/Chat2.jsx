import { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from 'axios';
// import { apiService } from '../../api/apiService.js'; // Import your exported apiService

function Chat2({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage.trim() !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      await socket.emit('send_message', messageData);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/chat/history/${room}`
        );
      // try {
      //   const response = await apiService.get(
      //     `/chat/history/${room}`
      //   );

        console.log('Response:', response.data);
        console.log('responseHistoy');
        const data = response.data;

        if (data && data.messages) {
          setMessageList(data.messages);
        }
      } catch (error) {
        console.error('Error fetching chat history:', error.response.data);
      }
    };

    fetchChatHistory();

    const handleReceiveMessage = (data) => {
      setMessageList((list) => [...list, data]);
    };

    socket.on('receive_message', handleReceiveMessage);

    return () => {
      socket.off('receive_message', handleReceiveMessage);
    };
  }, [socket, room, username]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className="message"
              id={username === messageContent.author ? 'you' : 'other'}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => event.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat2;

// import { useEffect, useState } from 'react';
// import ScrollToBottom from 'react-scroll-to-bottom';

// function Chat({ socket, username, room }) {
//   const [currentMessage, setCurrentMessage] = useState('');
//   const [messageList, setMessageList] = useState([]);

//   const sendMessage = async () => {
//     if (currentMessage.trim() !== '') {
//       const messageData = {
//         room: room,
//         author: username,
//         message: currentMessage,
//         time: new Date().toLocaleTimeString([], {
//           hour: '2-digit',
//           minute: '2-digit',
//         }),
//       };

//       await socket.emit('send_message', messageData);
//       // setMessageList((list) => [...list, messageData]);
//       setCurrentMessage('');
//     }
//   };

//   useEffect(() => {
//     const handleReceiveMessage = (data) => {
//       setMessageList((list) => [...list, data]);
//     };

//     socket.on('receive_message', handleReceiveMessage);

//     return () => {
//       socket.off('receive_message', handleReceiveMessage);
//     };
//   }, [socket]);

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>
//       <div className="chat-body">
//         <ScrollToBottom className="message-container">
//           {messageList.map((messageContent, index) => (
//             <div
//               key={index}
//               className="message"
//               id={username === messageContent.author ? 'you' : 'other'}
//             >
//               <div>
//                 <div className="message-content">
//                   <p>{messageContent.message}</p>
//                 </div>
//                 <div className="message-meta">
//                   <p id="time">{messageContent.time}</p>
//                   <p id="author">{messageContent.author}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </ScrollToBottom>
//       </div>
//       <div className="chat-footer">
//         <input
//           type="text"
//           value={currentMessage}
//           placeholder="Hey..."
//           onChange={(event) => setCurrentMessage(event.target.value)}
//           onKeyPress={(event) => event.key === 'Enter' && sendMessage()}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// }

// export default Chat;
