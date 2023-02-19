import './topbar.css'
import React from "react"
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

function Topbar() {
  return (
    <div className='container'>
        <div className="left">
            <Link to="/" className='topLinkTag'>
                <span className="logo">Social Media</span>
            </Link>
        </div>
        <div className="center">
            <div className="searchbar">
                <SearchIcon className='searchIcon'/>
                <input placeholder='search for friends, post or video' className="searchInput" />
            </div>
        </div>
        <div className="right">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">5</span>
                </div>
            </div>
            <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
        </div>
      
    </div>
  )
}

export default Topbar
