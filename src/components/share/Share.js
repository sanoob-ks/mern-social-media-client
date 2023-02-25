import './share.css'
import React, { useContext, useRef, useState } from "react"
import CollectionsIcon from '@mui/icons-material/Collections';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios'
import CancelIcon from '@mui/icons-material/Cancel';

function Share() {
    const {user}=useContext(AuthContext)
    const desc=useRef()
    const [file,setFile]=useState(null)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const newPost={
            userId:user._id,
            desc:desc.current.value
        }
        if(file){
            const data=new FormData()
            const fileName=Date.now()+file.name
            data.append("name",fileName)
            data.append("file",file)
            newPost.image=fileName
            try {
                await axios.post('/upload',data)
            } catch (err) {
                console.log(err);
            }
        }
        try {
           await axios.post("/post/",newPost)
           window.location.reload()
        } catch (err) {
            alert(err.message)
        }
    }
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src={user.profilePicture ? user.profilePicture :"/assets/person/noAvatar.png"}  alt="" />
                <input placeholder={`what's in your mind ${user.username ? user.username : "Dear user"} ?`} type="text" name="" id="" className="shareTopInput" ref={desc}/>
            </div>
            <hr className="shareHr" />
            {file && (
                <div className="shareImgContainer">
                    <img src={URL.createObjectURL(file)} className='shareImg' alt="" />
                    <CancelIcon className='shareCancelIcon' onClick={()=>setFile(null)}/>
                </div>
            )}
            <form className="shareBottom" onSubmit={handleSubmit}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <CollectionsIcon  htmlColor='tomato' className ='shareOptionIcon'/>
                        <span className="shareOptionText">Photos or Videos</span>
                        <input style={{display:"none"}} type="file" id='file' accept='.png,.jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])}/>
                    </label>
                    <div className="shareOption">
                        <LabelIcon htmlColor='blue' className='shareOptionIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon htmlColor='green' className='shareOptionIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor='goldenrod' className='shareOptionIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton' type='submit'>Share</button>
            </form>
        </div>
    </div>
  )
}

export default Share
