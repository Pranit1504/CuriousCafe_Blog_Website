'use client';

import Nav from "@components/Nav";
import {  useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchIcon from '@mui/icons-material/Search';
import Feed from "@components/Feed";
import { useRouter } from "next/navigation";


const page = () => {

  const router = useRouter()

  const [domLoaded,setDomloaded] = useState(false);
  const [refresh,setRefresh] = useState(false);
  const [feedPosts,setFeedPosts] = useState([]);


  const params = useSearchParams(); 
  var searchTag = params.get('tag');

  const searchInp = useRef(searchTag);

  const handleSearchByTag = () => {
    searchTag=searchInp.current;
    router.push(`/explore?tag=${searchInp.current.value || ""}`)
    searchInp.current.value="";
    return
  }

  useEffect(() => {
  
    const fetchPosts = async () => {
            if(!searchTag){
              await fetch("api/feed",{method:'GET'}).catch(() => {alert("Failed to fetch feed data!")})
              .then((res) => {return res.json()}).then((posts) => {setFeedPosts(posts)});
              return true
            }else{
              await fetch(`api/feed/${searchTag}`,{method:'GET'}).catch(() => {alert("Failed to fetch feed data!")})
              .then((res) => {return res.json()}).then((posts) => {setFeedPosts(posts)});
              return true
            }
          }
    fetchPosts();

    setDomloaded(true);

  },[refresh,searchTag])


  return (
    <>  
      {domLoaded && 
        <section>
          <Nav />         
         <div className="explore_page_slideshow_wrapper">
              <img src="/assets/images/explore_bg1.jpeg" alt="explore page img"></img>
              <img src="/assets/images/explore_bg2.jpeg" alt="explore page img"></img>
              <img src="/assets/images/explore_bg3.jpeg" alt="explore page img"></img>
              <img src="/assets/images/explore_bg4.jpeg" alt="explore page img"></img>
              <img src="/assets/images/explore_bg5.png" alt="explore page img"></img>
          </div>

          <div className="explore_page_heading">

            <h1>
              {!searchTag? "#Explore" : <span>#{searchTag}</span> }
            </h1>

            <div className="explore_search_container flex justify-center items-center">
              <label className="text-gray-400">#</label>
              <input className="input_box" type="text" name="tag" ref={searchInp} placeholder="Search by tag" />
              <span className="underline"></span>
              <button type="button" onClick={handleSearchByTag}><SearchIcon/></button>
            </div>
            
          </div>

          <Feed posts={feedPosts} />

        </section>
      }
    </>
      
  )
}

export default page