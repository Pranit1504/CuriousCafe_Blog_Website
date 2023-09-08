'use client';

import { parseCookies } from "nookies";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import cookie from "js-cookie";
import AddIcon from '@mui/icons-material/Add';

const NavMenu = () => {

  const router = useRouter();

  const {token}=parseCookies();
  let userSignedIn=false;
  if(token){
      userSignedIn=true;
  }else{
      userSignedIn=false;
  }

  const [menuOpen,setMenuOpen] = useState(false);

 

  const handleMenuClick = async () => {
    setMenuOpen((prev)=>!prev)
  }

  const handleSignOut = () =>{
    cookie.remove('token');
    router.push("/SignIn"); 
}   

  return (
    <>
        <div className="menu_icon flex justify-center items-center px-2 py-2 bg-cs_pink rounded-full" onClick={handleMenuClick}>
        <MenuIcon/>
        </div>

        {menuOpen && 
          <div className="menu_dropdown">
            <div className="nav_links flex flex-col m-0 ">
                <Link className="m-2" href={"/"}>Home</Link>
                <Link className="m-2" href={"/about"}>About</Link>
                <Link className="m-2" href={"/explore"}>Explore</Link>
                <Link className="m-2" href={"/help"}>Help</Link>
            </div>
            {userSignedIn? 
              <div className="flex flex-col justify-center items-center gap-3">
                <Link href="/CreatePost" className="border-t-2 border-black  pt-2 font-semibold hover:text-gray-600"><AddIcon className="relative bottom-0.5"/>Create Post</Link>
                <button className="mx-4 font-bold text-cs_pink   hover:text-gray-600" onClick={(e)=>{e.preventDefault();router.push("/profile")}}>Profile</button>
                <button type="button" className="signin_btn  bg-white hover:bg-cs_pink  " onClick={handleSignOut}>
                      Sign Out
                </button>
              </div>
            :
              <div className="border-t-2">
                <button type="button" className="signin_btn mt-2 bg-white hover:bg-cs_pink" onClick={() => {router.push("./SignIn")}}>
                      Sign In
                </button>

              </div>
            }  
          </div>
        }
        
    </>
   
   
  )
}

export default NavMenu