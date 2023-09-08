'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { parseCookies } from "nookies";
import cookie from "js-cookie";
import NavMenu from "./NavMenu";

const Nav = ({isHome}) => {

    const router = useRouter();
    
    const {token} = parseCookies('token');
    let userSignedIn=false;
    if(token){
        userSignedIn=true
    }else{
        userSignedIn=false
    }
    
    const handleSignOut = () =>{
        cookie.remove('token');
        router.push("/SignIn"); 
    }   

    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <nav className="navigation_bar">

            <div className="flex justify-center items-center pl-6">
                <button type="button" onClick={isHome? scrollToTop : () =>{ router.push("/")} }>
                    <img 
                            className="bg-transparent scale-150"
                            src="/assets/images/CuriousCafe/updated_logo.png"
                            alt="Curious Cafe Logo"
                            style={{width:100}}
                        />
                </button> 
            </div>

            <div className="nav_links">
                {isHome ? <button onClick={scrollToTop}>Home</button> : <Link href={"/"}>Home</Link>}   
                <Link href={"/about"}>About</Link>
                <Link href={"/explore"}>Explore</Link>
                <Link href={"/help"}>Help</Link>
            </div>

            <div className="btn_box">
                {userSignedIn ?
                    <div className="flex justify-center items-center relative">
                        <Link href="/CreatePost" className="mr-2 font-semibold hover:text-gray-600 text-lg"><AddIcon className="absolute top-2.5 -left-6"/>Create Post</Link>
                        <button className="mx-4" onClick={(e)=>{e.preventDefault();router.push("/profile")}}><AccountCircleIcon className="scale-150 bg-red-400 border rounded-full"/></button>
                        <button type="button" className="signin_btn" onClick={handleSignOut}>
                                Sign Out
                        </button>
                    </div>
                : 
                    <button type="button" className="signin_btn" onClick={() => {router.push("./SignIn")}}>
                            Sign In
                    </button>
                }
            </div>
            <div className="btn_box_menu">
                <NavMenu/>
            </div>
        </nav>  
    )
  }
  
  export default Nav