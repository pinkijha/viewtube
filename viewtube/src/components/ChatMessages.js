import React from 'react'

const ChatMessages = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
    <img className='h-10 col-span-1 rounded-full' alt='user-icon'
    src='https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=' />
    <span className='px-2 font-bold '>{name}</span>
    <span>{message}</span>
  </div>
  )
}

export default ChatMessages
