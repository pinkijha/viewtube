import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'

const LiveChat = () => {
    useEffect(() => {
        const i = setInterval(()=>{
            //API Polling
            console.log("API Polling");

        },2000);

        return () => clearInterval(i);
    },[]);
    
  return (
    <div className='overflow-y-scroll h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg '>
      <ChatMessages name= 'Pinki Jha' message='Hello🙏' />
    </div>
  )
}

export default LiveChat
