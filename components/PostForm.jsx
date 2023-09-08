'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";

const PostForm = ({type, postDetails, setPostDetails, handleCreatePost, handleEditPost}) => {
   
    const router = useRouter();

    function handleInputChange(e){
        const {name,value} = e.target;
        setPostDetails((prev) => {
            return {...prev,[name]:value}
        })
    }

    const handleValidity = (e) => {
        
        e.preventDefault();

        function hasWhiteSpaces(s){
            return /\s/g.test(s);
        }
        function hasHash(s){
            if(s[0]==="#"){return true}else{return false}
        }

        if(!postDetails.title || !postDetails.content || !postDetails.tag){
            alert("Fill all the details!");
            return
        }else if(hasWhiteSpaces(postDetails.tag)){
            alert("This version of the app only supports single tags.");
            return
        }else if(hasHash(postDetails.tag)){
            alert("Please remove the starting hash symbol.");
            return
        }else{
            type==="Create" ? handleCreatePost() : handleEditPost(postDetails) 
        }
    }

  return (
    <section className="postForm_bg">
        <div className="relative post_back_btn" onClick={() =>{router.push("/")}}>
                      <ArrowBackIcon/>
        </div>
        <div className="post_glass_box">

            <form className="post_input_form" onSubmit={handleValidity}>

                <h1 className="text-4xl font-bold text-center text-white sm:text-5xl ">{type} Post</h1>

                <h3 className="text-xl font-semibold text-white mt-5 ml-2">Post Title :</h3>
                <input className="post_title mt-3" name="title" value={postDetails.title} onChange={handleInputChange} placeholder="Enter post title"></input>

                <h3 className="text-xl font-semibold text-white mt-5 ml-2">Post Content :</h3>
                <textarea className="post_content mt-3" name="content" value={postDetails.content}  onChange={handleInputChange} placeholder="Enter post content"></textarea>

                <h3 className="text-xl font-semibold text-white mt-5 ml-2">#Tags :<span style={{fontSize:15}}> (Add a tag without the # symbol)</span></h3>
                <input className="post_title mt-3" name="tag" value={postDetails.tag} onChange={handleInputChange}  placeholder="#travel #thinking #cooking"></input>
                
                <div className='flex justify-center items-center mt-6'>
                    <button type="submit" className="post_create_btn ">{type==="Create"?"Create":"Edit"}</button>
                </div>
                
            </form>

        </div>
        
    </section>
  )
}

export default PostForm