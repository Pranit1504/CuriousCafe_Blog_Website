'use client';

import Nav from "@components/Nav";
import { useEffect, useState } from "react";

const page = () => {

    const [domLoaded,setDomLoaded] = useState(false);

    useEffect(()=> {
        setDomLoaded(true);
    },[])
  return (
    <>
        {domLoaded &&
        
            <section>
                <Nav/>
                <div className="help_heading">
                    <h1 className="md:text-left text-center text-5xl md:text-7xl font-bold">Help Center</h1>
                </div>

                <div className="help_para border-b-2">
                    <p>Welcome to the CuriousCafe Help Center, your go-to resource for all your queries and concerns.</p> 
                    <p>We're here to ensure your experience on our blog is smooth, enjoyable, and hassle-free.</p> 
                    <p>Below, you'll find answers to common questions and guidance on making the most of your time here.</p>
                </div>

                <div className="QnA">
                    <h1>1.How do I navigate the blog categories?</h1>
                    <p className="mt-3">Easily explore our diverse content by clicking on the categories' arrow-head listed in the main menu.</p>
                    <p>Each category offers a collection of blog articles related to that specific topic.</p>
                </div>

                <div className="QnA">
                    <h1>2.How can I search for specific articles?</h1>
                    <p className="mt-3">Navigate to the explore page and search the required blog posts by entering the tag into the search bar.</p>
                    <p>To view more blog posts on a specific topic, just click on the tag available on the post card ! </p>
                </div>

                <div className="QnA">
                    <h1>3.Can I contribute an article to CuriousCafe?</h1>
                    <p className="mt-3">We're always excited to collaborate with fellow writers ! </p>
                    <p>In order to post your blogs, you need to Sign In to your CuriousCafe Account. If you don't have one Sign Up and create your account.</p>
                    <p >Once signed in, click on 'Create Post' button available on home page or user profile page and contribute your thoughtful blogs !</p>
                </div>

                <div className="QnA">
                    <h1>4.Can I view other user profiles?</h1>
                    <p className="mt-3">Yes ! CuriousCafe is an open-source informative platform.</p>
                    <p>You can explore and get inspired by your favourite creators by reading their mesmorizing posts.</p>
                    <p>All you need to do is click on the creator's username tag on the post card and thats it! You will be redirected to the user profile.</p>
                </div>

                <div className="QnA">
                    <h1>5.How can I edit/delete my blog posts?</h1>
                    <p className="mt-3">Managing your posts is made easy through your own personalised profile page!</p>
                    <p>Navigate to your profile page and search for the post you want to edit/delete.</p>
                    <p>While deleting the post you will be asked for a confirmation.</p>
                </div>

                <div className="QnA">
                    <h1>6.How can I use the CuriousCafe commenting system?</h1>
                    <p className="mt-3">You can comment on user posts only when you are signed in.</p>
                    <p>Once signed in, navigate to the post card and view it by clicking on the arrow-head.</p>
                    <p>Click on 'Comments', which opens a comment box. Here type your comment and praise the post creator!</p>
                </div>

                <div className="help_footer">
                    <p className="text-xl md:text-2xl text-center font-semibold">Thank you for being a part of the CuriousCafe community.</p>
                    <p className="text-sm md:text-lg text-center">We're dedicated to providing you with a platform that enriches your knowledge, sparks your curiosity, and fosters connections.</p>
                    <p className="text-sm md:text-lg text-center">Should you need assistance, guidance, or simply want to explore further, this Help page is your gateway to a smoother and more fulfilling experience.</p>
                </div>

            </section>
        }
    </>
    
  )
}

export default page