import React from 'react'

const UserInfo = (props) => {
  return (
    <div className='info'>
      <p>{props.title}</p>
      <span>{props.detail}</span>
    </div>
  )
}

export default UserInfo
