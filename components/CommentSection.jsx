'use client';

import CancelIcon from '@mui/icons-material/Cancel';
import Comment from './Comment';
import SendIcon from '@mui/icons-material/Send';
import { useState,useEffect } from 'react';
import { parseCookies } from 'nookies';
import jwt_decode from 'jwt-decode';


const CommentSection = ({postViewed,setCommentsOpen}) => {
  
  let userSignedIn=false;
  let data='';

  const {token} = parseCookies('token');
    
    if(token){
        data = jwt_decode(token)
        userSignedIn=true
    }else{
        userSignedIn=false
    } 
    
    const [comment,setComment] = useState({
      username:data.username || "",
      content:""
    })

    const [refresh,setRefresh] = useState(false);
    const [displayComments,setDisplayComments] = useState([]);

    useEffect(() => {

      const fetchComments = async () => {

        await fetch(`../api/posts/${postViewed._id}`,{method:'GET'}).then(req => req.json()).then(post => setDisplayComments(post.comments))
        return true
      }

      fetchComments();

    },[refresh])

    
    const handleCommentInput = (e) => {
      const {name,value} = e.target;
      setComment((prev)=> { return {...prev,[name]:value} })
    }
    
    const handleCloseComments = () => {
        setCommentsOpen(false);
        return
    }

    const handlePostComment = async () => {

      if(!userSignedIn){
        alert("Sign in to post your comment!")
        setComment({
          username:data.username || "",
          content:""
        })
        return
      }
      
      if(!comment.content){
        alert("Add a comment !")
        return
      }

      try {
    
        const response = await fetch(`../api/posts/${postViewed._id}`,{method:'PATCH',body:JSON.stringify({...postViewed , comments:[...displayComments, comment] })})
        
        if(response.ok){
            setRefresh( prev => !prev)
            setComment({
              username:data.username || "",
              content:""
            })
            return
        }
      }catch (error) {
        console.log(error);
      }
    }
    
  return (
    <div className="comment_box">

        <div className="post_comments_heading relative">
              <button className="back_btn flex absolute left-2 top-2" onClick={handleCloseComments}><CancelIcon/></button>
              <h1 className="text-center font-bold  text-2xl md:text-3xl">Comments</h1>
        </div>

        <div className='post_comments_content'>
            {displayComments.length === 0?
              <div className='flex flex-col justify-center items-center' style={{height:280}}><p className='text-center font-semibold'>This post has no comments.</p></div>
            :
              displayComments.map((comment,idx)=> <Comment key={idx} comment={comment}/> ) 
            }
        </div>
        <div className='post_comment_inp'>
              <input name="content" type="text" value={comment.content} onChange={handleCommentInput} placeholder='Add a comment'></input>
              <button onClick={handlePostComment}><SendIcon/></button>
        </div>
    </div>
  )
}

export default CommentSection