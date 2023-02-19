import Online from '../online/Online'
import './rightbar.css'
import { Users } from '../../dummyData'
import React from "react"

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
        {Users.map((u,index) => <Online key={index} user={u} />)}
      </ul>
    </>
  )
}

const ProfileRightbar=({user})=>{
  return(
    <>
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
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mubashir B K</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mubashir B K</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mubashir B K</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mubashir B K</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mubashir B K</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mubashir B K</span>
          </div>
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
