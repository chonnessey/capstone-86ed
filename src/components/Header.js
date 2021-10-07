import React from 'react'
import '../assets/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import ForumIcon from '@mui/icons-material/Forum'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://pbs.twimg.com/profile_images/1328442491843059717/8i9075yw_400x400.jpg" alt="86 logo"/>
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search 86'ed" type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}><HomeIcon fontSize="large" /></Link>
        </div>
        <div className="header__option">
          <LocalBarIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkJGWKfQ415U4u44_CpDIIJg_qo9cJXQp1A&usqp=CAU'/>
          <h4>chonnessey</h4>
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
