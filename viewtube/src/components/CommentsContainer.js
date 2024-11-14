import React from 'react';

const commentData = [
    {
        name: "@Ravi123",
        text: "Awesome!😊",
        replies: [

        ]
    },
    {
        name: "@Pinki-jha",
        text: "Tecnoo bro you are my favourite 😊❤",
        replies: [

        ]
    },
    {
        name: "@Pooja234",
        text: "It was Greatest Video ever. Love from me!!",
        replies: [
            {
                name: "@akku2334",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                     
                 ]
             },
             {
                name: "@krishu345",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                     
                 ]
             },
             {
                name: "@vivu677",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                     
                 ]
             },
             {
                name: "@shalu998",
                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                 replies: [
                     
                 ]
             },
             {
                name: "@princess77",
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
                                name: "@princess77",
                                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                                 replies: [
                                     
                                 ]
                             },
                             {
                                name: "@rita44",
                                 text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                                 replies: [
                                    {
                                        name: "@kriti99",
                                         text: "Awesome! video Content, It was Greatest Video ever. Love from me!!",
                                         replies: [
                                            // {
                                            //     name: "@rita44",
                                            //      text: "Awesome! video Content!",
                                            //      replies: [
                                            //         {
                                            //             name: "@Priyu77",
                                            //              text: "Awesome! Love from me!!",
                                            //              replies: [
                                                             
                                            //              ]
                                            //          },
                                                     
                                            //      ]
                                            //  },
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
            alt='user-img' src='https://cdn-icons-png.flaticon.com/512/1946/1946429.png' />
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
    <div className=' p-3'>
      <h1 className='text-2xl font-bold p-2'>49 Comments</h1>
      <CommentList comments={commentData} />
    </div>
  )
}

export default CommentsContainer;
