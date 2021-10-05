import React from 'react'
import '../assets/Post.css'
import { Avatar } from '@mui/material'
import PlusOneIcon from '@mui/icons-material/PlusOne';
import CommentIcon from '@mui/icons-material/Comment';

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>Timestamp..</p>
        </div>
      </div>


      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <PlusOneIcon />
          <p>Cheers</p>
        </div>

        <div className="post__option">
          <CommentIcon/>
          <p>Can I call</p>
        </div>
      </div>
    </div>
  )
}

export default Post
