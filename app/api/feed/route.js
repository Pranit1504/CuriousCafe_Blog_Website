import Post from "@models/posts";
import { connectToDB } from "@utils/database"
import { NextResponse } from "next/server";

export const GET = async () => {

    await connectToDB();

    try {
 
        const posts = await Post.find({});
        return NextResponse.json(posts);

    } catch (error) {
        console.log(error)
    }
}