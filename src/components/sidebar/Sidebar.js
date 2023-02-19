import './sidebar.css'
import React from "react"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from '../../dummyData'
import Friend from '../friend/Friend';


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarContainer">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeedIcon className='sidebarListItemIcon'/>
                <span className="sidebarListItemText">feed</span>
            </li>
            <li className="sidebarListItem">
                <ChatIcon className='sidebarListItemIcon'/>
                <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
                <PlayCircleIcon className='sidebarListItemIcon'/>
                <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
                <GroupIcon className='sidebarListItemIcon'/>
                <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
                <BookmarkIcon className='sidebarListItemIcon'/>
                <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <HelpIcon className='sidebarListItemIcon'/>
                <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
                <WorkIcon className='sidebarListItemIcon'/>
                <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
                <EventIcon className='sidebarListItemIcon'/>
                <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
                <SchoolIcon className='sidebarListItemIcon'/>
                <span className="sidebarListItemText">Courses</span>
            </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
            {Users.map(u=> <Friend key={u.id} user={u}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
