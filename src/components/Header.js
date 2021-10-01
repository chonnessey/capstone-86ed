import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import ForumIcon from '@mui/icons-material/Forum'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="https://pbs.twimg.com/profile_images/1328442491843059717/8i9075yw_400x400.jpg" alt="86 logo"/>
        <div className="header-input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header-middle">
        <div className="header-option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header-option">
          <LocalBarIcon fontSize="large" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <Avatar />
          <h4>Adrian Camacho</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default Header;
