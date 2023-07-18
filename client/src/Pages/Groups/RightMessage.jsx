import React from 'react'
import moment from 'moment';

export default function RightMessage(props) {
  return (
    <div>
        <div class="msg right-msg">
      <div
       class="msg-img"
      //  style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
      ></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">You</div>
          <div class="msg-info-time">{moment.utc(props.date).local().startOf('seconds').fromNow()}</div>
        </div>

        <div class="msg-text">
        {props.message}
        </div>
      </div>
    </div>
    </div>
  )
}
