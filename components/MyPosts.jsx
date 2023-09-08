import PostCard from "./PostCard"
import ViewPost from "@components/ViewPost";
import { useEffect,useState } from "react";
import { parseCookies } from "nookies";
import jwt_decode from 'jwt-decode';

const MyPosts = () => {

    const [myPosts,setMyPosts] = useState([]);


    let userSignedIn=false;
    let data='';
    
    const {token} = parseCookies('token');
    
    if(token){
        data = jwt_decode(token)
        userSignedIn=true
    }else{
        userSignedIn=false
    }

    useEffect(()=>{

        const fetchMyPosts = async () => {
            await fetch(`api/users/${data.username}/posts`,{method:'GET'}).catch(error => {console.log(error)}).then((res)=> res.json()).then(posts => setMyPosts(posts))
            return
        }
        if(userSignedIn){
          fetchMyPosts();
        }
      
    },[])

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
  <>  
    {
      myPosts.length !==0 &&

        <section className="py-32 bg-cs_peach_100 shadow-lg">
          <div className="my_post_title  ">
            <h1 className="text-4xl font-bold text-center sm:text-5xl">Your Top Posts</h1>
          </div>
          <div className="Home_myPosts mt-12 mb-12">
            {myPosts && 
            <>
                {
                  myPosts.length>4 ?
                    myPosts.slice(myPosts.length-4,myPosts.length).reverse().map((post,idx) => <PostCard key={idx} post={post} handleViewPostClick={handleViewPostClick}/>)
                  :
                    myPosts.map((post,idx)=><PostCard key={idx} post={post} handleViewPostClick={handleViewPostClick}/>)
                }

                {viewingPost && <ViewPost post={viewPost} setViewingPost={setViewingPost}/>}
            </>
            }
          </div>
        </section>
    }
  </>
    
    
  )
}

export default MyPosts