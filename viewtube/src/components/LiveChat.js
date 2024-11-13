import React, { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages';
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from '../utils/chatSlice';
import { generateRandomeMessage, generateRandomName } from './helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const ChatMessage = useSelector((store) => store.chat.messages)
    useEffect(() => {
        const i = setInterval(()=>{
            //API Polling
            // console.log("API Polling");
            dispatch(addMessage(
                {
                    name: generateRandomName(),
                    message: generateRandomeMessage(),
                }
            ))


        },1500);

        return () => clearInterval(i);
    },[]);

  return (
    <>
    <div className='w-full overflow-y-scroll h-[500px] ml-2 p-2 border
     border-black bg-slate-100 rounded-t-lg flex flex-col-reverse '>
     <div>
     {
        // dont use index as a key
       
      ChatMessage.map((c, index) => {
        return <ChatMessages key={index} name= {c.name} message={c.message} />
      })
      }
     </div>
    </div>

    <form className='w-full p-2 ml-2 border border-black rounded-b-lg'
    onSubmit={(e)=>{
        e.preventDefault();
        // console.log("submit")
        dispatch(addMessage({
            name: 'Pinki Jha',
            message: liveMessage,
        }));
        setLiveMessage("");
    }}>
        <input className='w-96 p-2 ' placeholder='Chat..'
         type='text' value={liveMessage}
         onChange={(e)=> {
            setLiveMessage(e.target.value)
         }} />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
