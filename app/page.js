'use client';

import { useState,useEffect} from "react";
import Nav from "@components/Nav";
import Heading from "@components/Heading";
import MyPosts from "@components/MyPosts";
import HomePageFeed from "@components/HomePageFeed";
import { parseCookies } from "nookies";
import HomeQuote_1 from "@components/HomeQuote_1";
import Footer from "@components/Footer";
import HomeQuote_2 from "@components/HomeQuote_2";

const Home = () => { 
    const [domLoaded,setDomLoaded] = useState(false);
    useEffect(()=>{
      setDomLoaded(true)
    },[]);

    let userSignedIn=false;

    const {token} = parseCookies('token');
    
    if(token){
        userSignedIn=true
    }else{
        userSignedIn=false
    }  

  return (
        <>
            {domLoaded &&
                  <div>
                    <Nav isHome={true}/>
                    <Heading/>
                    <HomeQuote_1/>
                    <HomePageFeed/>
                    {userSignedIn && <MyPosts/> }
                    <HomeQuote_2/>
                    <Footer/>
                  </div>
            }
        </>
    
      
  )
}

export default Home