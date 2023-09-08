'use client';

import PostCard from "./PostCard";
import { useRouter } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';

const ProfilePage = ({username,posts ,handleDelete ,handleEdit ,handleViewPostClick}) => {

  const router = useRouter();
  
  let noPosts=false; 
  if(posts.length===0){
    noPosts=true
  }else{
    noPosts=false
  } 

  return (
    <section className="profile_section">

                <div className="profile_back_div">
                  <button className="profile_back_btn_md" onClick={() => router.push("/")}>Back</button>
                  <button className="profile_back_btn_sm" onClick={() => router.push("/")}><ArrowBackIcon/></button>
                </div>
                {handleDelete && 
                  <div>
                    <button className="post_create_btn px-6 py-2 top-4 right-6 fixed hidden md:flex" onClick={() => router.push("/CreatePost")}>Create</button>
                    <button className="post_create_btn_sm  top-4 right-6  fixed" onClick={() => router.push("/CreatePost")}><AddIcon/></button>
                  </div>
                }
                
                <div className="profile_box">
                 
                    <h1 className="profile_head text-center">{username}'s Profile</h1>
                    {handleDelete &&
                      <>  
                        <p className="text-lg font-semibold mt-6 text-center sm:text-2xl ">Welcome to your personalised profile page!</p>
                        <p className="text-lg font-semibold text-center sm:text-2xl">Manage your posts!</p>
                      </>
                    }
                    
                    <div className="posts_box">
                        {noPosts ?
                            <div className="flex justify-center items-center mix-blend-color-burn"><img className="" style={{width:1000}} src="/assets/images/ProfileNoPosts.png" alt="No Posts image" ></img></div>
                            : 
                            <div className="flex justify-center items-center gap-12 mt-6 flex-wrap">
                              {
                                posts.map((post,idx) => {
                                    return <PostCard key={idx} post={post} handleDelete={handleDelete} handleEdit={handleEdit} handleViewPostClick={handleViewPostClick}/>
                                })
                              }
                            </div>
                        }
                      </div>

                </div>
    </section>
  )
}

export default ProfilePage