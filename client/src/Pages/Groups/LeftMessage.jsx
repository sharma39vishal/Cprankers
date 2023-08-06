import React, { useEffect, useState } from 'react'
import moment from 'moment';

export default function LeftMessage(props) {
  const [fileData, setFileData] = useState(null);
  useEffect(() => {
    setFileData(props.file);
  }, [])
  
  const handleDownload = () => {
    if (fileData) {
      const blob = new Blob([fileData]); // Convert the data to a Blob
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = props.message; // Replace 'filename.extension' with your desired file name and extension
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
  return (
         <div class="msg left-msg">
      <div
       class="msg-img"
        >
        <i  class="fa-solid fa-user"></i>

        </div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">Anonymous</div>
          <div class="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
        </div>

        <div class="msg-text">
            {props.message}
            <button onClick={handleDownload} disabled={!fileData}>
        Download File
      </button>
        </div>
      </div>
    </div>
  )
}
