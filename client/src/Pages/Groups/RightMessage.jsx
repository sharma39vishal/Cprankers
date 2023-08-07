import React from 'react'
import moment from 'moment';

export default function RightMessage(props) {
  return (
    <li className="message mine">
    <div className="picture">(-:</div>
    <div className="contents">
      <div class="msg-info">
          <div class="msg-info-name">Anonymous</div>
          <div class="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
        </div>
        {props.message}
    </div>
    </li>
  )
}

    //     <div class="msg right-msg">
    //   <div
    //    class="msg-img"
    //    >
    //     <i class="fa-solid fa-user"></i>
    //   </div>

    //   <div class="msg-bubble">
        // <div class="msg-info">
        //   <div class="msg-info-name">You</div>
        //   <div class="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
        // </div>

    //     <div class="msg-text">
    //     {props.message}
    //     {/* <div key={url} className="my-4 mx-4"> <a href={url} style={{color:"white"}}><p >{i++}) {url}</p></a></div> */}
    //     </div>
    //   </div>
    // </div>
    // </div>