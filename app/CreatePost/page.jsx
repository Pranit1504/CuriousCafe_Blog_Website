'use client';

import PostForm from "@components/PostForm";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

const CreatePost = () => {

  const router = useRouter();

  const [postDetails,setPostDetails] = useState({
    username:"",
    title:"",
    content:"",
    tag:"",
    comments:[]
  });

  const [domLoaded,setDomLoaded] = useState(false);
  
  useEffect(() => {

    async function updatePostDetails(){
      setPostDetails({...postDetails, username: data.username})
    }
    if(data){
      updatePostDetails();
      setDomLoaded(true);
    }else{
      router.push("/SignIn");
    } 
    
  },[]) 


  const {token} = parseCookies('token');
    let userSignedIn=false;
    let data;
    if(token){
        data = jwt_decode(token);
        userSignedIn=true
    }else{
        userSignedIn=false
    }

  
async function handleCreatePost(){
      try {

        const response = await fetch('api/posts',{
          method:'POST',
          body:JSON.stringify(postDetails)
        });

        if(response.ok){
          router.push("/");
        }else{
          alert("Failed to create post! Retry again!")
          return
        }

      } catch (error) {
        console.log(error);
      }

  } 

  return (
  <>
    {domLoaded &&
      userSignedIn && 
        <PostForm type={"Create"} postDetails={postDetails} setPostDetails={setPostDetails} handleCreatePost={handleCreatePost}/>
    }
  </>
  )
}

export default CreatePost