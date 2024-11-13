import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div>
      <div 
      style={{
        scrollbarWidth: "none",        // Firefox
        msOverflowStyle: "none"        // IE and Edge
      }}
       className='w-[85rem] space-x-3 overflow-x-scroll  scrollbar-hide'><ButtonList/></div>
      <div><VideoContainer/></div>
    </div>
  )
}

export default MainContainer
