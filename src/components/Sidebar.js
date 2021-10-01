import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
    </div>
  )
}

export default Sidebar
