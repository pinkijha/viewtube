import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages';
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {
    const dispatch = useDispatch();
    const ChatMessage = useSelector((store) => store.chat.messages)
    useEffect(() => {
        const i = setInterval(()=>{
            //API Polling
            // console.log("API Polling");
            dispatch(addMessage(
                {
                    name: 'Pinki Jha',
                    message: "hello!🙏 good Afternoon"
                }
            ))


        },2000);

        return () => clearInterval(i);
    },[]);

  return (
    <div className='overflow-y-scroll h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg '>
      {
        // dont use index as a key
       
      ChatMessage.map((c, index) => {
        return <ChatMessages key={index} name= {c.name} message={c.message} />
      })}
    </div>
  )
}

export default LiveChat
