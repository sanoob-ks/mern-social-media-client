import './friend.css'


function Friend({user}) {
    return (
        <li className="sidebarFriend">
            <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default Friend
