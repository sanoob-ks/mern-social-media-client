import React from 'react'
import './message.css'

function Message({own}) {
  return (
    <div className={own ? 'message own' :'message'}>
      <div className="messageTop">
        <img src="https://im.rediff.com/sports/2023/feb/25murray2.jpg?w=670&h=900" alt="" className="messageImg" />
        <p className="messageText">hey this a message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  )
}

export default Message
