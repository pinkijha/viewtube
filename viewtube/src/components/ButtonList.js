import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ['All', 'News', 'Live', 'Music', 'Watched', 'Cooking', 'Kitchens', 'Web series',
    'Gadgets', 'Motivational',  'Reuse', 'Movies', 'Cartoons', 'New to you']
  return (
    <div className='flex'>
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  )
}

export default ButtonList
