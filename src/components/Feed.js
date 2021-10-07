import React, { useState, useEffect } from 'react'
import '../assets/Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'

const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    })
  }, [])

  return (
    <div className="feed">
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image} />
      ))}
      {/* <Post 
        // key={id}
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkJGWKfQ415U4u44_CpDIIJg_qo9cJXQp1A&usqp=CAU"
        message='Que ondas mijo!?!'
        timestamp='October 5, 2021'
        username='Chonnessey'
        image='https://static.nike.com/a/images/w_1920,c_limit/0876fb5d-3a28-4378-b273-7d15eb5b6741/what-size-soccer-ball-do-i-need-nike-help.jpg'/>
      <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkJGWKfQ415U4u44_CpDIIJg_qo9cJXQp1A&usqp=CAU"
        message='Que ondas mijo!?!'
        timestamp='October 5, 2021'
        username='Chonnessey' />
      <Post /> */}
    </div>
  )
}

export default Feed
