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
  const [fileupload, setfileupload] = useState(null);
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
      <div id="container">
        <div className="msger-header-title">
          <h1 style={{fontSize:"2rem"}}>
            <i className="fas fa-comment-alt"></i> {groupId} Group
          </h1>
        </div>
        <ul>
          {messages.map((message, index) => (
             <>
              {message.user === socket.id ? <RightMessage message={message.text} date={message.date} file={message.file} /> : <LeftMessage message={message.text} date={message.date} file={message.file} />}
            </>
          ))}
        </ul>


        <div className="msger-inputarea bottom-input">
          <div className='file file--uploading'>
            <label htmlFor='input-file'>
              <i className="fa-solid fa-cloud-arrow-up"></i>Uploading
            </label>
            <input id='input-file' type='file'  onChange={(event)=>{setfileupload(event.target.files[0]); setMessage(event.target.files[0].name); }} />
          </div>
          {/* <input type="file" className='btn btn-secondary mx-4 my-4'  onChange={(event)=>{setfileupload(event.target.files[0]); setMessage(event.target.files[0].name); }} /> */}
          <div className='only-field'>
          <input type="text" className="msger-input" value={message} onChange={handleInputChange} />
          <button className="msger-send-btn" type="submit" onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Groups;
