'use client';
import PostForm from "@components/PostForm";
import { useRouter, useSearchParams } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

const Edit = () => {


    const router = useRouter();

    const params = useSearchParams(); 
    const postId = params.get('id');

    const {token} = parseCookies('token');
    let userSignedIn=false;
    
    if(token){
        userSignedIn=true;
    }else{
        userSignedIn=false;
    }
    
    const [editedPostDetails,setEditedPostDetails] = useState({
        username:"",
        title:"",
        content:"",
        tag:"",
        comments:[]
    });

    const [domLoaded,setDomLoaded] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            
                await fetch(`api/posts/${postId}`,{method:'GET'}).catch(() => {alert("Failed to fetch user data!")})
                .then((res) => 
                {
                   return res.json()
                })
                .then((post)=>{
                    setEditedPostDetails(post);
                });
        };
        if(userSignedIn){
            fetchPosts();
        }else{
            router.push("/SignIn")
        }

        setDomLoaded(true);

    },[postId]) 

    const handleEditPost = async (post) => {
        
        const response = await fetch(`api/posts/${post._id}`,{method:'PATCH',body:JSON.stringify(post)})

        if(response.ok){
            router.push("/profile");
        }else{
            alert("Failed to edit post!")
            return
        }
        return
    }

 
    return (
        <>
            {domLoaded &&
            
                userSignedIn && 
                    <PostForm type={"Edit"} postDetails={editedPostDetails} setPostDetails={setEditedPostDetails} handleEditPost={handleEditPost}/>     
            }
        </>
    )
}
export default Edit