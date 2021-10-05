import React from 'react'
import '../assets/MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam'

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
          <VideocamIcon style={{color: 'red'}} />
        </div>
      </div>
    </div>
  )
}

export default MessageSender
