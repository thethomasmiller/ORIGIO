import React from 'react'



export default function UserHeader(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>


      {currentUser ? (
        <>
          <p>Hello, {currentUser.name} {currentUser.email}</p>
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
