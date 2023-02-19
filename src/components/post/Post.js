import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useEffect, useState } from "react"
import axios from 'axios'
import {format} from "timeago.js"
import {Link} from "react-router-dom"
function Post({postDetails}) {
  const [like,setLike]=useState(postDetails.like.length)
  const [isLiked,setIsLiked]=useState(false)
  const [user,setUser]=useState({})

  useEffect(()=>{
    const fetchUser=async()=>{
      const res=await axios.get(`/user?userId=${postDetails.userId}`)
      setUser(res.data);
    }
    fetchUser()
    
  },[])

  const handleLiked=()=>{
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
          <img src={postDetails.photo} alt="" className="postImg" />
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
