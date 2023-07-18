import React from 'react'
import moment from 'moment';

export default function LeftMessage(props) {
  return (
         <div class="msg left-msg">
      <div
       class="msg-img"
    //    style={{backgroundImage:"url(https://image.flaticon.com/icons/svg/327/327779.svg)"}}
      //  style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
      ></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">Anonymous</div>
          <div class="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
        </div>

        <div class="msg-text">
            {props.message}
        </div>
      </div>
    </div>
  )
}
