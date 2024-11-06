import React from 'react'

const Header = () => {
  return (
      <div className='grid grid-flow-col p-5  shadow-sm'>
      <div className='flex col-span-1'>
        <img className=' h-8' alt='humburger'
        src='https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png'/>
        <img className='ml-5 h-8' alt='youtube-logo'
         src='https://2pink.org/images/logo_viewtube.png'/>
      </div>

      <div className=' col-span-10'>
        <input className='p-3 ml-[200px] w-1/2 border border-gray-400 rounded-l-full ' placeholder='Search' type='text' />
        <button className='p-3  border border-gray-400 rounded-r-full'>Search</button>
      </div>

      <div>
        <img className='h-8 col-span-1' alt='user-icon'
        src='https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=' />
      </div>

    </div>
  )
}

export default Header
