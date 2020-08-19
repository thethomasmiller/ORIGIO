import React from 'react'
import { Link } from 'react-router-dom'
import './UserHeader.css'


export default function UserHeader(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>


      {currentUser ? (
        <><div className='userheader'>
          <div className='image-greeting'>
           <img className='user-image' src={currentUser.img_url}/>
          <p className='userheader-greeting'>Hello, {currentUser.name}</p>
          </div>
            <div className='userheader-buttons-container'>
            <Link to='/accounthome' style={{ textDecoration: 'none', color: 'black' }}>
              <button className='accounthome-button'>ALL IDEAS</button>
            </Link>
            <Link to="/ideas/new" style={{ textDecoration: 'none' }} >
              <button className='create-idea-button' >New Idea</button>
            </Link>
            <button onClick={handleLogout} className='logout-button'>Logout</button>
          </div>
        </div>
        </>
      ) : (
          null
        )
      }

      {currentUser && (
        <>
        </>
      )}
    </div >
  )
}
