import React, { useState } from 'react'
import '../assets/Post.css'
import { Avatar } from '@mui/material'
import PlusOneIcon from '@mui/icons-material/PlusOne';
import CommentIcon from '@mui/icons-material/Comment';

const Post = ({ post, profilePic, image, username, timestamp, message }) => {
  
  const [like, setLike] = useState(23)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
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
          <PlusOneIcon onClick={likeHandler} />
          <p>{like}</p>
        </div>

        <div className="post__option">
          <CommentIcon/>
          <p>Comment</p>
        </div>
      </div>
    </div>
  )
}

export default Post
