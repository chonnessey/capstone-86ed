import userEvent from '@testing-library/user-event'
import React from 'react'
import '../assets/Sidebar.css'
import SidebarRow from './SidebarRow'
import PeopleIcon from '@mui/icons-material/People'
import ChatIcon from '@mui/icons-material/Chat'
import DirtyLensIcon from '@mui/icons-material/DirtyLens';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow src={userEvent.photoURL} title={userEvent.displayName} />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Dee Emz' />
      <SidebarRow Icon={DirtyLensIcon} title='Wall Of Shame' />
    </div>
  )
}

export default Sidebar
