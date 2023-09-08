import { connectToDB } from "@utils/database";
import Post from "@models/posts";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {

    connectToDB();

    try {
        const posts = await Post.find({username:params.username})
        return NextResponse.json(posts)

    } catch (error) {
        console.log(error)
    }

}