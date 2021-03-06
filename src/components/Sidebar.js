import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import '../assets/Sidebar.css'
import SidebarRow from './SidebarRow'
import PeopleIcon from '@mui/icons-material/People'
import ChatIcon from '@mui/icons-material/Chat'
import DirtyLensIcon from '@mui/icons-material/DirtyLens';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../contexts/AuthContext'
import { useHistory, Link } from 'react-router-dom'

const Sidebar = () => {

  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <div className="sidebar">
      <Link to='/profile' style={{textDecoration: 'none', color: 'black'}}><SidebarRow src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkJGWKfQ415U4u44_CpDIIJg_qo9cJXQp1A&usqp=CAU' title={'chonnessey'} /></Link>
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Messages' />
      <SidebarRow Icon={DirtyLensIcon} title='Wall Of Shame' />
      <SidebarRow onClick={handleLogout} Icon={LogoutIcon} title='Log Out' />
    </div>
  )
}

export default Sidebar
