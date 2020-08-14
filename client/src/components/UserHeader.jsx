import React from 'react'
import {Link} from 'react-router-dom'
import {Box} from 'grommet'


export default function UserHeader(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>


      {currentUser ? (
        <>
          <Link to='/accounthome'>
            <Box direction="row" gap="small"><Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />   
      <Avatar background="accent-2">
      <Icons.UserFemale color="accent-1" />
    </Avatar></Box> <p>Hello, {currentUser.name}</p> </Link> 
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
