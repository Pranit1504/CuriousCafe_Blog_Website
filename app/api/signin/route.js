import { connectToDB } from "@utils/database";
import User from "@models/user";
const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    
    const userSignInDetails = await req.json();
    
    await connectToDB();

    try {

        const validEmailUser = await User.findOne({email:userSignInDetails.email});

        if(validEmailUser){
            
            let validPassword=false;
            let token;
            await bcrypt.compare(userSignInDetails.password,validEmailUser.password).then(async (result)=>{
                if(result){
                    token = jwt.sign({username:validEmailUser.username},process.env.JWT_SECRET,{expiresIn:'2d'})  
                    validPassword=true;
                }
            });

            if(validPassword){
                const response = NextResponse.json({msg:"User Signed In"},{status:200})
                response.cookies.set('token',token)
                return response
            }else{
                return new Response("Invalid Email or password!",{status:401})
            }

        }else{
            return new Response("Invalid Email !",{status:404})
        }
    } catch (error) {
        console.log(error);
    }
    
}