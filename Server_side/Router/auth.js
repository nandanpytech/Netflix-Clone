const express=require('express')
const app=express()
const User=require("../models/userRegister")
const router=express.Router();

//signIn
router.post("/signin_", async(req,res)=>{
    const {email,password}=req.body.user
    if(!email || !password){
        return res.status(400).send({error:"Please, fill the form."})
    }
    try {
    const Userlogin=await User.findOne({email:email})
    if(Userlogin){
             //generate token
            const token=await Userlogin.generateAuthtoken()
            console.log(token)
             //Generate cookies
            // res.cookie("jwtoken",token,{
            //     expires:new Date(Date.now() + 25892000000),
            //     httpOnly:true
            // })
            res.cookie("lskjd","sdf")
       
    }
    } catch (error) {
        console.log(error)
    }
})


//signUp
router.post("/signup/password",async(req,res)=>{
    const{email,password}=req.body.email_or_password
    if(!email || !password){
        return res.status(402).send({message:"Fill the form correctly"})
    }
    try {
        const Userexist=await User.findOne({email:email})
        if(Userexist){
            return res.status(422).send({error:"Email already exists"})
        }else{
            const user=new User({email,password})
            const userRegister=await user.save()
            return res.status(200).send({message:"Successfully Registered",user:user})
        }
        // const UserRegister=User.findOne({email:email})
        // //Generate token
        // console.log(UserRegister.password)
        // const token=await UserRegister.generateAuthtoken()

        
    } catch (error) {
        console.log(error)
    }
})


module.exports=router