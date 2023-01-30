const express=require("express")
const app=express()
const dotenv=require("dotenv")
const jwt=require("jsonwebtoken")
const User=require("../models/userRegister")
const cookieParser=require('cookie-parser')

dotenv.config({path:'../config.env'})
app.use(cookieParser())

const Authenticate=async(req,res,next)=>{
    try{
        const token= req.headers.cookie
        let jwtoken=null
        token.split(`;`).forEach(function(cookie) {
            let [ name, ...rest] = cookie.split(`=`);
            name = name?.trim();
            if (!name) return;
            const value = rest.join(`=`).trim();
            if (!value) return;
           jwtoken= decodeURIComponent(value);
        });
        const verifyToken=jwt.verify(jwtoken,process.env.SECRET_KEY)
        const rootUser=await User.findOne({_id:verifyToken.id});

        req.rootUser=rootUser;
        next()

    }
    catch(error){
        console.log(error)
    }
}

module.exports=Authenticate
