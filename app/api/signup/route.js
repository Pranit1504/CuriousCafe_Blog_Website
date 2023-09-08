import { connectToDB } from "@utils/database";
import User from "@models/user";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");
const saltRounds=10;
import jwt from "jsonwebtoken";
export const POST = async (req) => {

    const userDetails = await req.json();
    
    await connectToDB();

    try {
        const userExistsByEmail = await User.findOne({email:userDetails.email});
        const userExistsByUsername = await User.findOne({username:userDetails.username});

        let userSignedUp=false;

        if(!userExistsByEmail && !userExistsByUsername){
            await bcrypt.hash(userDetails.password, saltRounds).then(async (hash) => {
                // Store hash in your password DB.
                await User.create({
                    username:userDetails.username,
                    email:userDetails.email,
                    password:hash,
                }) 
                userSignedUp=true;
            });
            if(userSignedUp){
                let token = jwt.sign({username:userDetails.username},process.env.JWT_SECRET,{expiresIn:'2d'})  
                const response = NextResponse.json({msg:"User Signed Un"},{status:200})
                response.cookies.set('token',token)
                return response
            }else{
                return new Response("Failed to Sign Up",{status:401})
            }
            
        }else{
            return new Response("Username or Email already exists !",{status:500})
        }
    } catch (error) {
        console.log(error);
    }
}


