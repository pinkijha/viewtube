import React, { useState } from "react";
import { BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";

const WatchPageVideoData = ({ info }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  // Liked Button Clickeble
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    if (!isLiked && isDisliked) {
      setIsDisliked(false); // Uncheck dislike if it is already active
    }
  };

  const handleDislikeClick = () => {
    setIsDisliked((prev) => !prev);
    if (!isDisliked && isLiked) {
      setIsLiked(false); // Uncheck like if it is already active
    }
  };

  // Subscribed Clickable
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div>
      <h1 className="font-bold text-xl mt-4">{title}</h1>
      <div className="flex my-3">
        <img
          alt="channelImg"
          className="h-9 mx-2 rounded-full"
          src="https://raw.githubusercontent.com/ViewTube/viewtube/development/.github/images/logo.png"
        />
        <h3 className="text-gray-900 text-lg font-medium ">{channelTitle}</h3>

        <div>
          <button
            className={`font-medium mx-3 my-1 rounded-full px-5 py-2 transition-all duration-200 
        ${
          isSubscribed
            ? "bg-gray-300 text-black border border-gray-400"
            : "bg-black text-white"
        }`}
            onClick={handleSubscribe}
          >
            {isSubscribed ? (
              <span className="flex items-center space-x-2">
                <FaRegBell className="text-lg" />
                <span>Subscribed</span>
              </span>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>

        <div className="flex">
          <span className="flex">
            <span
              className="flex hover:bg-gray-300 cursor-pointer pr-1 
                            border border-r-gray-300 pl-8 ml-28 text-xl my-2 bg-gray-100 py-2 
                            rounded-l-full"
              onClick={handleLikeClick}
            >
              {isLiked ? <BiSolidLike /> : <BiLike />}
              <span className="px-1 items-center text-sm ">
                {formatCount(statistics?.likeCount)}
              </span>
            </span>

            <span
              onClick={handleDislikeClick}
              className="cursor-pointer hover:bg-gray-300 pl-2 pr-8 text-xl my-2 bg-gray-100 py-2  rounded-r-full"
            >
              {isDisliked ? <BiSolidDislike /> : <BiDislike />}
            </span>

            <span
              className="flex hover:bg-gray-300 px-8 ml-8 
                            cursor-pointer text-xl my-2 bg-gray-100 py-2 rounded-full"
            >
              <PiShareFatLight />
              <span className="px-1 items-center text-sm ">Share</span>
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
    return (count / 1_000_000).toFixed(1) + "M";
  } else if (count >= 1_000) {
    return (count / 1_000).toFixed(1) + "K";
  } else {
    return count.toString();
  }
};

export default WatchPageVideoData;
