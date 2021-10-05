import React from 'react'
import '../assets/MessageSender.css'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticon  from '@mui/icons-material/InsertEmoticon'

const MessageSender = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        {/* <Avatar /> */}
        <form>
          <input 
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
          <h3>Photo/Video</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender
