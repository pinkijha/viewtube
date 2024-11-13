import React from 'react'
import ChatMessages from './ChatMessages'

const LiveChat = () => {
  return (
    <div className='overflow-y-scroll h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg '>
      <ChatMessages name= 'Pinki Jha' message='Hello🙏' />
      <ChatMessages name= 'Pinki Jha' message='Hello🙏' />
      <ChatMessages name= 'Pinki Jha' message='Hello🙏' />
    </div>
  )
}

export default LiveChat
