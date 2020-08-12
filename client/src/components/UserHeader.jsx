import React from 'react'
import { Link } from 'react-router-dom'
import AccountHome from './AccountHome'
import ShowIdeas from './ShowIdeas'

export default function UserHeader(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>


      {currentUser ? (
        <>
          <p>Hello, {currentUser.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
          <Link to='/login'>Login/Register</Link>
        )
      }
      
      {currentUser && (
        <>
        </>
      )}
    </div >
  )
}
