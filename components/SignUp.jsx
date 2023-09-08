'use client';
/*Sign Up*/
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const SignUp = () => {
  
  const router = useRouter();

  const [domLoaded,setDomLoaded] = useState(false);

  const [userDetails,setUserDetails] = useState({
    username:"",
    email:"",
    password:""
  });
  
  useEffect(()=>{
    setDomLoaded(true)
  },[]);

  const handleUserDetailsChange = (event) => {
    const {name,value} = event.target;
    setUserDetails((prev) => {
      return {...prev,[name]:value}
    })
  }

  function checkValidity(){
    return (!userDetails.username || !userDetails.password || !userDetails.email) ?  false : true;
  }

  const handleSignUp = async () => {
      const valid  = checkValidity();
      if(valid){
          try {
            const response = await fetch('/api/signup', {
              method: 'POST',
              body: JSON.stringify(userDetails),
            });
            if(response.ok){
              router.push("/");
            }else{
              alert("Username or Email already exists!");
              return
            }
          } catch (error) {
            console.log(error);
          }
      }else{
        alert("Fill all the details!");
      }
  }

  return (
    <>
    {
      domLoaded && (<section className="login_bg w-full flex justify-center items-center">
      <div className="glass_box">
        <div className="absolute back_btn flex" onClick={() =>{router.push("/")}}>
              <ArrowBackIcon/>
        </div>
        <div className="login_box">
          <h1 className="font-normal text-center mt-4 text-xl">Sign Up to CuriousCafe</h1>

          <p className="mx-5 mt-6 text-gray-700">Username</p>
          <input className="signup_input" name="username" type="text" value={userDetails.username} onChange={handleUserDetailsChange} placeholder="Enter a username" required></input>

          <p className="mx-5 mt-6 text-gray-700">Email</p>
          <input className="signup_input" name="email" type="text" value={userDetails.email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleUserDetailsChange} placeholder="Enter a valid email id" required></input>

          <p className="mx-5 mt-6 text-gray-700">Password</p>
          <input className="signup_input" name="password" type="password" value={userDetails.password} onChange={handleUserDetailsChange} placeholder="Enter your password" required></input>

          <div className="flex justify-center items-center">
            <button type="submit" className="_signin_btn" onClick={handleSignUp}>Sign Up</button>
          </div>
          
        </div>
      </div>
    </section>)
    }
    </>
    
  )
}

export default SignUp