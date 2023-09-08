'use client';
import PostCard from "./PostCard";
import ViewPost from "@components/ViewPost";
import { useState } from "react";

const Feed = ({posts}) => {

  const [viewingPost,setViewingPost] = useState(false);
    
  const [viewPost,setViewPost] = useState({
      username:"",
      title:"",
      content:"",
      tag:""
  })


  const handleViewPostClick = async (post) => {
    if(post){
        setViewPost(post);
        setViewingPost(true);
    }else{
        setViewingPost(false);
    }
  }

  return (
    <div className="flex flex-wrap gap-12 justify-center items-center mt-6 mx-6 py-24">
      
      {
        !(posts.length===0)? 
        
          posts.length > 20 ? 
            posts.slice(0,20).map((post,idx) => <PostCard key={idx} post={post} handleViewPostClick={handleViewPostClick} />)
          :
            posts.map((post,idx) => <PostCard key={idx} post={post} handleViewPostClick={handleViewPostClick} />)
          
        :
          <div className="my-6 flex justify-center items-center">
            <img src="assets/images/NoPosts.png" alt="No Posts image"></img>
          </div>
      }

      {viewingPost && <ViewPost post={viewPost} setViewingPost={setViewingPost}/>}

    </div>
  )
}

export default Feed