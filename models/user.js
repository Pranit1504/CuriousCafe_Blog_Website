import {Schema , model , models} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type:String,
            required : [true , "Username is required!"]
        },
        email:{
            type:String,
            required : [true , "Email is required!"]
        },
        password:{
            type:String,
            required : [true , "Password is required!"]
        },

    }
);

const User = models.User || model("User",userSchema);

export default User;