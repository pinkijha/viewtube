import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { TiFlashOutline } from "react-icons/ti";  
import { MdSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { BsStopwatch } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuMusic4 } from "react-icons/lu";
import { RiMovie2Line } from "react-icons/ri";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa6";
import { TfiCup } from "react-icons/tfi";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  // early return
  if(!isMenuOpen) return null;

  return (
      <div className='p-4 shadow-lg w-64'>
      <ul>
        <li className=' cursor-pointer p-2 rounded-lg hover:bg-gray-300'><Link className='cursor-pointer flex my-2' to={'/'} > <IoMdHome className=' text-2xl mx-6' /> Home</Link></li>
        <li className='flex cursor-pointer p-2 rounded-lg hover:bg-gray-300 my-2'><TiFlashOutline className=' text-2xl mx-6'  /> Shorts</li>
        <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><MdSubscriptions className=' text-2xl mx-6' />Subscriptions</li>
      </ul> 
      <hr className='mt-4' />

        <h1 className='font-bold pt-5 text-xl ml-6'>You </h1>
        <ul className=''>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><GoHistory className=' text-2xl mx-6'  />History</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><MdOutlinePlaylistPlay className=' text-2xl mx-6'  />Playlists</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><CiYoutube className=' text-2xl mx-6'  />Your Videos</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><BsStopwatch className=' text-2xl mx-6'  />Watch Later</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><BiLike className=' text-2xl mx-6'  />Liked Videos</li>
        </ul>
        <hr className='mt-4' />
        
        <h1 className='font-bold text-xl ml-6 pt-5'>Explore</h1>
        <ul className=''>          
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><BsFire className=' text-2xl mx-6' /> Trending</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><RiShoppingBag4Line className=' text-2xl mx-6' /> Shoping</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><LuMusic4 className=' text-2xl mx-6' />Music</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><RiMovie2Line className=' text-2xl mx-6' />Movies</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><CgMediaLive className=' text-2xl mx-6' />Lives</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><SiYoutubegaming className=' text-2xl mx-6' />Gaming</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><FaRegNewspaper className=' text-2xl mx-6' />News</li>
          <li className='flex cursor-pointer  p-2 rounded-lg hover:bg-gray-300 my-2'><TfiCup className=' text-2xl mx-6' />Sports</li>
        </ul>
        <hr className='mt-4' />
     

    </div>
  )
}

export default Sidebar
