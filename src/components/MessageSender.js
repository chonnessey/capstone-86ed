import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import '../assets/MessageSender.css'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticon  from '@mui/icons-material/InsertEmoticon'
import db from '../firebase'
// import firebase from 'firebase/compat/app'
import { addDoc, collection } from 'firebase/firestore'

const MessageSender = () => {
  const [input, setInput] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const collectionRef = collection(db, 'posts')
    const payload = {
      message: input
    }
    await addDoc(collectionRef, payload)
    // db.collection('posts').add({
    //   message: input,
    //   // timestamp: firebase.firestore.FieldValue.sereverTimeStamp()
    //   // username: user.displayName,
    //   // image: imageUrl
    // })

    setInput('')
  }
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        {/* <Avatar /> */}
        <form>
          <Avatar />
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            placeholder="Insert rant here"
            className="messageSender__input" />
          <button onClick={handleSubmit} type="submit">Hidden submit</button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticon style={{color: 'orange'}} />
          <h3>Mood</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
