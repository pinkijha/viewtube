import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/Constant';
import { cacheResult } from '../utils/searchSlice';
import { CiBellOn } from "react-icons/ci";
import { MdOutlineVideoCall } from "react-icons/md";


const Header = () => {
  const [searchQuery , setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector ((store) => store.search);
  

  useEffect(() => {

    const timer = setTimeout(() => {
      
      if (searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestion()
      }
    }, 200);

    return () =>{
      clearTimeout(timer)
    };
    

  }, [searchQuery]);


  // Make en Api Call After each key press
  const getSearchSuggestion = async() => {
    
    //Api Call
    console.log("API CALL - "+searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json[1])

    //Update Cache
    dispatch(cacheResult({
      [searchQuery]: json[1],
    }))
  }


//ToggleMenu
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch (toggleMenu());
  };



  return ( 

      <div className='grid grid-flow-col p-5  shadow-sm'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className=' h-8 cursor-pointer' alt='humburger'
        src='https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png'/>
        <img className='ml-5 h-8 cursor-pointer' alt='youtube-logo'
         src='https://2pink.org/images/logo_viewtube.png'/> 
      </div>

      <div className='col-span-10'>
       <div>
       <input className='px-5 p-2 ml-[200px] w-1/2 border border-gray-400 rounded-l-full '
         placeholder='Search' type='text'
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         onFocus={() => setShowSuggestions(true)}
         onBlur={() => setShowSuggestions(false)} />
        <button className='px-5 py-2  border border-gray-400 rounded-r-full bg-gray-100 '>🔍</button>
      </div>
      {showSuggestions && (
        <div className='ml-[200px] absolute bg-white py-2 px-2 w-[37rem] shadow-lg border-gray-100 rounded-lg'>
        <ul>
          {suggestions.map((s) => <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>)}

        </ul>
      </div>)
      }
       </div>

      <div className='flex mx-4'>
      <span className=' text-2xl cursor-pointer hover:bg-gray-300 p-1 mx-2 rounded-full items-center h-8'>
      <MdOutlineVideoCall />
      </span>
      <span className=' text-2xl cursor-pointer hover:bg-gray-300 p-1 mx-4 rounded-full items-center  h-8'><CiBellOn /></span>
      
        <img className='h-8 col-span-1 cursor-pointer mx-2' alt='user-icon'
        src='https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=' />
        <span className='items-center font-bold my-1 cursor-pointer'>Pinki Jha</span>
      </div>

    </div>
  )
}

export default Header
