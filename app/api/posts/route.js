import { connectToDB } from "@utils/database";
import Post from "@models/posts";

export const POST = async (req) => {

    const userPost = await req.json();
   
    await connectToDB();

    try {
        async function create(){

            await Post.create({
                username:userPost.username,
                title:userPost.title,
                content:userPost.content,
                tag:userPost.tag,
                comments:userPost.comments
            })
           
            return 
        };
        await create();
        return new Response({status:201})
    } catch (error) {
        console.log(error)
    }
}
