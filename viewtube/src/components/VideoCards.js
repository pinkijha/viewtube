import React from 'react'

const VideoCards = ({ info }) => {
    // console.log(info);

    if (!info) return null; // Add a fallback if info is undefined

    const { snippet, statistics  } = info || {};
    const { channelTitle,  title,  thumbnails } = snippet || {};

    const formatCount = (count) => {
      if (count >= 1_000_000) {
        return (count / 1_000_000).toFixed(1) + 'M';
      } else if (count >= 1_000) {
        return (count / 1_000).toFixed(1) + 'K';
      } else {
        return count.toString();
      }
    };
    
  return (
    <div className='m-2 p-2 w-80 shadow-sm cursor-pointer'>
      <img className=' rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{formatCount(statistics?.viewCount)} Views</li>
      </ul>
    </div>
  )
};

// Higher Order Component
export const AdVideoCard = ({info}) => {
  return(
    <div className='p-2 m-2 border border-red-900'>
      <VideoCards info={info} />
    </div>
  )
}

export default VideoCards
