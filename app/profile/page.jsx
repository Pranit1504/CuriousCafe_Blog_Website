'use client';

import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import jwt_decode from 'jwt-decode';
import { useEffect,useState } from "react";
import ProfilePage from "@components/ProfilePage";
import ViewPost from "@components/ViewPost";

const Profile = () => {

    const router = useRouter();

    const [domLoaded,setDomLoaded] = useState(false);

    let userSignedIn=false;
    let data='';
    
    const {token} = parseCookies('token');
    
    if(token){
        data = jwt_decode(token)
        userSignedIn=true
    }else{
        userSignedIn=false
    }   

    const [posts,setPosts]=useState([]);
    const [refresh,setRefresh] = useState(false);
    const [viewingPost,setViewingPost] = useState(false);
    
    const [viewPost,setViewPost] = useState({
        username:"",
        title:"",
        content:"",
        tag:"",
        comments:[]
    })

    useEffect(() => {
        const fetchPosts = async () => {
            
                await fetch(`api/users/${data.username}/posts`,{method:'GET'}).catch(() => {alert("Failed to fetch user data!")})
                .then((res) => 
                {
                   return res.json()
                })
                .then((posts)=>{
                    setPosts(posts);
                });
        };
        if(userSignedIn){
            fetchPosts();
            setDomLoaded(true);
        }else{
            router.push("/SignIn");
        }
    },[refresh]) 

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Do you want to delete this post?");
        if(hasConfirmed){
            try {
                
                const response = await fetch(`api/posts/${post._id}`,{method: 'DELETE'})

                if(response.ok){
                    setRefresh((prev) => !prev) ;
                }else{
                    alert("Failed to delete post");
                    return
                }
            } catch (error) {
                console.log(error);
            }
        }
      }
    
      const handleEdit = async (post) => {
        router.push(`/editpost?id=${post._id}`); 
      }

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
        
            userSignedIn && 
                <>
                    <ProfilePage username={data.username} posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} handleViewPostClick={handleViewPostClick}/>
                    {viewingPost && <ViewPost post={viewPost} setViewingPost={setViewingPost}/>}
                </>
        }
        
    </>
    
  )
}

export default Profile