const express=require('express')
const app=express()
const User=require("../models/userRegister")
const router=express.Router();

//signIn
router.post("/signin_", async(req,res)=>{
    const {email_or_number,password}=req.body
   
})


New_email=""
//signUp
router.post("/signup/password",async(req,res)=>{
    const{email,password}=req.body.email_or_password
    console.log(password)
    if(!email || !password){
        return res.status(402).send("Fill the form correctly")
    }
    try {
        const Userexist=await User.findOne({email:email})
        if(Userexist){
            return res.status(422).send({error:"Email already exists"})
        }else{
            const user=new User({email,password})
            const userRegister=await user.save()
            res.status(200).send({message:"Successfully Registered"})
        }
        
    } catch (error) {
        console.log(error)
    }
})
// router.post("/signup/password",async(req,res)=>{
//     const{password}=req.body
//     console.log(New_email)
//     const User_=await User.findOne({email:New_email})
//     if(User_){
//         console.log(User_)
//         User_.update({email:New_email},{$set:{password}})
//     }

// })

module.exports=router