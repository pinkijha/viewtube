import React from 'react';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";

const WatchPageVideoData = ({ info }) => {
    if (!info) return null;

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

 

    return (
        <div>
            <h1 className='font-bold text-xl mt-4'>{title}</h1>
            <div className='flex my-3'>
                <img alt='channelImg' className='h-9 mx-2 rounded-full'
                src="https://raw.githubusercontent.com/ViewTube/viewtube/development/.github/images/logo.png" />
                <h3 className='text-gray-900 text-lg font-medium '>{channelTitle}</h3>

                <div>
                <button className='bg-black font-medium mx-3 my-1 text-white rounded-full px-4 p-2'>
                Subscribe</button>
                </div>

                   <div className='flex'>
                   <span className='flex'>  
                            <span className='flex hover:bg-gray-300 cursor-pointer pr-1 border border-r-gray-300 pl-8 ml-28 text-xl my-2 bg-gray-100 py-2 rounded-l-full'>
                                <BiLike />
                                            <span className='px-1 items-center text-sm '>
                                            {formatCount(statistics?.likeCount)}
                                            </span>
                                </span>
                            <span  className='cursor-pointer hover:bg-gray-300 pl-2 pr-8 text-xl my-2 bg-gray-100 py-2  rounded-r-full'>
                                 <BiDislike />
                            </span>

                            <span className='flex hover:bg-gray-300 px-8 ml-8 cursor-pointer text-xl my-2 bg-gray-100 py-2 rounded-full'><PiShareFatLight />
                                    <span className='px-1 items-center text-sm '>
                                                    Share
                                     </span>
                            </span>
                    </span>
                   </div>

            </div>
            {/* Additional information like views, likes, etc., can go here */}
        </div>
    );
};

export const formatCount = (count) => {
  if (count >= 1_000_000) {
    return (count / 1_000_000).toFixed(1) + 'M';
  } else if (count >= 1_000) {
    return (count / 1_000).toFixed(1) + 'K';
  } else {
    return count.toString();
  }
};

export default WatchPageVideoData;
