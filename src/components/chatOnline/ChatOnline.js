import React from 'react'
import './chatOnline.css'

function ChatOnline() {
    return (
        <div className='chatOnline'>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img src="https://im.rediff.com/sports/2023/feb/25murray2.jpg?w=670&h=900" alt="" className="chatOnlineImg" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Jhon honay</span>
            </div>
        </div>
    )
}

export default ChatOnline
