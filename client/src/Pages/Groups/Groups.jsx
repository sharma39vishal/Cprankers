import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import './group.css'
import RightMessage from './RightMessage';
import LeftMessage from './LeftMessage';
const socket = io.connect();

const Groups = () => {
  const { groupId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    socket.on('message', (data) => {
      console.log(data)
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(socket.id)
    if (message.trim()) {
      const data = {
        room: groupId,
        text: message,
        user: socket.id,
        date: new Date()
      };
      socket.emit('message', data);
      setMessage('');
    }
  };

  return (
    <div>
      <section class="msger">
  <header class="msger-header">
    <div class="msger-header-title">
      <i class="fas fa-comment-alt"></i> {groupId} Discussion
    </div>
    <div class="msger-header-options">
      <span><i class="fas fa-cog"></i></span>
    </div>
  </header>

  <main class="msger-chat">
  {messages.map((message, index) => (
          <div class="msger-chat" key={index}>
            {message.user===socket.id?<RightMessage message={message.text} date={message.date} />:<LeftMessage message={message.text} date={message.date}/>}
             {/* <span>{message.text}</span> */}
          </div>
  ))}

    
  </main>

  <form class="msger-inputarea" onSubmit={handleSubmit}>
  <input type="text"  class="msger-input" value={message} onChange={handleInputChange} />
        <button class="msger-send-btn" type="submit">Send</button>
  </form>
</section>

     
    </div>
  );
};

export default Groups;
