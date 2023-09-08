import {Schema , model , models} from "mongoose";

const postSchema = new Schema(
    {
        username:{
            type:String,
            required : [true , "Username is required!"]
        },
        title:{
            type:String,
            required : [true , "Title is required!"]
        },
        content:{
            type:String,
            required : [true , "Content is required!"]
        },
        tag:{
            type:String,
            required : [true , "Tag is required!"]
        },
        comments:{
            type:Array
        }
    }
);

const Post = models.Post || model("Post",postSchema);

export default Post;