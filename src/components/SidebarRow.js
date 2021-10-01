import React from 'react'
import '../assets/SidebarRow.css'

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      <p>{title}</p>
    </div>
  )
}

export default SidebarRow
