import React from 'react'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../message/Message'
import './messenger.css'

function Messenger() {
  return (
    <div className='messenger'>
      <div className="chatMenu">
        <div className="chatMenuWrapper">
            <input type="text" placeholder='Search for friends..' className="chatMenuInput" />
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
            <div className="chatBoxTop">
                <Message/>
                <Message/>
                <Message  own={true}/>
                <Message/>
                <Message/>
                <Message own={true}/>
                <Message own={true}/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message own={true}/>
                <Message />
                <Message/>
                <Message own={true}/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message own={true}/>
            </div>
            <div className="chatBoxBottom"> 
                <textarea placeholder='write something...' className='chatTextArea'></textarea>
                <button className='chatSubmitButton'>send</button>
            </div>
        </div>
      </div>
      <div className="chatOnline">
         <div className="chatOnlineWrapper">
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
         </div>
      </div>
    </div>
  )
}

export default Messenger
