import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { YOUTUBE_VIDEOS_API } from '../utils/Constant';
import WatchPageVideoData from './WatchPageVideoData';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [videoData, setVideoData] = useState(null); // Store only one video object
    const videoId = searchParams.get('v');
    
    const dispatch = useDispatch();

    useEffect(() => {
        fetchVideoDetails();
        dispatch(closeMenu());
    }, [dispatch, videoId]);

    const fetchVideoDetails = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();

        // Find the specific video that matches the videoId
        const video = json.items.find(item => item.id === videoId);

        console.log(json)
        
        if (video) {
            setVideoData(video);
        } else {
            console.warn('Video not found');
        }
    };

    return (
        <div className='flex flex-col ml-[100px] w-full'>
            <div className='px-5 flex'>
                <div>
                    <iframe
                        className='rounded-xl'
                        width="900"
                        height="500"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>

                    {/* Pass only the specific video to WatchPageVideoData */}
                    {videoData && <WatchPageVideoData info={videoData} />}
                </div>

                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    );
};

export default WatchPage;
