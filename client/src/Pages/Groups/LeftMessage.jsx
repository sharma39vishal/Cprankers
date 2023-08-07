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
    <li className="message">
    <div className="picture">:-)</div>
    <div className="contents">
    <div className="msg-info">
          <div className="msg-info-name">You</div>
          <div className="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
        </div>
       
        {props.message}
        
        {props.file ?<button className='download-msg-file' style={{cursor:"pointer"}} onClick={handleDownload} disabled={!fileData}>
         Download File
       </button>:null}

    </div>
    </li>
  )
}

    //      <div className="msg left-msg">
    //   <div
    //    className="msg-img"
    //     >
    //     <i  className="fa-solid fa-user"></i>

    //     </div>

    //   <div className="msg-bubble">
    //     <div className="msg-info">
    //       <div className="msg-info-name">Anonymous</div>
    //       <div className="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
    //     </div>

    //     <div className="msg-text">
    //         {props.message}
    //         <button onClick={handleDownload} disabled={!fileData}>
    //     Download File
    //   </button>
    //     </div>
    //   </div>
    // </div>
