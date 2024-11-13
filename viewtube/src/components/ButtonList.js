import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ['All', 'News', 'Live', 'Music', 'Watched', 'Cooking',  
    'Gadgets', 'Motivational',  'Reuse', 'Movies', 'Cartoons', 'Computer',
  'Dramedy',  'Triller', 'Comedy', 'Meeting', 'ReactJs'    ]
  return (
    <div className='flex'>
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  )
}

export default ButtonList
