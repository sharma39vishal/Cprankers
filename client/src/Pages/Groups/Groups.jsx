import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import './group.css'
import RightMessage from './RightMessage';
import LeftMessage from './LeftMessage';
const socket = io.connect();
// const socket = io.connect("http://localhost:5000/");

const Groups = () => {
  const { groupId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [fileupload,setfileupload]=useState(null);
  useEffect(() => {
    setMessages([])
  }, [groupId])
  
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

  const handleFileChange = (event) => {
    setMessage(event.target.value);
    setfileupload(null);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(socket.id)
    if (message.trim()) {
      const data = {
        room: groupId,
        text: message,
        file: fileupload,
        user: socket.id,
        date: new Date()
      };
      socket.emit('message', data);
      setMessage('');
    setfileupload(null);
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
<div className='max-chat-size'>
  <main class="msger-chat">
  {messages.map((message, index) => (
        <div class="msger-chat" key={index}>
          {message.user===socket.id?<RightMessage message={message.text} date={message.date} file={message.file}/>:<LeftMessage message={message.text} date={message.date} file={message.file}/>}
            {/* <span>{message.text}</span> */}
        </div>
  ))}
  </main>
  </div>
  <div class="msger-inputarea">
  <input type="file" className='btn btn-secondary mx-4 my-4'  onChange={(event)=>{setfileupload(event.target.files[0]); setMessage(event.target.files[0].name); }} />
  <input type="text"  class="msger-input" value={message} onChange={handleInputChange} />
        <button class="msger-send-btn" type="submit" onClick={handleSubmit}>Send</button>
  </div>

</section>
     
    </div>
  );
};

export default Groups;
