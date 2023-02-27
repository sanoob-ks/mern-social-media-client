import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './conversation.css'

function Conversation({conversation,currentUser}) {
  const [user,setUser] = useState(null)

  useEffect(()=>{
    const friendId = conversation.members.find(m => m !== currentUser._id)
    const getUser = async() => {
      try {
        const res = await axios.get("/user?userId="+friendId)
        setUser(res.data) 
      } catch (err) {
        console.log(err);
      }
    }
    getUser()
  },[conversation,currentUser])

  return (
    <div className='conversation'>
      <img src={user ? user.profilePicture ? user.profilePicture : "/assets/person/noAvatar.png" : ""} alt="" className="conversationImg" />
      <span className="conversationName">{user ? user.username : ""}</span>
    </div>
  )
}

export default Conversation
