import Post from '../post/Post'
import Share from '../share/Share'
import'./feed.css'
import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

function Feed({username}) {
  const [posts,setPosts]=useState([])
  const {user}=useContext(AuthContext)

  useEffect(()=>{
    const fetchPosts=async()=>{
      const res=username ? await axios.get(`/post/profile/${username}`)
      :await axios.get(`/post/timeline/${user._id}`)
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    }
    fetchPosts()
    
  },[username,user._id])
  return (
    <div className='feed'>
      <div className="feedWrapper">
       {username===user.username && <Share/>}
        {posts.map(post => <Post key={post._id} postDetails={post}/>)}
        
      </div>
    </div>
  )
}

export default Feed
