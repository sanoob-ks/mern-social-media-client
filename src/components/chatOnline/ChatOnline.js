import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './chatOnline.css'

function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([])
    const [onlineFriends, setOnlineFriends] = useState([])

    useEffect(() => {
        const getFriends = async () => {
            try {
                const res = await axios.get("/friends/" + currentId)
                setFriends(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getFriends()
    }, [currentId])

    useEffect(() => {
        setOnlineFriends(friends.filter(friend => onlineUsers.includes(friend._id)))
    }, [friends, onlineUsers])

    const handleClick = async (onlineFriendId) => {
        try {
            const res = await axios.get(`/conversation/find/${currentId}/${onlineFriendId}`)
            setCurrentChat(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='chatOnline'>
            {onlineFriends.map(onlineFriend => (
                <div className="chatOnlineFriend" key={onlineFriend._id} onClick={() => handleClick(onlineFriend._id)}>
                    <div className="chatOnlineImgContainer">
                        <img src={onlineFriend ? onlineFriend.profilePicture ? onlineFriend.profilePicture : "/assets/person/noAvatar.png" : ""} alt="" className="chatOnlineImg" />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName">{onlineFriend ? onlineFriend.username : ""}</span>
                </div>
            ))}
        </div>
    )
}

export default ChatOnline
