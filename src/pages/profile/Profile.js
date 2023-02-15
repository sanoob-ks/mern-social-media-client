import './profile.css'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

function Profile() {
  return (
    <div>
      <Topbar/>
      <div className="profileContainer">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileImg">
                    <img src="/assets/post/2.jpeg" alt="" className="profileCoverImg" />
                    <img src="/assets/person/1.jpg" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Sanoob K S</h4>
                    <span className="profileInfoDesc">hai my name is sanoob</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile={true}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
