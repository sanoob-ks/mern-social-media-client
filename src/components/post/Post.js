import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
function Post({postDetails}) {
  const [like,setLike]=useState(postDetails.like.length)
  const [isLiked,setIsLiked]=useState(false)
  const [user,setUser]=useState({})
  const {user:currentUser}=useContext(AuthContext)

  useEffect(()=>{
    setIsLiked(postDetails.like.includes(currentUser._id))
  },[currentUser._id,postDetails.like])
  
  useEffect(()=>{
    const fetchUser=async()=>{
      const res=await axios.get(`/user?userId=${postDetails.userId}`)
      setUser(res.data);
    }
    fetchUser()
    
  },[])

  const handleLiked=async()=>{
    try {
      await axios.put(`/post/${postDetails._id}/like`,{userId:currentUser._id})  
    } catch (err) {
      alert(err.message)
    }
    setLike(isLiked? like-1 :like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`} className="postLink">
              <img src={user.profilePicture || "/assets/person/noAvatar.png"} alt="" className="postProfileImg" />
            </Link>
            <span className="postUsername">{user.username}</span> 
            <span className="postDate">{format(postDetails.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{postDetails.desc}</span>
          <img src={`/images/${postDetails.image}`} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' onClick={handleLiked} src="/assets/like.png" alt="" />
            <img className='likeIcon' onClick={handleLiked} src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">{like || 0}</span>
          </div>
          <div className="postBottonRight">
            <span className="postComment">{postDetails.comment}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
