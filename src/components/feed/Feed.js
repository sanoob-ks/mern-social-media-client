import Post from '../post/Post'
import Share from '../share/Share'
import'./feed.css'
import React, { useEffect, useState } from "react"
import axios from 'axios'

function Feed({username}) {
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    const fetchPosts=async()=>{
      const res=username ? await axios.get(`/post/profile/${username}`)
      :await axios.get("/post/timeline/63edc8591e4569bc24b8530d")
      setPosts(res.data);
    }
    fetchPosts()
    
  },[username])
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map(post => <Post key={post._id} postDetails={post}/>)}
        
      </div>
    </div>
  )
}

export default Feed
