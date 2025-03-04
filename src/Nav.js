import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='nav nav_black'>
      <div className='nav_contents'>
        <img 
          className="nav_logo"
          src="https://wallpapers.com/images/hd/netflix-logo-redon-black-l2sdc7dpfo35m127.png"
          alt="" 
        />

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt=""  
        />
        <br></br>
      </div>
      
    </div>
  )
}

export default Nav
