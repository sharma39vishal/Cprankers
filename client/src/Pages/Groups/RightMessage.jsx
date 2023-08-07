import React from 'react'
import moment from 'moment';

export default function RightMessage(props) {
  return (
    <li className="message mine">
    <div className="picture">(-:</div>
    <div className="contents">
      <div className="msg-info">
          <div className="msg-info-name">Anonymous</div>
          <div className="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
        </div>
        {props.message}
    </div>
    </li>
  )
}

    //     <div className="msg right-msg">
    //   <div
    //    className="msg-img"
    //    >
    //     <i className="fa-solid fa-user"></i>
    //   </div>

    //   <div className="msg-bubble">
        // <div className="msg-info">
        //   <div className="msg-info-name">You</div>
        //   <div className="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
        // </div>

    //     <div className="msg-text">
    //     {props.message}
    //     {/* <div key={url} className="my-4 mx-4"> <a href={url} style={{color:"white"}}><p >{i++}) {url}</p></a></div> */}
    //     </div>
    //   </div>
    // </div>
    // </div>