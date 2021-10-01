import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="https://pbs.twimg.com/profile_images/1328442491843059717/8i9075yw_400x400.jpg" alt="86 logo"/>
        <div className="header-input">
          <SearchIcon />
        </div>
      </div>
      <div className="header-middle"></div>
      <div className="header-right"></div>
    </div>
  )
}

export default Header;
