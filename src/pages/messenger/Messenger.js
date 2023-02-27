import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

function Messenger() {

  const { user } = useContext(AuthContext)
  const [conversation, setConversation] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessages] = useState([])
  const scrollRef = useRef()


  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/conversation/" + user._id)
        setConversation(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    getConversation()
  }, [user._id])

  useEffect(()=>{
    const getMessages= async() => {
      try {
        const res = await axios.get(`/message/${currentChat ? currentChat._id : ""}`)
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    if (currentChat) getMessages()
  },[currentChat])

  const handleSend = async() => {
    const message={
      sender:user._id,
      text:newMessage,
      conversationId:currentChat._id
    }
    const res = await axios.post("/message" , message)
    setMessages([...messages,res.data])
    setNewMessages("")
  }

  useEffect(()=>{
    //console.log(scrollRef.current);
    if (scrollRef.current) scrollRef.current.scrollIntoView({behavior:"smooth"})
  },[messages])

  return (
    <>
      <Topbar />
      <div className='messenger'>
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input type="text" placeholder='Search for friends..' className="chatMenuInput" />
            {conversation.map(c =>
            <div key={c._id} onClick={()=>setCurrentChat(c)}>
              <Conversation conversation={c} currentUser={user} />
            </div>  
            )}
          </div>
        </div>
        <div className="chatBox">
          {currentChat ? <>
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
               {messages.map(m => (
                <div ref={scrollRef} key={m._id}>
                  <Message  message={m} own={m.sender===user._id} />
                </div>
               ))}
              </div>
              <div className="chatBoxBottom">
                <textarea onChange={(e) => setNewMessages(e.target.value)} value={newMessage} placeholder='write something...' className='chatTextArea'></textarea>
                <button onClick={handleSend} className='chatSubmitButton'>send</button>
              </div>
            </div>
            </> : <span className='noChatText'>Open a chat to start a chat</span> }

        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger
