import React from 'react'
import '../assets/Widgets.css'

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe 
        src="https://poachedjobs.com/jobs/all/portland+or" 
        frameBorder="0"
        width='340'
        height='100%'
        style={{border: 'none', overflow: 'hidden'}}
        scrolling='no'
        allowtransparency='true'
        allow='encrypted-media'
        title='poached iframe'></iframe>
    </div>
  )
}

export default Widgets
