'use client';
import Nav from "@components/Nav";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const page = () => {

    const {ref:ref1 , inView:inView1 } =useInView();
    const {ref:ref2 , inView:inView2 } =useInView();
    const {ref:ref3 , inView:inView3 } =useInView();
    const {ref:ref4 , inView:inView4 } =useInView();

    const [domLoaded,setDomLoaded] = useState(false);

    useEffect(()=>{
        setDomLoaded(true);
    },[])

  return (
    <>
        {domLoaded &&
        
        <section className="bg-cs_peach_100 pb-24">
            <Nav/>
            <div className="About_content pt-36" ref={ref1} >
                <div className={`text hiddenEl ${inView1 && 'show'}`}>
                    <h1 className="text-5xl md:text-8xl font-bold text-center md:text-left">About Us</h1>
                    <h2 className="text-2xl md:text-3xl text-center md:text-left">Welcome to <span className="text-3xl md:text-4xl font-bold text-cs_pink">CuriousCafe</span>, a digital haven where curiosity knows no bounds and the world of words comes to life.<br/> We are passionate storytellers, eager to share our unique perspectives and creative insights with you!</h2>
                </div> 
                <img className={`border rounded-full border-black ${inView1 ? 'show':'hiddenEl'}`} src="assets/images/about_pic1.jpeg" alt="about page image"></img>
            </div>

            <div className="About_content border-t-2 border-black" ref={ref2}>
                <img className={`border rounded-full border-black ${inView2 ? 'show':'hiddenEl'}`} src="assets/images/about_pic2.jpeg" alt="about page image"></img>
                <div  className={`text hiddenEl ${inView2 && 'show'}`}>  
                    <h1 className="text-5xl md:text-8xl font-bold text-center md:text-left">Our Mission</h1>
                    <h2 className="text-2xl md:text-3xl text-center md:text-left">At CuriousCafe, we're on a mission: to inspire, inform, and connect through the transformative power of words. Explore our diverse articles that stimulate minds and kindle imaginations, fostering a vibrant virtual community.</h2>
                </div>     
            </div>

            <div className="About_content border-t-2 border-black" ref={ref3}>
                <div className={`text hiddenEl ${inView3 && 'show'}`}>
                    <h1 className="text-5xl md:text-8xl font-bold text-center md:text-left">What We Offer</h1>
                    <h2 className="text-2xl md:text-3xl text-center md:text-left">Dive into a rich tapestry of content that spans travel, fashion, lifestyle, food, technology, etc. From thought-provoking articles to practical guides, we curate a wide array of pieces that cater to the curious minds and open hearts.</h2>
                </div>
                <img className={`border rounded-full border-black ${inView3 ? 'show':'hiddenEl'}`} src="assets/images/about_pic3.jpeg" alt="about page image"></img>
            </div>

            <div className="About_content border-t-2 border-black" ref={ref4}>
                <img className={`bg-white border rounded-full border-black ${inView4 ? 'show':'hiddenEl'}`} src="assets/images/about_pic4.jpeg" alt="about page image"></img>
                <div className={`text hiddenEl ${inView4 && 'show'}`}>
                    <h1 className="text-5xl md:text-8xl font-bold text-center md:text-left">Our Philosophy</h1>
                    <h2 className="text-2xl md:text-3xl text-center md:text-left">We believe that knowledge is a journey, not a destination. Our blog is a reflection of this philosophy – a virtual expedition where you can explore, learn, and grow. Embark on a continuous exploration, where learning becomes an adventure and growth knows no bounds. </h2>
                </div>
            </div>

            <div className=" flex flex-col justify-center items-center gap-3  px-12 border-t-2 border-black pt-12">
                <p className="text-3xl text-center md:text-4xl font-semibold">Thank you for being a part of our journey.</p> 
                <p className="text-xl text-center md:text-2xl">Here's to endless exploration, boundless imagination, and the shared love for all things that make us human.</p>
            </div>

        </section>
        
        }
    </>
    
  )
}

export default page