import { connectToDB } from "@utils/database";
import Post from "@models/posts";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {

    const searchTag = params.id;

    await connectToDB();

    try {
        const posts = await Post.find({tag:searchTag});
        return NextResponse.json(posts)
    } catch (error) {
        console.log(error)
    }
}