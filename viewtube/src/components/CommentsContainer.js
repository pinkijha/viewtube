import React from 'react';

const commentData = [
    {
        name: "Pinki jha",
        text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
        replies: [

        ]
    },
    {
       name: "Pinki jha",
        text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
        replies: [
            
        ]
    },
    {
        name: "Pinki jha",
        text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
        replies: [
            {
                name: "Pinki jha",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                     
                 ]
             },
             {
                name: "Pinki jha",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                     
                 ]
             },
             {
                name: "Pinki jha",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                     
                 ]
             },
             {
                name: "Pinki jha",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                     
                 ]
             },
             {
                name: "Pinki jha",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                     
                 ]
             },
             {
                name: "Pinki jha",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                    {
                        name: "Pinki Thakur",
                         text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                         replies: [
                             
                         ]
                     },
                     {
                        name: "Shailesh thakur",
                         text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                         replies: [
                            {
                                name: "Pinki jha",
                                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                                 replies: [
                                     
                                 ]
                             },
                             {
                                name: "Pinki jha",
                                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                                 replies: [
                                    {
                                        name: "Pinki jha",
                                         text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                                         replies: [
                                            {
                                                name: "Pinki jha",
                                                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                                                 replies: [
                                                    {
                                                        name: "Pinki jha",
                                                         text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                                                         replies: [
                                                             
                                                         ]
                                                     },
                                                     
                                                 ]
                                             },
                                         ]
                                     },
                                     
                                 ]
                             },
                             
                         ]
                     },
                     
                 ]
             },
            
        ]
    },
    {
        name: "Pinki jha",
        text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
        replies: [
            
        ]
    }
    ]


const Comment = ({data}) =>{
    const {name, text, replies} = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2'>
            <img  className='w-10 h-10'
            alt='user-img' src='https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}    
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold p-2'>Comments</h1>
      <Comment data={commentData[0]} />
    </div>
  )
}

export default CommentsContainer
