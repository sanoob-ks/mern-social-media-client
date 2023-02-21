import './profile.css'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import React from "react"
import {useEffect,useState} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Profile() {
  const [user,setUser]=useState({})
  const username=useParams().username

  useEffect(()=>{
    const fetchUser=async()=>{
      const res=await axios.get(`/user?username=${username}`)
      setUser(res.data);
    }
    fetchUser()
  },[username])

  return (
    <div>
      <Topbar/>
      <div className="profileContainer">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileImg">
                    <img src={user.coverPicture || "/assets/person/noCover.png"} alt="" className="profileCoverImg" />
                    <img src={user.profilePicture ||"/assets/person/noAvatar.png"} alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>{user.username?user.username:"No name" }</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed username={username}/>
                <Rightbar user={user}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
