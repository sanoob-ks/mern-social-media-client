import React from 'react'
import './message.css'
import {format} from 'timeago.js'

function Message({message,own}) {
  console.log(own);
  return (
    <div className={own ? 'message own' :'message'}>
      <div className="messageTop">
        <img src="https://im.rediff.com/sports/2023/feb/25murray2.jpg?w=670&h=900" alt="" className="messageImg" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}

export default Message
