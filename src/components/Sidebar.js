import React from 'react'
import '../assets/Sidebar.css'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow title="Friends" />
      <SidebarRow title="Dee Ems" />
      <SidebarRow title="Community" />
    </div>
  )
}

export default Sidebar
