import Online from '../online/Online'
import './rightbar.css'
import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

function HomeRightbar() {
  return (
    <>
      <div className="bithdayContainer">
        <img src="/assets/gift.png" alt="" className="birthdayImg" />
        <span className="birthdayText"><b>Ameer E A </b>and<b> 3 other friends </b> have birthday today</span>
      </div>
      <img src="/assets/ad.png" alt="" className="righbarAdImg" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {/* {Users.map((u,index) => <Online key={index} user={u} />)} */}
      </ul>
    </>
  )
}

const ProfileRightbar=({user})=>{
  const [friends,setFriends]=useState([])
  const {user:currentUser}=useContext(AuthContext)
  

  useEffect(()=>{
    const getFriends= async()=>{
      try {
        const friendList=await axios.get(`/friends/${currentUser._id}`)
        console.log(friendList)
        setFriends(friendList.data)
      } catch (err) {
        console.log(err);
      }
    }
    getFriends();
  },[currentUser._id])
  return(
    <>
      {user.username !== currentUser.username && <button className="rightbarFollowButton">
        follow<AddIcon/>
      </button>}
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rihgtbarInfoItem">
          <span className="rightabarInfoKey">city:</span>
          <span className="rightabarInfoValue">{user.city}</span>
        </div>
        <div className="rihgtbarInfoItem">
          <span className="rightabarInfoKey">From:</span>
          <span className="rightabarInfoValue">{user.from}</span>
        </div>
        <div className="rihgtbarInfoItem">
          <span className="rightabarInfoKey">Relationship:</span>
          <span className="rightabarInfoValue">{user.ralationship===1 ? "Single" : user.ralationship===1 ? "Married" : "-" }</span>
        </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          {friends.map(friend=>(
          <Link to={`/profile/${friend.username}`} style={{textDecoration:'none'}}>
            <div className="rightbarFollowing" key={friend._id}>
              <img src={user.profilePicture ? `/images/${user.profilePicture}` : "/assets/person/noAvatar.png"} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">{friend.username}</span>
            </div>
          </Link>
          ))} 
        </div>
    </>
  )
}

function Rightbar({user}) {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
          {user?<ProfileRightbar user={user}/>:<HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar
