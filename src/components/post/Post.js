import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../dummyData'
import {useState} from 'react'
function Post({postDetails}) {
  const user= Users.filter(u=>u.id===postDetails.userId)
  const [like,setLike]=useState(postDetails.like)
  const [isLiked,setIsLiked]=useState(false)

  const handleLiked=()=>{
    setLike(isLiked? like-1 :like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user[0].profilePicture} alt="" className="postProfileImg" />
            <span className="postUsername">{user[0].username}</span>
            <span className="postDate">{postDetails.date}</span>
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
            <span className="postLikeCounter">{like}</span>
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
