import React from 'react'

function User({user}) {
  return (
    <div className='user'>
    <h1>Name: {user.name}</h1>
    <h3>Username: {user.username}</h3>

  </div>
  )
}

export default User