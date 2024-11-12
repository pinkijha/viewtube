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
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img  className='w-10 rounded-full h-10'
            alt='user-img' src='https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
};

const CommentList = ({comments}) =>{
    return comments.map((comment, index) =>(
        // Dont Use index as a key
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies}/>

            </div>
        </div>
    ));
}


const CommentsContainer = () => {
  return (
    <div className='m-5 p-3'>
      <h1 className='text-2xl font-bold p-2'>Comments</h1>
      <CommentList comments={commentData} />
    </div>
  )
}

export default CommentsContainer;
