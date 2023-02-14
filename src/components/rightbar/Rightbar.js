import Online from '../online/Online'
import './rightbar.css'
import {Users} from '../../dummyData'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="bithdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Ameer E A </b>and<b> 3 other friends </b> have birthday today</span>
        </div>
        <img src="/assets/ad.png" alt="" className="righbarAdImg" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=><Online user={u}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
