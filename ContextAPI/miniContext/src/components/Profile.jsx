import React, { useContext } from 'react'
import UserContext from './context/Usercontext'

function Profile() {

  const {user} = useContext(UserContext)

  if(!user) return <h1>Not logged in</h1>
  return (
    <div>
        <h2>Profile: {user.username}</h2>
    </div>
  )
}

export default Profile