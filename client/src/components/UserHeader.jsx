import React from 'react'
import { Link } from 'react-router-dom'

export default function UserHeader(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>


      {currentUser ? (
        <>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
          null
        )
      }
      
      {currentUser && (
        <>
          <Link to='/foods'>Foods</Link>
          <Link to='/flavors'>Flavors</Link>
          <hr />
        </>
      )}
    </header >
  )
}
