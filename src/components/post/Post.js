import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.jpg" alt="" className="postProfileImg" />
            <span className="postUsername">Sanoob</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">hey its my frst post</span>
          <img src="/assets/post/1.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="/assets/like.png" alt="" />
            <img className='likeIcon' src="/assets/heart.png" alt="" />
            <span className="postLikeCounter">8</span>
          </div>
          <div className="postBottonRight">
            <span className="postComment">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
