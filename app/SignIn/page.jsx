'use client';
/*Sign In*/
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import SignUp from '@components/SignUp'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignIn = () => {
  const router = useRouter();

  const [domLoaded,setDomLoaded] = useState(false);

  const [signup,setSignUp] = useState(false);

  useEffect(()=>{
    setDomLoaded(true)
  },[]);

  const [userSignInDetails,setUserSignInDetails] = useState({
    email:"",
    password:""
  });


  const handleUserDetailsChange = (event) => {
    const {name,value} = event.target;
    setUserSignInDetails((prev) => {
      return {...prev,[name]:value}
    })
  }

  function checkValidity(){
    return (!userSignInDetails.email || !userSignInDetails.password) ?  false : true;
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    const valid  = checkValidity();
    if(valid){
        try {
          const response = await fetch('/api/signin', {
            method: 'POST',
            body: JSON.stringify(userSignInDetails),
          });
          if(response.ok){
            router.push("/");
          }else{
            alert("Invalid Email or password!");
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
      domLoaded && (
        signup ? 
          <SignUp/>
        : 
        <section className="login_bg w-full flex justify-center items-center">
                <div className="glass_box">

                  <div className="login_box">
                    
                    <div className="absolute back_btn flex" onClick={() =>{router.push("/")}}>
                      <ArrowBackIcon/>
                    </div>
                    
                    <h1 className="font-normal text-center mt-6 text-xl">Sign In to your Account</h1>

                    <form onSubmit={(e)=>{handleSignIn(e)}}>
                      <p className="mx-5 mt-6 text-gray-700">Email</p>
                      <input className="signup_input" name="email" type="text" value={userSignInDetails.email} placeholder="Enter a valid email id" onChange={handleUserDetailsChange} autoComplete="off"></input>

                      <p className="mx-5 mt-6 text-gray-700">Password</p>
                      <input className="signup_input" name="password" type="password" value={userSignInDetails.password} placeholder="Enter your password" onChange={handleUserDetailsChange} autoComplete="off"></input>

                      <div className="flex justify-center items-center">
                        <button type="submit" className="_signin_btn">Sign In</button>
                      </div>
                    </form>
                    

                    <div className="flex flex-col justify-center items-center mt-4">
                      <p className="text-md">Don't have an account?</p>
                      <button type="button" className="inline-block p-0 text-md text-blue-500 hover:underline" onClick={()=>{setSignUp(true)}}>Sign up and get started!</button>
                    </div>

                  </div>
                </div>
            </section>
      )
    }
    </>
    
  )
}

export default SignIn