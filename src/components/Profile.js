import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import '../App.css';

const Profile = () => {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default Profile