'use client';

import ProfilePage from "@components/ProfilePage";
import ViewPost from "@components/ViewPost";
import { useState,useEffect } from "react";

const page = ({params}) => {

    const username=params.id;
    const [posts,setPosts]=useState([]);
    const [viewingPost,setViewingPost] = useState(false);

    const [viewPost,setViewPost] = useState({
        username:"",
        title:"",
        content:"",
        tag:"",
        comments:[]
    });
    
    const [domLoaded,setDomLoaded] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            
            await fetch(`../api/users/${username}/posts`,{method:'GET'}).catch(() => {alert("Failed to fetch user data!")})
            .then((res) => 
            {
               return res.json()
            })
            .then((posts)=>{
                setPosts(posts);
            });
    };
   
    fetchPosts();
    setDomLoaded(true);
    
    },[]);

    const handleViewPostClick = async (post) => {
        if(post){
            setViewPost(post);
            setViewingPost(true);
        }else{
            setViewingPost(false);
        }
      }
  return (
    <>
        {domLoaded &&
            <>
                <ProfilePage username={username} posts={posts} handleViewPostClick={handleViewPostClick}/>
                {viewingPost && <ViewPost post={viewPost} setViewingPost={setViewingPost}/>}
            </>
        }
    </>
  )
}

export default page