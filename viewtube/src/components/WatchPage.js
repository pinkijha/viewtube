import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const  [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('v'))
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    },[dispatch])
  return (
    <div className='flex flex-col ml-[100px]  w-full'>
    <div className='px-5 flex '>
      <div>
      <iframe className='rounded-xl' width="900" height="500" 
      src={"https://www.youtube.com/embed/"+ searchParams.get('v')} title="YouTube video player" 
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>        
      </iframe>
      </div>

      <div className='w-full'>
        <LiveChat/>
      </div>

    </div>
    <CommentsContainer/>
    </div>
  )
}

export default WatchPage
