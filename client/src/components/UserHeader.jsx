import React from 'react'
import {Link} from 'react-router-dom'



export default function UserHeader(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>


      {currentUser ? (
        <>
          <Link to='/accounthome'>
            <p>Hello, {currentUser.name}</p> </Link> 
          <button onClick={handleLogout}>Logout</button>
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
