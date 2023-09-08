import { connectToDB } from "@utils/database";
import Post from "@models/posts";
import { NextResponse } from "next/server";


export const GET = async(req,{params}) => {

    await connectToDB();

    try {
        
        const postDetails = await Post.findById(params.id);
        return NextResponse.json(postDetails)

    } catch (error) {
        console.log(error);
    }
}


export const PATCH = async (req,{params}) => {

    const editedPost = await req.json();

    await connectToDB();

    try {
        await Post.findByIdAndUpdate(params.id,editedPost)
        return new Response({status:200})
    } catch (error) {
        console.log(error);
    }
}


export const DELETE = async (req,{params}) => {

    await connectToDB();

    try {
        await Post.findByIdAndDelete(params.id);
        return new Response({status:200}) 
    } catch (error) {
        console.log(error)
    }
     
}