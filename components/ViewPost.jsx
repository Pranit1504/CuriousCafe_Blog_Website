'use client';

import CommentSection from './CommentSection';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CommentSectionHor from './CommentSectionHor';

const ViewPost = ({post,setViewingPost}) => {

  const router = useRouter();

  const [copied,setCopied] = useState("");
  const [commentsOpen,setCommentsOpen] = useState(false);

  const handleBackClick = () => {
    setViewingPost(false);
    return
  }

  const handleCopy = () => {
    setCopied(post.content);
    navigator.clipboard.writeText(post.content);
    setInterval(()=>setCopied(""),3000)
  }

  const handleCommentsClick = () => {
    setCommentsOpen(true);
    return
  }
  return (
    <section className="view_post_bg">
        <div className="view_post_box">
            <div className="view_post_heading relative">
              <button className="back_btn flex absolute left-2 top-2" onClick={handleBackClick}><CancelIcon/></button>
              <h1 className="text-center font-bold  text-4xl md:text-5xl">
                {post.title.length >16 ? `${post.title.substring(0,16)}...` : post.title}
              </h1>
              <div className='absolute right-2.5' onClick={handleCopy}>
                {copied===post.content? 
                  <button><DoneIcon/></button>
                :
                  <button ><ContentCopyIcon/></button>
                }
                
              </div>
            </div>
            <div className='view_post_content'>
              <p className="text-xl overflow-scroll overflow-x-hidden">{post.content}</p>
              <div className="flex justify-between items-center mt-2">
                <button type="button" name="tag" onClick={() => {setViewingPost(false);router.push(`/explore?tag=${post.tag}`)}} className="text-lg text-blue-500 font-semibold">#{post.tag}</button>
                <span className="text-lg font-semibold">Creator: <button onClick={()=>{setViewingPost(false);router.push(`/profile/${post.username}`)}} className='text-blue-500 text-md'>@{post.username}</button></span>
                <button className=" font-semibold text-lg" onClick={handleCommentsClick}>Comments<ArrowForwardIosIcon className='scale-75'/></button>
              </div>
            </div>
        </div>

        {commentsOpen &&  <CommentSection postViewed={post} setCommentsOpen={setCommentsOpen}/>}
        {commentsOpen &&  <CommentSectionHor postViewed={post} setCommentsOpen={setCommentsOpen}/>}
        
    </section>  
  )
}

export default ViewPost